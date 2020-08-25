import './App.css';

import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';

export default props => (
  <div className="App">
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
);
