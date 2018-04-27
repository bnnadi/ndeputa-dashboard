import { getCurrentLanguage } from '../../containers/LanguageSwitcher/config';
const actions = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  CHANGE_COLOR: 'CHANGE_COLOR',
  CHANGE_ORGANIZATION: 'CHANGE_ORGANIZATION',
  ADD_ORGANIZATION: 'ADD_ORGANIZATION',
  EDIT_ORGANIZATION: 'EDIT_ORGANIZATION',
  DELETE_ORGANIZATION: 'DELETE_ORGANIZATION',
  changeTheme: (attribute, themeName) => {
    const theme = getCurrentTheme(attribute, themeName);
    if (attribute === 'layoutTheme') {
      document.getElementsByClassName(
        'isomorphicContent'
      )[0].style.backgroundColor =
        theme.backgroundColor;
    }
    return {
      type: actions.CHANGE_THEME,
      attribute,
      theme
    };
  },
  changeLanguage: language => {
    return {
      type: actions.CHANGE_LANGUAGE,
      language: getCurrentLanguage(language)
    };
  },
  changeOrganization: (id) => {
    return (dispatch, getState) => {
      const organizations = getState().Organizations.get('organizations');
      const seectedColor = organizations[organizations.findIndex(note => note.id === id)].color;
      dispatch({
        type: actions.CHANGE_ORGANIZATION,
        selectedId: id,
        seectedColor,
      });
    };
  },
  addOrganization: (newOrg) => {
    return (dispatch, getState) => {
      const notes = [newOrg, ...getState().Organizations.get('organizations')];
      dispatch({
        type: actions.ADD_ORGANIZATION,
        selectedId: newOrg.id,
        organizations,
      });
    };
  },
  editOrganization: (newOrg) => {
    return (dispatch, getState) => {
      const organizations = getState().Organizations.get('organizations');
      const newOrganizations = [];
      organizations.forEach(organization => {
        if (organization.id === newOrg.id) {
          newOrganizations.push(newOrg);
        } else {
          newOrganizations.push(organization);
        }
      });
      dispatch({
        type: actions.EDIT_ORGANIZATION,
        user: newOrganizations.sort(ascendingSort),
      });
    }
  },
  deleteOrganization: (id) => {
    return (dispatch, getState) => {
      const organizations = getState().Organizations.get('organizations');
      organizations.forEach(organization => {
        if (organization.id === newOrg.id) {
          organizations.push(newOrg);
        }
      });
      dispatch({
        type: actions.DELETE_ORGANIZATION,
        user: organizations.sort(ascendingSort),
      });
    }
  }
};
export default actions;
