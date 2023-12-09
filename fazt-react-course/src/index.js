import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Greetting() {
  const married = true
  /*if (married) {
    return <h1>Estoy casado</h1>
  } else {
    return <h1>No estoy casado</h1>
  }*/ 
  
  return <h1>{married ? 'Estoy cansado' :'No estoy casado'}</h1>
}
root.render(
  <Greetting/>
);
