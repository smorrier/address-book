import React from "react";
import { render, screen } from "@testing-library/react";
import Contacts from "../Contacts";

/**
 * CONTACTS
 * renders
 * calls get contacts once
 * calls get contacts again when load more is click
 */
test("renders contacs page", () => {
	render(<Contacts />);
	const titleElement = screen.getByText(/Contacts/i);
	expect(titleElement).toBeInTheDocument();
});
