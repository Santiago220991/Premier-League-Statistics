import {SortFilterActions} from "./sortFilter.testActions";

describe("sorFilter", () => {
    test("should render in the page", () => {
        const sortFilterComponent = SortFilterActions.renderComponent();
        sortFilterComponent.component.expect.toBeShown(
            "sortFilter-container",
        );
    });
});
