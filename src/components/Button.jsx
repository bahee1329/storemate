
import React from 'react';

function Button(props) {
  const buttonStyles = {
    height: 50,
    width: '95%',
    backgroundColor: props.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin:4,
    fontSize:16

  };

  return (
    <button style={buttonStyles}>
        <div style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'center',color:props.color}}>
         {props.inner1}{props.inner}
        </div>
      
    </button>
  );
}

export default Button;
