import React from 'react'

const Calculator = props => (
  <div>
      <input type = 'number' placeholder = 'Numero 1' id = 'value-one'/>
      <br/>
      <input type = 'number' placeholder = 'Numero 2' id = 'value-two'/>
      <br/>
      <button>Calcular</button>
      <br/>
      <span>El resultado es : { props.result }</span>
  </div>
)

export default Calculator