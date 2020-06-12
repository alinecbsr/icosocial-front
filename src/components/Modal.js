/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
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
