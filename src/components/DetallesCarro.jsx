import React, { Component } from 'react';

const styles = {
    // detallescarro: {
    //   backgroundColor: '#fff',
    //   position: 'absolute',
    //   marginTop: 30,
    //   boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
    //   borderRadius: '5px',
    //   width: '300px',
    //   right: 50,
    // },
    ul: {
      margin: 0,
      padding: 0,
    },
    producto: {
      listStyleType: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '25px 20px',
      borderBottom: 'solid 1px #aaa',
    },
  }

class DetallesCarro extends Component {
    render() {
        const {carro,} = this.props
        return (
            <div style={styles.detallescarro}>
                <ul style={styles.ul}>
                    {carro.map(x => <li style={styles.producto} key={x.name}>
                        
                        <img src={x.img} alt={x.name} height={'29'} width={'45'}/>
                        {x.name}<span>{x.cantidad}</span>
                        </li> )}
                </ul>
            </div>
        );
    }
}

export default DetallesCarro;