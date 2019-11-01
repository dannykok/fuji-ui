import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider, ThemeFuji } from '@fuji-ui/theme';
import { Row, Column } from '@fuji-ui/core';
import '@fuji-ui/theme/src/css/fuji/theme.css';

import DocNavigationBar from './components/doc-navigation-bar';
import DocMenuBar from './components/doc-menu-bar';
import * as Page from './pages';
import { hot } from 'react-hot-loader';

import { NotificationProvider } from '@fuji-ui/core';

function App(props) {
  return (
    <ThemeProvider theme={ThemeFuji}>
      <NotificationProvider>
        <Router basename="fuji-ui">
          <Column height="100%" alignItems="stretch" overflow="hidden">
            <Row alignItems="stretch" flex={1} overflow="hidden">
              <Route path="/docs">
                <DocNavigationBar />
                <DocMenuBar />
              </Route>
              {/* prettier-ignore */}
              <Switch>
                <Route exact path="/">
                  <Redirect to="/docs"/>
                </Route>
                <Route exact path="/docs">
                  <Redirect to="/docs/getting-started"/>
                </Route>
                <Route exact path="/docs/getting-started" component={Page.GettingStarted}/>
                <Route exact path="/docs/typography" component={Page.Typography}/>
                <Route exact path="/docs/colors" component={Page.Colors}/>
                <Route exact path="/docs/buttons" component={Page.Buttons}/>
                <Route exact path="/docs/input" component={Page.Input}/>
                <Route exact path="/docs/input-group" component={Page.InputGroup}/>
                <Route exact path="/docs/checkbox" component={Page.Checkbox}/>
                <Route exact path="/docs/radio" component={Page.Radio}/>
                <Route exact path="/docs/images" component={Page.Images}/>
                <Route exact path="/docs/avatar" component={Page.Avatar}/>
                <Route exact path="/docs/dropdown" component={Page.Dropdown}/>
                <Route exact path="/docs/select" component={Page.Select} />
                <Route exact path="/docs/notification" component={Page.Notification}/>
                <Route exact path="/docs/calendar" component={Page.Calendar}/>
                <Route exact path="/docs/datepicker" component={Page.Datepicker}/>
                <Route exact path="/docs/timepicker" component={Page.Timepicker}/>
                <Route exact path="/docs/code-block" component={Page.CodeBlock}/>
                <Route exact path="/docs/note-block" component={Page.NoteBlock}/>
                <Route exact path="/docs/popover" component={Page.Popover}/>
                <Route exact path="/docs/table" component={Page.Table}/>
                <Route exact path="/docs/tag" component={Page.Tag}/>
                <Route exact path="/docs/breadcrumb" component={Page.Breadcrumb}/>
                <Route exact path="/docs/single-option-picker" component={Page.SingleOptionPicker}/>
                <Route exact path="/docs/multi-option-picker" component={Page.MultiOptionPicker}/>
                <Route exact path="/docs/tree" component={Page.Tree}/>
                <Route exact path="/docs/skeleton" component={Page.Skeleton}/>
                <Route exact path="/docs/form" component={Page.Form}/>
                <Route exact path="/docs/separator" component={Page.Separator}/>
                <Route exact path="/docs/modal" component={Page.Modal}/>
                <Route exact path="/docs/dropzone" component={Page.Dropzone}/>
                <Route exact path="/docs/spinners" component={Page.Spinners}/>
                <Route exact path="/docs/number-badge" component={Page.NumberBadge}/>
                <Route exact path="/docs/use-props-filter" component={Page.UsePropsFilter} />
                <Route exact path="/docs/use-color-palette" component={Page.UseColorPalette} />
                <Route exact path="/docs/use-service-worker" component={Page.UseServiceWorker} />
              </Switch>
            </Row>
          </Column>
        </Router>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default hot(module)(App);
