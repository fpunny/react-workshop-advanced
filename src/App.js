import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navigation } from './component';
import * as routes from './pages';

const load = loader => () => {
    const Component = lazy(loader);
    return <Component/>;
}

const App = () => (
    <Fragment>
        <Navigation/>
        <Suspense fallback={<h1>Loading</h1>}>
            <Switch>
                {
                    Object.values(routes).map(({ path, loader, exact }) => (
                        <Route key={ path } path={ path } exact={ exact } component={ load(loader) }/>
                    ))
                }
            </Switch>
        </Suspense>
    </Fragment>
)

export default App;
