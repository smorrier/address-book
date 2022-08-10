import React, { ReactElement, useMemo } from "react";
import useScreenSize from "../../../../context/ScreenSize";
import { IContact } from "../../../../interfaces/IContact";
import {
	ContactCard as StyledContactCard,
	Row,
	UserImage,
} from "./ContactCard.styled";

const ContactCard = ({
	contact,
	index,
}: {
	contact: IContact;
	index: number;
}): ReactElement => {
	const { screenSize } = useScreenSize();
	const fullName = useMemo(() => {
		if (!contact) {
			return "";
		}
		return `${contact.name.first} ${contact.name.last}`;
	}, [contact]);

	return (
		<StyledContactCard to={`/details/${index}`}>
			<Row>
				<div>
					<UserImage src={contact.picture.medium} size={screenSize} />
				</div>
				<div>
					<div>{fullName}</div>
					<div>{contact.phone}</div>
				</div>
			</Row>
		</StyledContactCard>
	);
};

export default ContactCard;
