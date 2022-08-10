import React from "react";
import { render, screen } from "@testing-library/react";
import Contacts from "../Contacts";

describe("contacs page", () => {
	it("renders", () => {
		render(<Contacts />);
		const titleElement = screen.getByText(/Contacts/i);
		expect(titleElement).toBeInTheDocument();
	});
});
