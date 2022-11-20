export function getCountries (params){
return function (dispatch){
    return fetch ("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => dispatch({type:"GET_COUNTRIES",payload:data.slice(0,10)}))
}
} 


// getCountries