import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
import Foo from './foo.js';

const App = () => (
    <MuiThemeProvider>
        <Foo />
    </MuiThemeProvider>
);

const root = document.querySelector('.container');

injectTapEventPlugin();

ReactDOM.render(
    <App />,
    root
);