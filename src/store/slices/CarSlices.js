import { createSlice,nanoid } from "@reduxjs/toolkit";
const carsSlice= createSlice({
        name:"cars",
        initialState:{
            searchTerm:"",
            dataCars:[]
        },
        reducers:{
            changeSearchTerm(state,action){
                state.searchTerm=action.payload
            },
            addCar(state,action){
                //assumtion action payload bir obje olarak gelicek içinde
                //isim ve fiyat olucak
                state.dataCars.push({
                    name:action.payload.name,
                    cost:action.payload.cost,
                    id:nanoid(),
                })
            },
            removeCar(state,action){
//assumtion : action.payload === the id of the car we want to remove 
        const updated = state.dataCars.filter((car)=>{
            return car.id !==action.payload
        })
state.dataCars=updated;
            }
        }

})

export const {changeSearchTerm,addCar,removeCar} =carsSlice.actions
 export const carsReducer =carsSlice.reducer;