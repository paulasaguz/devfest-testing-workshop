import React from 'react';
import Layout from './components/layouts/layout';
import Card from './components/cards/card';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Card
          title={<span>El<br />irlandés</span>}
          netflixTitle={<p>original de <span>netflix</span></p>}
          infoBubble='Frank Sheeran Robert De Niro, más conocido como El irlandés, es un asesino a sueldo de la mafia al que se le atribuyen más de 25 asesinatos relacionados con el hampa. Al final de su vida, Sheeran afirmó haber estado involucrado en el asesinato de Jimmy Hoffa Al Pacino, el poderoso jefe del sindicato de camioneros. Hoffa desapareció el 30 de julio 1975 y no fue declarado legalmente muerto hasta el 30 de julio de 1982. Su asesinato aún sigue siendo una incógnita y es uno de los misterios sin resolver más famosos en la historia de EE.UU.'
          videoModalId={'fSQWKwYSXQc'}
          showBubble
        />
      </Layout>
    </React.Fragment>
  );
}

export default App;
