export function getView(width) {
  let newView = "MobileView";
  if (width > 1220) {
    newView = "DesktopView";
  } else if (width > 767) {
    newView = "TabView";
  }
  return newView;
}
const appActions = {
  COLLPSE_CHANGE: "COLLPSE_CHANGE",
  COLLPSE_OPEN_DRAWER: "COLLPSE_OPEN_DRAWER",
  CHANGE_OPEN_KEYS: "CHANGE_OPEN_KEYS",
  TOGGLE_ALL: "TOGGLE_ALL",
  CHANGE_CURRENT: "CHANGE_CURRENT",
  LOADING: "LOADING",
  SHOW_FLASH: "SHOW_FLASH",
  toggleCollapsed: () => ({
    type: appActions.COLLPSE_CHANGE
  }),
  toggleAll: (width, height) => {
    const view = getView(width);
    const collapsed = view !== "DesktopView";
    return {
      type: appActions.TOGGLE_ALL,
      collapsed,
      view,
      height
    };
  },
  toggleOpenDrawer: () => ({
    type: appActions.COLLPSE_OPEN_DRAWER
  }),
  changeOpenKeys: openKeys => ({
    type: appActions.CHANGE_OPEN_KEYS,
    openKeys
  }),
  changeCurrent: current => ({
    type: appActions.CHANGE_CURRENT,
    current
  }),
  loading: () => ({
    type: appActions.LOADING
  }),
  showFlash: () => ({
    type: appActions.SHOW_FLASH
  })
};
export default appActions;
