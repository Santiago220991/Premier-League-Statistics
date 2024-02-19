import {LoadingComponentActions} from "./loadingComponent.testActions";

describe("LoadingComponent ", () => {
    test("should render in the page", () => {
        const loadingComponent = LoadingComponentActions.renderComponent();
        loadingComponent.component.expect.toBeShown(
            "loading-component-container",
        );
    });
});
