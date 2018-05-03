import { Map } from "immutable";
import { getDefaultPath } from "../../helpers/urlSync";
import appActions, { getView } from "./actions";

const preKeys = getDefaultPath();

const initState = new Map({
  collapsed: window.innerWidth > 1220 ? false : true,
  view: getView(window.innerWidth),
  height: window.innerHeight,
  loading: false,
  openDrawer: false,
  openKeys: preKeys,
  current: preKeys,
  flash: {
    show:false
  }
});
export default function appReducer(state = initState, action) {
  switch (action.type) {
    case appActions.COLLPSE_CHANGE:
      return state.set("collapsed", !state.get("collapsed"));
    case appActions.COLLPSE_OPEN_DRAWER:
      return state.set("openDrawer", !state.get("openDrawer"));
    case appActions.TOGGLE_ALL:
      if (state.get("view") !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height;
        return state
          .set("collapsed", action.collapsed)
          .set("view", action.view)
          .set("height", height);
      }
      break;
    case appActions.CHANGE_OPEN_KEYS:
      return state.set("openKeys", action.openKeys);
    case appActions.CHANGE_CURRENT:
      return state.set("current", action.current);
    case appActions.LOADING:
      return state.set("loading", !state.get("loading"));
    case appActions.SHOW_FLASH:
      return state.set("flash", action.flash)
    default:
      return state;
  }
  return state;
}
