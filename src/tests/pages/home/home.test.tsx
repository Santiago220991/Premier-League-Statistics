import {HomeActions} from "./home.testActions";

describe("Home ", () => {
    test("should render in the page", () => {
        const homeComponent = HomeActions.renderComponent();
        homeComponent.component.expect.toBeShown("home-container");
    });

    // test("should contain a text", () => {
    //     const homeComponent = HomeActions.renderComponent();
    //     homeComponent.component.expect.toHasText(
    //         "home-container",
    //         "Premier League",
    //     );
    // });
    // test("should contain role tags", () => {
    //     const homeComponent = HomeActions.renderComponent();
    //     homeComponent.component.expect.toHasRole("img", 3);
    // });

    // test("should render a searchBar", () => {
    //     const homeComponent = HomeActions.renderComponent();
    //     homeComponent.component.expect.toBeShown("searchBar-container");
    // });
});
