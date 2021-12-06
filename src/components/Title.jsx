import React, { Component } from 'react';

const styles = {
    title: {
        marginBottom: '30px',
        fontWeight: '600',
        fontSize: '1.6rem',
      }
}

class Title extends Component {
    render() {
        return (
            <div>
                <h1 style={styles.title}>Últimas novedades</h1>
            </div>
        );
    }
}

export default Title;