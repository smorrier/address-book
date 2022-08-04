import React, {
	createContext,
	useState,
	useEffect,
	useContext,
	ReactNode,
	Dispatch,
	SetStateAction,
	useMemo,
} from "react";
import { IContact, IFullContact } from "../../interfaces/IContact";
import contactApi, { IGetContactParams } from './api'

interface IContactsContext {
	api: {
		getContacts: () => Promise<any>;
		getContact: (e: IGetContactParams) => Promise<IFullContact | null>;
		setPage: (e: number) => void;
		setPageSize: (e: number) => void;
	},
	pageSize: number;
	setPageSize: Dispatch<SetStateAction<number>>;
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	contacts: Array<IContact>;
}

const ContactsContext = createContext<IContactsContext>({ 
	api: {
		getContacts: async () => {},
		getContact: async () => null,
		setPage: () => {},
		setPageSize: () => {}
	},
	pageSize: 10,
	setPageSize: () => {},
	page: 1,
	setPage: () => {},
	contacts: []
});

export function ContactProvider({ children }: { children: ReactNode }) {
	const [contacts, setContacts] = useState<Array<IContact>>([])
	const [pageSize, setPageSize] = useState<number>(20)
	const [page, setPage] = useState<number>(1)
	const addContacts = (newContacts: Array<IContact>) => {
		setContacts([...contacts, ...newContacts])
	}
	const api = useMemo(() => contactApi({ sliceSize: 10, defaultPage: page, defaultPageSize: pageSize, addContacts }), [])

	useEffect(() => {
		api.setPage(page);
		api.setPageSize(pageSize)
	}, [page, pageSize])

	return (
		<ContactsContext.Provider value={{ api, pageSize, setPageSize, page, setPage, contacts }}>
			{children}
		</ContactsContext.Provider>
	);
}

//Hook
function useContacts() {
	return useContext(ContactsContext);
}

export default useContacts;
