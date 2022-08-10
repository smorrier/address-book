import React from "react";
import { render, screen } from "@testing-library/react";
import ContactDetails from "../ContactDetails";

describe("contac details page", () => {
	it("renders", () => {
		render(<ContactDetails />);
		const titleElement = screen.getByText(/Contact Details/i);
		expect(titleElement).toBeInTheDocument();
	});
});
