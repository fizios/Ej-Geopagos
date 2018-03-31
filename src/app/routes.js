import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from "./components/main";
import Landing from './containers/landing';
import PageNotFound from "./components/error/pageNotFound";
import updateTitle from "./utils/updateTitle";

const routes = () => {
  return (
    <Switch>
      <Route
        path={`/`}
        exact
        render={(props)=>{
          updateTitle('Solicitudes');
          return <Main {...props} />
        }}
      />
      <Route
        path={`/landing`}
        exact
        render={()=>{
          updateTitle('Landing');
          return <Landing />
        }}
      />
      <Route
        path={`*`}
        render={() =>{
          updateTitle('404 page not found');
          return <PageNotFound />
        }}
      />
    </Switch>
  )
};

export default routes;
