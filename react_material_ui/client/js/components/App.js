import React from 'react';

import Bar from './AppBar.js';
import Submit from './Submit.js';
import Form from './TextField.js';

const styles = {
    container: {
        color: '#00BCD4',
        fontFamily: 'Roboto',
        marginTop: 100,
        textAlign: 'center'
    }
};



class App extends React.Component {
    render() {
        return (
            <div>
                <Bar />
                <h1 style={styles.container}>Material UI Experiment</h1>
                <Form />
                <Submit />
            </div>
        )
    }
}

export default App;
