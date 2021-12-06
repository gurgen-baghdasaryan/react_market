import React, { Component } from 'react';
const styles = {
    cestacanti: {
        backgroundColor: '#00aaa0',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '20px',
    }
  }

class CestaCanti extends Component {
    render() {
        return (
                <span style={styles.cestacanti}>
                    5
                </span>
        );
    }
}

export default CestaCanti;