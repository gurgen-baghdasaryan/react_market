import React, { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import NavBar from './components/NavBar';



class App extends Component {

  state = {
    productos: [
      { name: 'Tomate', price: 170, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 240, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 199, img: '/productos/lechuga.jpg' },
    ],
    carro: [],
  }

  agregarAlCArro = (producto) => {
    console.log(producto);
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })

    })
  }



  render() {
    console.log(this.state.carro);
    return (
      <div>
        <NavBar />
        <Layout>

          <Title />
          <Productos
            agregarAlCArro={this.agregarAlCArro}
            productos={this.state.productos}
          />
        </Layout>

      </div>

    );
  }
}

export default App;