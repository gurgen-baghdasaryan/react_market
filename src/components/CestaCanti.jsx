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
    getNumber(n) {

        if (!n) { return '' }

        return n > 9 ? '9+' : n
    }




    render() {

        const {value} = this.props
        return (
            <span style={styles.cestacanti}>
                {this.getNumber(value)}
            </span>
        );
    }
}

export default CestaCanti;