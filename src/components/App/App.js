import React from 'react';
import { Switch, Route, Redirect} from "react-router-dom";

import { Navigation } from "../Navigation";
import { CharactersPage } from '../../pages/CharactersPage';
import { DetailsCharacterPage } from '../../pages/DetailsCharacterPage';

import { LayoutPage } from '../../pages/LayoutPage';
import * as ROUTES from "../../utils/routes";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path={ROUTES.CHARACTERS} component={CharactersPage} />
        <Route exact path={[`${ROUTES.DETAILS_CHARACTER}/:id`]} component={DetailsCharacterPage} />
        <Route exact path={ROUTES.LAYOUT} component={LayoutPage} />
        <Route exact path='/' render={() => <Redirect to={ROUTES.CHARACTERS} />} />
      </Switch>
    </>
  );
}

export default App;
