import React, { Component } from 'react';

const styles = {
    title: {
        marginBottom: '30px',
      }
}

class Title extends Component {
    render() {
        return (
            <div>
                <h1 style={styles.title}>Market</h1>
            </div>
        );
    }
}

export default Title;