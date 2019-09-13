import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from '../Components/NotFound/NotFound';
import TokenPage from '../Pages/TokenPage';
import PrivateRoute from './Guard/AuthGuard';

const mobileVerifyPage = React.lazy(() => import('../Pages/MobileVerify'));
const login = React.lazy(() => import('../Pages/login'))

const Routes = () => {
    return <React.Fragment>
        <Suspense fallback={<h1>Loading page...</h1>}>
            <Switch>
                <Route path="/:clientId/:token" component={TokenPage}></Route>
                <PrivateRoute path="/mobileVerify" component={mobileVerifyPage}></PrivateRoute>
                <PrivateRoute path="/login" component={login}></PrivateRoute>
                <Route component={NotFound}></Route>

            </Switch>
        </Suspense>

    </React.Fragment>
}
export default Routes