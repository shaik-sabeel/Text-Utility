import React from 'react'

function Alert(props) {
  const capitalize = (word) =>{
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return (
    <div>
      {props.alerts && <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alerts.type)}</strong>: {props.alerts.msg}

    </div>}
    </div>
  )
}

export default Alert
