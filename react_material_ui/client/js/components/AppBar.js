import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Bar extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="Control Panel"
                    iconClassNameRight="muidocs-icon-navigation-expand-more" >
                </AppBar>
            </MuiThemeProvider>
        )
    }
}

export default Bar;