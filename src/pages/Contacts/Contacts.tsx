import React, { ReactElement } from "react";
import useContacts from "../../context/Contacts/Contacts";
import useScreenSize from "../../context/ScreenSize";
import { ContactCard } from "./components";
import {
	ContactCardContainer,
	LoadMore,
	PageContainer,
	Title,
} from "./Contacts.styled";

const Contacts = (): ReactElement => {
	const { contacts, page, setPage } = useContacts();
	const { screenSize } = useScreenSize();

	const onLoadMore = () => {
		setPage(page + 1);
	};

	return (
		<PageContainer>
			<Title>Contacts</Title>
			<ContactCardContainer size={screenSize}>
				{contacts.map((contact, i) => {
					return (
						<ContactCard
							key={contact.id.value + i}
							index={i}
							contact={contact}
						/>
					);
				})}
			</ContactCardContainer>
			<LoadMore onClick={onLoadMore}>Load More</LoadMore>
		</PageContainer>
	);
};

export default Contacts;
