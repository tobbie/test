const fetch = require('node-fetch');

const getPuppiesPromise = (fetch) => {
    return fetch('http://www.recipepuppy.com/api')
    .then(response => 
     getStatus(response))
    .then(response => response.json())
   
    .then(data => {
        console.log(data);
        return {
              title : data.title,
              results : data.results,
              version : data.version
       }})
        
}

const getStatus = (response) => {
    console.log(response.status);
    console.log(response.statusText);
    return response;
}

//getPuppiesPromise(fetch);

const getPuppiesAsync = async (fetch) => 
{
  const request = await fetch('http://www.recipepuppy.com/api');
  //const status = await request.status;
  const data = await request.json();
  return {
            status : request.status,
            title : data.title,
            results : data.results,
            version : data.version           
         }
 }
        
getPuppiesAsync(fetch);

module.exports = {
    getPuppiesPromise,
    getPuppiesAsync

}