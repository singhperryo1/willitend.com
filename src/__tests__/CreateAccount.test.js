import { act } from "react-dom/test-utils";
import Adapter from 'enzyme-adapter-react-16';
import CreateAccount from "../components/CreateAccount.js";
import Enzyme from 'enzyme';
import React from "react";
import { mount, shallow } from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });

it ('should get the username with the desired value', () => {
	const component = shallow(<CreateAccount />); 
	const username = component.find("#username");   

	username.props().onChange({target: {
		value: "jungleDesh"
	}}); 

	expect(username).toHaveLength(1);
	expect(component.find("#username").text()).toEqual("jungleDesh"); 
}); 