import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PostDefault from "./PostDefault"

let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove()
	container = null;
});

it("Renders PostDefault with input props values", () => {
	act(() => {
		render(<PostDefault />, container);
	});
	expect(container.textContent).toBe("Title: Author: Vaccination Site: Date: Their Story: CommentsPost");

	act(() => {
		render(<PostDefault title="My Vaccine Experience" author="John Doe" vaccineSite = "Kaiser Permanente in Roseville, CA" date = "04/04/2021" postContent = "My Experience was Pleasant" />, container);
	});
	expect(container.textContent).toBe("Title: My Vaccine ExperienceAuthor: John DoeVaccination Site: Kaiser Permanente in Roseville, CADate: 04/04/2021Their Story: My Experience was PleasantCommentsPost");
});