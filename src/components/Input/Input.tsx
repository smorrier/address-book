import React, { InputHTMLAttributes, ReactElement } from "react";
import { StyledInput } from "./Input.styled";

const Input = (props: InputHTMLAttributes<HTMLInputElement>): ReactElement => {
	return <StyledInput {...props} />;
};

export default Input;
