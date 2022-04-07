interface HomeState {
  showhcf: boolean;
}
interface Action {
  type: string;
  payload?: any;
}
interface HomeRepositoriesShowHCFAction {
  type: string;
  payload: boolean;
}
enum ActionType {
  HOME_REPOSITORIES_SHOW_HCF = "home_repositories_show_hcf",
  HOME_REPOSITORIES_HIDE_HCF = "home_repositories_hide_hcf",
}
type Action1 = Action | HomeRepositoriesShowHCFAction;
const reducer = (state: HomeState, action: Action1): HomeState => {
  switch (action.type) {
    case ActionType.HOME_REPOSITORIES_SHOW_HCF:
      return { showhcf: true };
    case ActionType.HOME_REPOSITORIES_HIDE_HCF:
      return { showhcf: false };
    default:
      return state;
  }
};
