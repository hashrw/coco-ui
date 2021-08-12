import Button from 'react-bootstrap/Button';
import React from "react";

 function ButtonSave(props) {

  return (
    <div>
      <Button onClick={props.onClick} className="me-2" aria-label="First group" style={{
          height: 42,
          width: 90,
          marginLeft: 15,
        }} variant={props.variant}>{props.title}</Button>
    </div>
  );
}

export default ButtonSave;
