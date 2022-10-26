import React from 'react';

const Input = ({
  text,
  setText,
  type,
  description,
}) => {
  return (
    <div className="form-input">
      {description && <label>{description}</label>}
      <input value={text} type={type} onChange={e => setText(e.target.value)} />
    </div>
  )
}

export default Input;