import React from 'react'
import { connect } from 'react-redux'
import { CALCULATE, SAVE_OPERATION } from '../actions'

const calculate = props => {
  let numberOne = document.getElementById('value-one')
  let numberTwo = document.getElementById('value-two')
  let result = Number(numberOne.value) + Number(numberTwo.value)

  props.calculateOperation(result)
  props.saveOperation(numberOne.value + ' + ' + numberTwo.value + ' = ' + result)
}

const Calculator = props => (
  <div>
      <input type = 'number' placeholder = 'Numero 1' id = 'value-one'/>
      <br/>
      <input type = 'number' placeholder = 'Numero 2' id = 'value-two'/>
      <br/>
      <button onClick = { () => calculate(props) } >Calcular</button>
      <br/>
      <span>El resultado es : { props.result }</span>
  </div>
)
const mapStateToProps = state => ({
  result : state.result
})

const mapDispatchToProps = dispatch => ({
  calculateOperation(result) {
    dispatch({
      type : CALCULATE,
      result
    })
  },
  saveOperation(operation) {
    dispatch({
      type : SAVE_OPERATION,
      operation
    })
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(Calculator)