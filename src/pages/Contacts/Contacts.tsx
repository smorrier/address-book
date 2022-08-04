import React, { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";
import useContacts from "../../context/Contacts/Contacts";
import { ContactCard } from "./Contacts.styled";

const Contacts = (): ReactElement => {
	const { api, contacts } = useContacts();
	useEffect(() => {
		api.getContacts()
	}, [])
	
	return (<div>
		<div>Contacts</div>
		{contacts.map((contact, i) => {
			return <ContactCard key={contact.id.value} to={`/details/${i}`}>{contact.name.first}</ContactCard>
		})}
	</div>);
}

export default Contacts;