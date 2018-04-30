import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
    {
        path: "",
        component: asyncComponent(() => import('../Dash'))
    },
    {
        path: "employees",
        component: asyncComponent(() => import('../Employees'))
    },
    {
        path: "profile",
        component: asyncComponent(() => import('../Profile'))
    },
    {
        path: "customers",
        component: asyncComponent(() => import('../Customers'))
    },
    {
        path: "settings",
        component: asyncComponent(() => import('../Profile/settings'))
    },
    {
        path: "inbox",
        component: asyncComponent(() => import('../Mail'))
    },
    {
        path: "calendar",
        component: asyncComponent(() => import('../Calendar/Calendar'))
    },
    {
        path: "notes",
        component: asyncComponent(() => import('../Notes'))
    },
    {
        path: "todo",
        component: asyncComponent(() => import('../Todo'))
    },
    {
        path: "product/:productId",
        component: asyncComponent(() => import('../Products/singleProduct'))
    },
    {
        path: "products",
        component: asyncComponent(() => import('../Products'))
    },
    {
        path: "invoice/:invoiceId",
        component: asyncComponent(() => import("../Invoice/singleInvoice"))
    },
    {
        path: "invoices",
        component: asyncComponent(() => import("../Invoice"))
    },
];

class AppRouter extends Component {
    render() {
        const { url, style } = this.props;
        return (
            <div style={style}>
                { routes.map(singleRoute => {
                    const { path, exact, ...otherProps } = singleRoute;
                    return (
                        <Route
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