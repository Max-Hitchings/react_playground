import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    container: {
        marginTop: 50,
        textAlign: "center"
    }
};

const avatarStyles = {
    avatar: {
        marginRight: 15
    }
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

class Submit extends React.Component {
    constructor(props) {
        super(props);

        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);

        // Initial state
        this.state = {
            open: false
        }
    }

    handleModalOpen() {
        this.setState({open: true});
    }

    handleModalClose() {
        this.setState({open: false});
    }

    render() {
        const standardActions = (
            <FlatButton
                label="Ok"
                onTouchTap={this.handleModalClose}
                primary={true} />
        );

        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <RaisedButton
                        label="Login"
                        onTouchTap={this.handleModalOpen}
                        secondary={true}
                    />
                    <Dialog
                        actions={standardActions}
                        open={this.state.open}
                        onRequestClose={this.handleModalClose}
                        title="Thank you!"
                    >
                        <Avatar
                            src="http://www.fillmurray.com/140/100"
                            style={avatarStyles.avatar}
                        />
                        You are logged in.
                    </Dialog>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Submit;