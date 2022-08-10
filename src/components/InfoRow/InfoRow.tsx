import React, { ReactElement } from "react";
import { Row, Title, Value } from "./InfoRow.styled";

interface IInfoRowProps {
	title: string;
	value: string | number;
}
const InfoRow = ({ title, value }: IInfoRowProps): ReactElement => {
	return (
		<Row>
			<Title>{title}</Title>
			<Value value={value} readOnly />
		</Row>
	);
};

export default InfoRow;
