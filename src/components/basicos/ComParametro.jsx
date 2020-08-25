import React from 'react';

export default props => {
    // Não é permitido alterar o valor dos atributos,
    // pois as props são somente de leitura
    // props.titulo = 'Alteração de título'
    return (
        <>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </>
    )
}