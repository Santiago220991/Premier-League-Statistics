import {TransitionComponentActions} from "./transitionComponent.testActions";

describe("transitionComponent ", () => {
    test("should render in the page", () => {
        const transitionComponent = TransitionComponentActions.renderComponent();
        
        transitionComponent.component.expect.toBeShown(
            "transitionComponent-container",
        );
    });
    test("should contain a text", () => {
        const transitionComponent = TransitionComponentActions.renderComponent();

        transitionComponent.component.expect.toHasText(
            "transitionComponent-container",
            "Show Filters",
        );
    });
    test("should contain a text afert clicking on the switch button", () => {
        const transitionComponent = TransitionComponentActions.renderComponent();
        transitionComponent.component.switch.toggle("switch-button");

        transitionComponent.component.expect.toHasText(
            "transitionComponent-container",
            "Test component",
        );
    });
});
