import React, { Component } from 'react';

class App extends Component {

  state = {
    productos : [
      {name:'Tomate' ,price:170 ,img:'/productos/tomate.jpeg',},
      {name:'Arbejas' ,price:240 ,img:'/productos/arbejas.jpeg',},
      {name:'Lechuga' ,price: 199,img:'/lechuga/lechuga.jpeg',},
    ]
  }

  render() {

    return (

      <div>
        <p>Hello World</p>
      </div>

    );
  }
}

export default App;