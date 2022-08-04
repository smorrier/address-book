import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import useContacts from "../../context/Contacts/Contacts";
import { IFullContact } from "../../interfaces/IContact";

const ContactDetails = (): ReactElement => {
	const [contact, setContact] = useState<IFullContact | null>(null)
	const { id } = useParams();
	const { api } = useContacts();

	useEffect(() => {
		if(id) {
			api.getContact({ id }).then((e) => {
				setContact(e)
			})
		}
	}, [id])
	return (<div>ContactDetails{contact?.cell}</div>);
}

export default ContactDetails;