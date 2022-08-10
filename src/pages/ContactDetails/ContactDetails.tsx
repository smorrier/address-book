import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoRow } from "../../components";
import useContacts from "../../context/Contacts/Contacts";
import useScreenSize from "../../context/ScreenSize";
import { IFullContact } from "../../interfaces/IContact";
import {
	ContactTitle,
	Container,
	Fields,
	Header,
	Title,
	UserImage,
} from "./ContactDetails.styled";

const ContactDetails = (): ReactElement | null => {
	const [contact, setContact] = useState<IFullContact | null>(null);
	const { id } = useParams();
	const { api } = useContacts();
	const { screenSize } = useScreenSize();

	useEffect(() => {
		if (id) {
			api.getContact({ id }).then((e) => {
				setContact(e);
			});
		}
	}, [id, api]);

	const [fullName = "", fullAddress = ""] = useMemo(() => {
		if (!contact) {
			return [];
		}
		const { location } = contact;
		return [
			`${contact.name.first} ${contact.name.last}`,
			`${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}`,
		];
	}, [contact]);

	return (
		<Container>
			<Title>Contact Details</Title>
			{contact && (
				<>
					<Header>
						<UserImage src={contact.picture.large} size={screenSize} />
						<ContactTitle>{fullName}</ContactTitle>
					</Header>
					<Fields>
						<InfoRow title="Name" value={fullName} />
						<InfoRow title="Phone number" value={contact.phone} />
						<InfoRow title="Age" value={contact.dob.age} />
						<InfoRow title="DOB" value={contact.dob.date} />
						<InfoRow title="Address" value={fullAddress} />
						<InfoRow title="Gender" value={contact.gender} />
					</Fields>
				</>
			)}
		</Container>
	);
};

export default ContactDetails;
