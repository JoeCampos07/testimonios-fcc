import React from 'react';
import '../stylesheets/testimonio.css';

const capitalize = str => {
  return (
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
}


function Testimonio(props) {
  return(
    <div className='container-testimony'>
      <img 
        className='image-testimony'
        src={require(`../images/testimonio-${props.imagen}.png`)} 
        alt={`Photo of ${capitalize(props.imagen)}`}/>

      <div className='container-testimony-text'>
        <p className='testimony-name'>
          <strong>{props.name}</strong> en {props.country}
        </p>
        <p className='testimony-role'>
          {props.role} en <strong>{props.company}</strong>
        </p>
        <p className='testimony-text'>"{props.text}"</p>
      </div>

    </div>
  );
}

export default Testimonio;

