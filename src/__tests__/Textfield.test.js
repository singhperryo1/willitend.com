import { act } from "react-dom/test-utils";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Textfield from "../components/Textfield.js";

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

	var data = {
      herdImmunityDays : 12, 
      vaccPerDay: 144, 
      fullVac: 10, 
      partialVac: 23
    }

	act(() => {
		render(<Textfield place ="AR" statesData = {data} />, container);
	});
	expect(container.textContent).toBe("Vaccine Results for ARDays to Herd Immunity12Vaccinations Per Day144Citizens Currently Vaccinated (Fully)10Citizens Currently Vaccinated (Partially)23");

	act(() => {
		render(<Textfield place = "CA" statesData = {data} />, container); 
	}); 
	expect(container.textContent).toBe("Vaccine Results for CADays to Herd Immunity14Vaccinations Per Day14Citizens Currently Vaccinated (Fully)14Citizens Currently Vaccinated (Partially)14");
});

