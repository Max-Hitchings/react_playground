import React from "react";
import TextField from "@material-ui/core/TextField";
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import GetMuiTheme from 'material-ui/styles/getMuiTheme';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const styles = {
  container: {
    paddingTop: 50,
    textAlign: "center",
  },
};

class Form extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <div style={styles.container}>
          <TextField hintText="Username" />
          <br />
          <TextField hintText="Password" type="password" />
        </div>
      </ThemeProvider>
    );
  }
}

export default Form;
