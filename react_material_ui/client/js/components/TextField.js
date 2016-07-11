import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GetMuiTheme from 'material-ui/styles/getMuiTheme';

const styles = {
    container: {
        paddingTop: 50,
        textAlign: 'center'
    }
};

class Form extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div style={styles.container}>
                    <TextField
                        hintText="Username"
                    />
                    <br />
                    <TextField
                        hintText="Password"
                        type="password"
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Form;