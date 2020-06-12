import React from 'react';

export default function Modal(props) {
  return (
    <div className={`modal ${props.show ? 'modal-show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={props.close}>
          &times;
        </span>
        {props.children}
      </div>
    </div>
  );
}
