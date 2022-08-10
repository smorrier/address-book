import React, {
	createContext,
	useState,
	useContext,
	ReactNode,
	Dispatch,
	SetStateAction,
	useEffect,
} from "react";
import { IContact, IFullContact } from "../../interfaces/IContact";
import contactApi, { IGetContactParams, IGetContactsParams } from "./api";

interface IContactsContext {
	api: {
		getContacts: (e: IGetContactsParams) => Promise<any>;
		getContact: (e: IGetContactParams) => Promise<IFullContact | null>;
	};
	pageSize: number;
	setPageSize: Dispatch<SetStateAction<number>>;
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	contacts: Array<IContact>;
	setContacts: Dispatch<SetStateAction<Array<IContact>>>;
}

const ContactsContext = createContext<IContactsContext>({
	api: {
		getContacts: async () => {},
		getContact: async () => null,
	},
	pageSize: 10,
	setPageSize: () => {},
	page: 1,
	setPage: () => {},
	contacts: [],
	setContacts: () => {},
});

const api = contactApi({
	sliceSize: 10,
});
export function ContactProvider({ children }: { children: ReactNode }) {
	const [contacts, setContacts] = useState<Array<IContact>>([]);
	const [pageSize, setPageSize] = useState<number>(20);
	const [page, setPage] = useState<number>(1);

	useEffect(() => {
		api.getContacts({ page, pageSize }).then((newContacts) => {
			setContacts([...contacts, ...newContacts]);
		});
	}, [page, pageSize]);

	return (
		<ContactsContext.Provider
			value={{
				api,
				pageSize,
				setPageSize,
				page,
				setPage,
				contacts,
				setContacts,
			}}
		>
			{children}
		</ContactsContext.Provider>
	);
}

//Hook
function useContacts() {
	return useContext(ContactsContext);
}

export default useContacts;
