import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import NewVideo from './pages/register/video';
import NewCategory from './pages/register/category';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register/video" exact component={NewVideo} />
      <Route path="/register/category" exact component={NewCategory} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
