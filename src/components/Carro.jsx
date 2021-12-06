import React, { Component } from 'react';
import CestaCanti from './CestaCanti';

const styles = {
    carro: {
        backgroundColor: '#c24d2c',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    cestacanti: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}


class Carro extends Component {
    render() {
        return (
            <div>
                <span style={styles.cestacanti}>
                    <CestaCanti />
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
            </div>
        );
    }
}

export default Carro;