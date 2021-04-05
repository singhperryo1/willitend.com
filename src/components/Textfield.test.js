import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Textfield from "./Textfield";

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

it("Renders Textfield Component with Fake CA results/empty results", () => {
	act(() => {
		render(<Textfield />, container);
	});
	expect(container.textContent).toBe("Vaccine Results for Days to Herd ImmunityVaccinations Per DayCitizens Currently Vaccinated (Fully)Citizens Currently Vaccinated (Partially)");

	act(() => {
		render(<Textfield place ="CA" dayToHerdIm = "84" dayPerVac = "84" oneShotNum = "84" twoShotNum = "84"/>, container);
	});
	expect(container.textContent).toBe("Vaccine Results for CADays to Herd Immunity84Vaccinations Per Day84Citizens Currently Vaccinated (Fully)84Citizens Currently Vaccinated (Partially)84");
});