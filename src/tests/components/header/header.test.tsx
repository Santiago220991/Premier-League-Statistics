import {HeaderActions} from "./header.testActions";

describe("Header ", () => {
    test("should render in the page", () => {
        const headerComponent = HeaderActions.renderComponent();
        headerComponent.component.expect.toBeShown("header-container");
    });
    test("should contain a text", () => {
        const headerComponent = HeaderActions.renderComponent();
        headerComponent.component.expect.toHasText(
            "header-container",
            "Premier League",
        );
    });
});
