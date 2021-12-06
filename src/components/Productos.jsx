import React, { Component } from 'react';
import Producto from './Producto';

class Productos extends Component {
    render() {
        const { productos, agregarAlCArro } = this.props
        return (
            <div>
                {productos.map(producto =>

                    <Producto
                        agregarAlCArro={agregarAlCArro}
                        key={producto.name}
                        producto={producto}
                    />

                )}
            </div>
        );
    }
}

export default Productos;