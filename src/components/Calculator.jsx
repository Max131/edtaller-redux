import React from 'react'
import { connect } from 'react-redux'

const calculateOperation = props => {
    let valueOne = Number(document.getElementById('value-one').value)
    let valueTwo = Number(document.getElementById('value-two').value)

    props.saveOperation(valueOne + ' + ' + valueTwo)
    props.showResult(valueOne + valueTwo)
}

const Calculator = props => (
    <div>
        <input type = 'number' placeholder = 'Numero 1' id = 'value-one'/>
        <br/>
        <input type = 'number' placeholder = 'Numero 2' id = 'value-two'/>
        <br/>
        <button onClick = { () => calculateOperation(props) } >Calcular</button>
        <br/>
        <span>El resultado es : { props.result }</span>
    </div>
)

const mapStateToProps = state => ( { result : state.result } )

const mapDispatchToProps = dispatch => ({
    saveOperation(operation) {
        dispatch({
            operation,
            type : 'SAVE_OPERATION'
        })
    },
    showResult(result) {
        dispatch({
            result,
            type : 'SHOW_RESULT'
        })
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Calculator)