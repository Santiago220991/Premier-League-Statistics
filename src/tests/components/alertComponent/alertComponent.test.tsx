import {AlertComponentActions} from "./alertComponent.testActions";

describe("AlertComponent ", () => {
    test("should render in the page", () => {
        const alertComponent = AlertComponentActions.renderComponent();
        alertComponent.component.expect.toBeShown("alertComponent-container");
    });
    test("should contain a text", () => {
        const alertComponent = AlertComponentActions.renderComponent();
        alertComponent.component.expect.toHasText(
            "alertComponent-container",
            "Error message",
        );
    });
});
