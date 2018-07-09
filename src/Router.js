import React from 'react';
import { Switch,Route } from 'react-router';
import HomePage from './pages/homepage';
import Header from './components/header';
import NotfoundPage from './pages/notfoundpage';
import CreatePage from './pages/createpage';
import EditPage from './pages/editpage';

const Router = ()=>{
    return(
        <div>
            <Header />
            <Switch>
                <Route component={HomePage} path="/" exact />
                <Route component={CreatePage} path="/create" />
                <Route component={EditPage} path="/edit/:id" />
                <Route component={NotfoundPage} path="*" />
            </Switch>
        </div>
    )
}
export default Router;