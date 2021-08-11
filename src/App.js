import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage"
import AuthorPage from "./features/author/AuthorPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { StyledNavLink, ListItem, List } from "./styled";

export default () => (
    <HashRouter>
        <nav>
            <List>
                <ListItem>
                    <StyledNavLink to="/zadania">
                        Zadania
                    </StyledNavLink>
                </ListItem>
                <ListItem>
                    <StyledNavLink to="/autor">
                        O autorze
                    </StyledNavLink>
                </ListItem>
            </List>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);