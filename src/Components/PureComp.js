import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
  render(props) {
    return (
      <div>PureComp {this.props.names}</div>
    )
  }
}
export default PureComp