import React, { useState, useEffect } from 'react';
import Axios from 'axios'



function axious(){
    Axios({
      method: 'post',
      url: 'http://localhost:5000/test',
      data: {
        url: input,
      }
    })
    .then(function (response) {
      setShow(response.data.shortUrl)
      console.log(response.data.shortUrl);
    });

  }

var Typeahead = require('react-typeahead').Typeahead;

function Search(){
// I chose to go with type ahead, if we had a database
  return(
    <div>
<Typeahead
    options={['John', 'Paul', 'George', 'Ringo']}
    maxVisible={2}
    />
    </div>
  );


}

export default Search;
