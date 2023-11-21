import React from 'react';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import cl from 'classnames';

import Home from '../Home/Home';
import About from '../About/About';

import './App.css';

const navigation = [
  {
    id: 1,
    url: '/',
    title: 'Home',
  },
  {
    id: 2,
    url: '/about',
    title: 'About',
  },
];

const App = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <header>
        <nav>
          {navigation.map(({ id, url, title }) => (
            <Link 
            to={url} 
            key={id}
            classname={cl(pathname === url && 'active')}
            >
              {title}
            </Link>
          ))}
        </nav>
      </header>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route exact={true} path='/about' component={About} />
      </Switch>
    </div>
  );
};

export default App;
