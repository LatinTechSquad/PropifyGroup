import React from 'react';

const CustomArrow = ({ className, onClick, icon }) => (
  <div className={className} onClick={onClick}>
    <img src={icon} alt="Custom Arrow" />
  </div>
);

export default CustomArrow;