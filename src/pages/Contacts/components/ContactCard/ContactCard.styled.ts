import { Link } from "react-router-dom";
import styled from "styled-components";
import { screenSizes } from "../../../../context/ScreenSize";

const ContactCard = styled(Link)`
	color: black;
	text-decoration: none;
	background-color: var(--card-color);
	border-radius: 10px;
	padding: 6px;
`;

const Row = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`;

const UserImage = styled.img<{ size: screenSizes }>`
	${({ size }) => {
		if (size === screenSizes.mobile) {
			return `
				height: 64px;
				width: 64px;
			`;
		}
	}}
	border-radius: 8px;
`;

export { ContactCard, Row, UserImage };
