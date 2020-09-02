import React from 'react';

export default class Contador extends React.Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc(){

    }

    dec() {

    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h4>Passo: {this.state.passo}</h4>
                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button> + </button>
                    <button> - </button>
                </div>
            </div>
        );
    }
}