import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './App.css'
import light from './light.jpg'; // Tell webpack this JS file uses this image


// using the typeahead library to be able to search from the database
var Typeahead = require('react-typeahead').Typeahead;

function Search(){
  const [name, getName] = useState('')



  function axious(){
    // Sending a get request to the server in order to retrieve information back
    Axios({
      method: 'GET',
      url: 'http://localhost:5000/search',

    })
    .then(function (response) {
      getName(response.data[0].name)
      console.log(response.data[0].name);
    });

  }

  // I chose to go with type ahead, if we had a database
  return(
    <div>
     <h1><img src={light} alt="Logo" /></h1>
    <Typeahead placeholder='Type in to search'
    options={name}
    maxVisible={2}

    />
    <button onClick={axious}>Click me before searching</button>

    </div>
  );


}

export default Search;
