import React from 'react';

export var Header =  function(props){
    return  <div className="App-header">
          <img src={props.logo} className="App-logo bmmm" alt="logo" />
          { props.logoText }
        </div> 
}