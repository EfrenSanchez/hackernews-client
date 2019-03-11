//Dependencies
import React from 'react';

//Styles
import './index.css';

const Loading = () => {
  return(
    <div className="lds">
      <h4 > Loading... </h4>
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  );
}

export default Loading;