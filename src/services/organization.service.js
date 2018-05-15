import instance from './base';
import { getToken } from '../helpers/utility';
import Log from '../helpers/Log';

const token = getToken();
Log.info(token, 'Get Token')
if (token)
  instance.defaults.headers.common['x-access-token'] = token;

export default {
    getOrgs() {
      return instance.get('organizations.json');
    },
    getOrg() {
      return instance.get('organization.json');
    },
    addOrg() {
      return instance.get('organization.json');
    },
    updateOrg() {
      return instance.get('organization.json');
    },
    getUnits() {
      return instance.get('organization/:id/units.json');
    },
    getUnit() {
      return instance.get('organization/:id/unit.json');
    },
    addUnit() {
      return instance.get('organization/:id/unit.json');
    },
    updateUnit() {
      return instance.get('organization/:id/unit.json');
    },
    removeUnit() {
      return instance.get('organization/:id/unit.json');
    },
    deleteOrg() {
      return instance.get('organization/:id.json');
    },
 }