import './Contador.css';
import React from 'react';

export default class Contador extends React.Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>

                <div>
                    <label for="passoInput"> Passo: </label>
                    <input id="passoInput" 
                        type="number" 
                        value={this.state.passo} 
                        onChange={e => this.setState({ passo: +e.target.value })} />
                </div>

                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.inc}> + </button>
                    <button onClick={this.dec}> - </button>
                </div>
            </div>
        );
    }
}