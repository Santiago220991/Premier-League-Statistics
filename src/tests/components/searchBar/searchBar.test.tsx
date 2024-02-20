import {SearchBarActions} from "./searchBar.testActions";

describe("SearchBar ", () => {
    test("should render in the page", () => {
        const searchBarComponent = SearchBarActions.renderComponent();
        searchBarComponent.component.expect.toBeShown(
            "searchBar-container",
        );
    });
});
