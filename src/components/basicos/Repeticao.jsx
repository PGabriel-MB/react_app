import React from 'react';

import produtos from '../../data/products';

export default props => {

    function getProdutosListItem() {
        return produtos.map(prod => { 
            // o React para repetição utiliza uma chave pra identificar mutações
            // que é o atributo 'key'
            return (
                <li key={prod.id}> 
                    {prod.id} - {prod.nome} -> R$ {prod.preco} 
                </li>
            );
        });
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    );
}