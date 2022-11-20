// //estado inicial
// fn reducer<<<<<<<<<<
let EstadoInicial= {
    videojuegos:[]
}
export default function reducer(state = EstadoInicial,action){
    switch(action.type){
        case "GET_COUNTRIES":
            return{
                ...state,
                videojuegos:action.payload
            }
        default:
        return {...state}
    }
}
