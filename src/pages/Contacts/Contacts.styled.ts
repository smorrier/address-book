import styled from "styled-components";
import { screenSizes } from "../../context/ScreenSize";

const PageContainer = styled.div`
	padding: 8px;
`;

const ContactCardContainer = styled.div<{ size: screenSizes }>`
	display: grid;
	gap: 8px;
	${({ size }) => {
		if (size === screenSizes.mobile) {
			return "grid-template-columns: 1fr;";
		} else {
			return "grid-template-columns: 1fr 1fr;";
		}
	}}
`;

const Title = styled.div`
	font-size: 20px;
	width: 100%;
	text-align: center;
`;

const LoadMore = styled.div`
	background-color: var(--card-color);
	height: 32px;
	font-size: 14px;
	text-align: center;
	cursor: pointer;
	border-radius: 10px;
	margin-top: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
`;

export { PageContainer, ContactCardContainer, Title, LoadMore };
