import React from 'react';
// Import a palette color that you can change the color of components
import {gray500} from 'material-ui/styles/colors';
// Import the Material UI default theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Get the overridable properties of the Material UI theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Import the AppBar component
import Checkbox from 'material-ui/Checkbox';

const muiTheme = getMuiTheme({
    palette: {
        textColor: gray500
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
                <Checkbox
                    id="checkboxId1"
                    name="checkboxName1"
                    value="checkboxValue1"
                    label="went for a run today"
                    style={{
                        width: '50%',
                        margin: '0 auto'
                    }}
                    iconStyle={{
                        fill: '#FF4081'
                    }} />
            </MuiThemeProvider>
        );
    }
}

export default Foo;