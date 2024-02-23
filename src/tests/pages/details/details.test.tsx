import {DetailsActions} from "./details.testActions";

describe("Details ", () => {
    test("should render in the page", async () => {
        const detailsComponent = DetailsActions.renderComponent();
        detailsComponent.renderPage()
        expect(detailsComponent.component.expect.toBeShown("loading-component-container"))
    });

});
