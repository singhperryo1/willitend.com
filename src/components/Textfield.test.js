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

it("Renders Textfield Component with Fake AR results/empty results", () => {
	act(() => {
		render(<Textfield place = ''/>, container);
	});
	expect(container.textContent).toBe("Vaccine ResultsDays to Herd ImmunityNaNVaccinations Per DayNaNCitizens Currently Vaccinated (Fully)NaNCitizens Currently Vaccinated (Partially)NaN");

	act(() => {
		render(<Textfield place ="AR" herdImmunityDays = {84} vaccPerDay = {84} fullVac = {84} partialVac = {84}/>, container);
	});
	expect(container.textContent).toBe("Vaccine Results for ARDays to Herd Immunity84Vaccinations Per Day84Citizens Currently Vaccinated (Fully)84Citizens Currently Vaccinated (Partially)84");
});

