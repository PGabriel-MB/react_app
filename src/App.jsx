import './App.css';

import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default props => (
  <div className="App">
    <h1>Fundamentos React</h1>
    
    <div className="Cards">
    <Card titulo="#10 - Contador" color="#73503C">
        <Mega qtdNumero={8} ></Mega>
      </Card>
      <Card titulo="#10 - Contador" color="#293E6A">
        <Contador passo={10} valor={100} ></Contador>
      </Card>
      <Card titulo="#09 - Input" color="#9C0F5F">
        <Input></Input>
      </Card>
      <Card titulo="#08 - Comunicação Direta" color="#000">
        <Super sobrenome="Freitas"></Super>
      </Card>
      <Card titulo="#07 - Comunicação Direta" color="#4298B5">
        <Pai sobrenome="Freitas"></Pai>
      </Card>
      <Card titulo="#06 - CondicionalComIf" color="#FA6900">
        <CondicionalComIf numero={11} />
      </Card>
      <Card titulo="#05 - Condicional" color="#E94C6F">
        <Condicional numero={11} />
      </Card>
      <Card titulo="#04 - Repetição" color="#008BBA">
        <Repeticao />
      </Card>
      <Card titulo="#03 - Componente com Filhos" color="#D96459">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#02 - Primeiro com Parametro" color="#FF85CB">
        <ComParametro titulo="This is the title" subtitulo="This is the lead" />
      </Card>
      <Card titulo="#01 - Exercício X" color="#92B06A">
        <Primeiro />
      </Card>
    </div>
  </div>
);
