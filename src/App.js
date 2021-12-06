import React, { Component } from 'react';
import Productos from './components/Productos';


class App extends Component {

  state = {
    productos: [
      { name: 'Tomate', price: 170, img: '/productos/tomate.jpeg' },
      { name: 'Arbejas', price: 240, img: '/productos/arbejas.jpeg' },
      { name: 'Lechuga', price: 199, img: '/productos/lechuga.jpeg' },
    ]
  }

  render() {

    return (

      <div>
        <Productos
          agregarAlCArro={() => console.log('we are waithing for...')}
          productos={this.state.productos}
        />
      </div>

    );
  }
}

export default App;