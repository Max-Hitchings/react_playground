import React from 'react';
// Import a palette color that you can change the color of components
import {cyan500} from 'material-ui/styles/colors';
// Import the Material UI default theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Get the overridable properties of the Material UI theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Import the AppBar component
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500
    },
    appBar: {
        height: 50
    }
});

class Foo extends React.Component {
    render() {
        return (
            // Take the customized properties of the theme
            <MuiThemeProvider muiTheme={muiTheme}>
                <AppBar title="My AppBar" />
            </MuiThemeProvider>
        );
    }
}

export default Foo;