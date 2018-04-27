import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';
import NoAccess from '../Error/noAccess';
import Log from '../../helpers/Log';
import { getUser } from '../../helpers/utility';

const user = getUser();
Log.info(user,'AppRouter')

const routes = [
    {
        access: [1,2,3,4].includes(user.permission_level_code),
        path: "",
        component: asyncComponent(() => import('../Desktop'))
    },
    {
        access: [1,2,3,4].includes(user.permission_level_code),
        path: "inbox",
        component: asyncComponent(() => import('../Mail'))
    },
    {
        access: [1,2,3,4].includes(user.permission_level_code),
        path: "calendar",
        component: asyncComponent(() => import('../Calendar/Calendar'))
    },
    {
        access: [1,2,3,4].includes(user.permission_level_code),
        path: "notes",
        component: asyncComponent(() => import('../Notes'))
    },
    {
        access: [1,2,3,4].includes(user.permission_level_code),
        path: "todo",
        component: asyncComponent(() => import('../Todo'))
    },
    {
        access: [1,2,3,4].includes(user.permission_level_code),
        path: "customers",
        component: asyncComponent(() => import('../Customers'))
    },
    {
        access: [1,2,3,4].includes(user.permission_level_code),
        path: "employees",
        component: asyncComponent(() => import('../Employees'))
    },
    {
        access: [1,2,3,4].includes(user.permission_level_code),
        path: "settings",
        component: asyncComponent(() => import('../Profile/settings'))
    },
    {
        access: [1,2,3,4].includes(user.permission_level_code),
        path: "profile",
        component: asyncComponent(() => import('../Profile'))
    },
    {
        access: [3,4].includes(user.permission_level_code),
        path: "invoice/:invoiceId",
        component: asyncComponent(() => import("../Invoice/singleInvoice"))
    },
    {
        access: [3,4].includes(),
        path: "invoice",
        component: asyncComponent(() => import("../Invoice"))
    },
];

const AuthorizationRoute = ({ component: Component, access, ...rest }) => (
    <Route {...rest} render={props => access ? <Component {...props} /> : <NoAccess {...props} />}/>
);

class AppRouter extends Component {
    render() {
        const { url } = this.props;
        return (
            <div>
                { routes.map(singleRoute => {
                    const { path, exact, ...otherProps } = singleRoute;
                    return (
                        <AuthorizationRoute
                            access={singleRoute.access}
                            exact={exact === false ? false : true}
                            key={singleRoute.path}
                            path={`${url}/${singleRoute.path}`}
                            {...otherProps}
                        />
                    )
                }) }
            </div>
        );
    }
}

export default AppRouter