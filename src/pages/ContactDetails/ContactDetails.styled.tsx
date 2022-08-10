import styled from "styled-components";
import { screenSizes } from "../../context/ScreenSize";

const Title = styled.div`
	font-size: 20px;
	width: 100%;
	text-align: center;
	padding-bottom: 10px;
`;

const Container = styled.div`
	padding: 10px;
`;

const Fields = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
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

const ContactTitle = styled.span`
	font-size: 20px;
`;

const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 15px;
	gap: 5px;
`;

export { ContactTitle, Container, Fields, UserImage, Title, Header };
