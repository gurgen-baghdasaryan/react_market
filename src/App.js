import React, { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';


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
        <Layout>
          <Productos
            agregarAlCArro={() => console.log('we are waithing for...')}
            productos={this.state.productos}
          />
        </Layout>

      </div>

    );
  }
}

export default App;