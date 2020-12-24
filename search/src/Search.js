import React, { useState, useEffect } from 'react';
import Axios from 'axios'



// function axious(){
//     Axios({
//       method: 'GET',
//       url: 'http://localhost:5000/search',
//
//     })
//     .then(function (response) {
//       getName(response.data[0].name)
//       console.log(response.data[0].name);
//     });
//
//   }

var Typeahead = require('react-typeahead').Typeahead;

function Search(){
  const [name, getName] = useState('')



  function axious(){
      Axios({
        method: 'GET',
        url: 'http://localhost:5000/search',

      })
      .then(function (response) {
        getName(response.data[0].name)
        console.log(response.data[0].name);
      });

    }

    useEffect(()=>{
      axious()
    },[])
// I chose to go with type ahead, if we had a database
  return(
    <div>
    <button onClick={axious}>Click me</button>
<Typeahead
    options={name}
    maxVisible={2}
  
    />
    </div>
  );


}

export default Search;
