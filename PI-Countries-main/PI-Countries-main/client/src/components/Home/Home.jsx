import React from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import {useDispatch, useSelector} from "react-redux"
import { getCountries } from "../../actions/action";
function Home() {

    const dispatch= useDispatch()
    const selec= useSelector(state=> state.videojuegos)
    useEffect(()=> {
   
if(!selec.length){return dispatch(getCountries())}
else console.log("ya Hay videojuegos");    
    },)





    
    return (
      <div  >
    {selec.map(e=>{ 
        return <Card
        key={e.name}
        id={e.cca3}
        name={e.name}
        image={e.png}
        genre={e.region}
        />
            




    })}
      </div>
    );
  }
  
  export default Home;
  