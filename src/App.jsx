import { Switch, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Layout from 'components/common/Layout/Layout';

import RouteFromPath from 'components/routes/RouteFromPath';
import useTranslation from 'hooks/useTranslation';
import useAuth from 'hooks/useAuth';
import routes from 'routes';

import './sass/main.scss';

function App() {
  const t = useTranslation();
  const { authenticated } = useAuth();

  return (
    <>
      <Helmet>
        <title>{t('global.pageTitle')}</title>
      </Helmet>
      <div className="app__container">
        <BrowserRouter>
          <Layout>
            <Switch>
              {routes.map(route => (
                <RouteFromPath
                  key={`route-${route.path}`}
                  {...route}
                  authenticated={authenticated}
                />
              ))}
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
