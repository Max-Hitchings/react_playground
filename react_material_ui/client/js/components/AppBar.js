import React from "react";
import AppBar from "@material-ui/core/AppBar";
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ThemeProvider } from "@material-ui/core/styles";

class Bar extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <AppBar
          title="Control Panel"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        ></AppBar>
      </ThemeProvider>
    );
  }
}

export default Bar;
