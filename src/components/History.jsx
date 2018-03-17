import React from 'react'

const History = props => (
  props.operations.length > 0 && props.operations !== undefined
  ?
  <table>
      <thead>
          <tr>
              <th>Operacion</th>
          </tr>
      </thead>
      <tbody>
          {
              props.operations.map(operation => (
                  <tr>
                      <td>{ operation }</td>
                  </tr>
              ))
          }
      </tbody>
  </table>
  : <p>En este instante no hay operaciones</p>
)

export default History