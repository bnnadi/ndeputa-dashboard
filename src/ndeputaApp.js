import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import PublicRoutes from './router'
import { ThemeProvider } from 'styled-components';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import themes from './config/themes';
import AppLocale from './languageProvider';

import { themeConfig } from './config';
import NdeputaAppHolder from './ndeputaAppStyle';
import Boot from './redux/boot';

const currentAppLocale = AppLocale['en'];

const NdeputaApp = () => (
        <LocaleProvider locale={currentAppLocale.antd}>
          <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
          <ThemeProvider theme={themes[themeConfig.theme]}>
            <NdeputaAppHolder>
              <Provider store={store}>
                <PublicRoutes history={history} />
              </Provider>
            </NdeputaAppHolder>
          </ThemeProvider>
          </IntlProvider>
      </LocaleProvider>
);
Boot()
  .then(() => NdeputaApp())
  .catch(error => console.error(error));

export default NdeputaApp;
export { AppLocale };
