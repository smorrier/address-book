import styled from "styled-components";
import Input from "../Input";

const Row = styled.div`
	display: flex;
	gap: 4px;
`;

const Title = styled.div`
	flex: 1;
	text-align: right;
	margin: auto;
`;

const Value = styled(Input)`
	flex: 3;
`;

export { Row, Title, Value };
