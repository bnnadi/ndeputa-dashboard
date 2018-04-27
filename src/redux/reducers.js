import Auth from './auth/reducer';
import App from './app/reducer';
import Calendar from './calendar/reducer';
import Notes from './notes/reducer';
import Todos from './todos/reducer';
import Customers from './customers/reducer';
import Employees from './employees/reducer';
import ThemeSwitcher from './themeSwitcher/reducer';
import Invoice from './invoice/reducer';
import LanguageSwitcher from './languageSwitcher/reducer';
import Products from './product/reducer';
// import Organziations from './organization/reducer';
import User from './user/reducer';

export default {
    Auth,
    App,
    ThemeSwitcher,
    LanguageSwitcher,
    Calendar,
    Notes,
    Todos,
    Customers,
    Employees,
    Invoice,
    Products,
    // Organziations,
    User
};