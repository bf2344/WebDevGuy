import React from 'react';
import Main from './components/Main/Main';
import MainLayout from './layouts/MainLayout'
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import './App.css';
import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';
import Layout from './components/Layout/Layout';
const browserHistory = createBrowserHistory();


const App = (): JSX.Element => {
  return (
    <>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path='/' render={props => (
            <Layout
              {...props}
              component={Main}
              layout={MainLayout}
            />
          )}
          />
    </Switch>

      </Router>
    </>
  );
}

export default App;
