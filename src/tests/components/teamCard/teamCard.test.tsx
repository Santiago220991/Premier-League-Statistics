import { TeamCardActions } from "./teamCard.testActions";

describe("TeamCard ", () => {
  test("should render in the page", () => {
    const teamCardComponent = TeamCardActions.renderComponent();
    teamCardComponent.component.expect.toBeShown("team-card-container");
  });

  test("should contain a text", () => {
    const teamCardComponent = TeamCardActions.renderComponent();
    teamCardComponent.component.expect.toHasText("team-card-container", "Rank");
  });

});
