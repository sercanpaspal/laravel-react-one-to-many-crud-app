import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

import DefaultLayout from "./layouts/default";
import HomePage from "./pages/home";
import CreatePage from "./pages/create";
import EditPage from "./pages/edit";

const App = () => (
    <Router history={history}>
        <Route>
            <DefaultLayout>
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/create" component={CreatePage} />
                    <Route path="/:id/edit" component={EditPage} />
                </Switch>
            </DefaultLayout>
        </Route>
    </Router>
);

ReactDOM.render(
    <ChakraProvider>
        <App />
    </ChakraProvider>,
    document.getElementById("root")
);
