import React from "react";
import { render, screen } from "@testing-library/react";
import ContactDetails from "../ContactDetails";

/**
 * CONTACT DETAILS
 * renders
 * calls get contact one
 * displays contact information
 */
test("renders contact details page", () => {
	render(<ContactDetails />);
	const titleElement = screen.getByText(/Contact Details/i);
	expect(titleElement).toBeInTheDocument();
});
