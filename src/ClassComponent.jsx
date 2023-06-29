import React, { Component } from 'react';

class MiComponente extends Component {
  constructor(props) {
    super(props);
    // Inicialización del estado del componente
    this.state = {
      contador: 0
    };
  }

  componentDidMount() {
    // Acciones después de que el componente se haya montado en el DOM
    console.log('Componente montado');
  }

  componentDidUpdate() {
    // Acciones después de que el componente se haya actualizado
    console.log('Componente actualizado');
  }

  componentWillUnmount() {
    // Acciones antes de que el componente se desmonte y se elimine
    console.log('Componente desmontado');
  }

  handleClick = () => {
    // Actualizar el estado al hacer clic en el botón
    this.setState(prevState => ({
      contador: prevState.contador + 1
    }));
  }

  render() {
    // Renderizar el componente
    return (
      <div className='flex flex-col gap-4'>
        <h1>Mi Componente de Clase</h1>
        <p>Contador: {this.state.contador}</p>
        <button className='border p-4 rounded' onClick={this.handleClick}>Incrementar</button>
      </div>
    );
  }
}

export default MiComponente;
