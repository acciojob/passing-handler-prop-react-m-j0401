import React, { useState } from 'react';

function Selection(props) {
  const { applyColor } = props;

  const [style, setStyle] = useState({ background: "" });

  function handleClick() {
    applyColor(setStyle); // pass state updater to parent
  }

  return (
    <div className='fix-box' style={style} onClick={handleClick} >
      <p className='subheading'>Selection</p>
    </div>
  );
}

export default Selection;