import React from 'react'
import { connect } from 'react-redux'

const History = ({operations}) => (
  operations.length > 0
  ?
  <table>
      <thead>
          <tr>
              <th>Operacion</th>
          </tr>
      </thead>
      <tbody>
          {
              operations.map((operation, index) => (
                  <tr key={index}>
                      <td>{ operation }</td>
                  </tr>
              ))
          }
      </tbody>
  </table>
  : <p>En este instante no hay operaciones</p>
)
const mapStateToProps = state => ({
    operations : state.operations
})


export default connect(mapStateToProps)(History)