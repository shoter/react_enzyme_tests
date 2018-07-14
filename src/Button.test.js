import React from "react";
import Enzyme, {configure, mount} from "enzyme";
import Button from "./Button";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Button component", function() {
    var self = { onClick : () => {} };
    var button = () => self.button;
    var instance = () => button().instance();
    beforeEach(function(){
        self.button = mount(<Button onClick={() => {self.onClick()}} />)
    })

    afterEach(function() {
        self.button.unmount();
    })

    it("Smoke test", function() {
        expect(
            button().children("button").length
        ).toBe(1)
    })

    it("Not clicked message in state", function() {
        expect(
            instance().state.message
        ).toBe("Not clicked")
    });

    it("Not clicked message displayed", function() {
        expect(
            button().text()
        ).toBe("Not clicked");
    })

    it("Change state after click", function() {
        button().find("button")
        .simulate("click");

        expect(
            instance().state.message
        ).toBe("Clicked");
    })

    it("Change text after click", function() {
        button().find("button")
        .simulate("click");

        expect(
            button().text()
        ).toBe("Clicked");
    })

    it("Executes function on click", function() {
        var clicked = false;
        self.onClick = () => {clicked = true};

        button().find("button")
        .simulate("click");

        expect(clicked).toBe(true);
    })
})