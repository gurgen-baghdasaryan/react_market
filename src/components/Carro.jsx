import React, { Component } from 'react';
import CestaCanti from './CestaCanti';
import DetallesCarro from './DetallesCarro';

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
        const { carro ,esCarroVisible, mostrarCarro} = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <div>
                <span style={styles.cestacanti}>
                    {cantidad !== 0
                        ? <CestaCanti value={cantidad} />
                        : null}
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {
                    esCarroVisible ?  <DetallesCarro carro={carro}/> :null
                }
                
            </div>
        );
    }
}

export default Carro;