import {  useDispatch,useSelector } from "react-redux";
import { changeName,changeCost, addCar } from "../store";

function CarForm (){

    const dispatch=useDispatch();
 const {name,cost} =useSelector((state)=>{
        return {
            name:state.form.name,
            cost:state.form.cost
        }
    })
   
const handleNameChange=(event)=>{
    //event.target.value
    dispatch(changeName(event.target.value))
}
const handleCostChange=(event)=>{
    //if not a number 0 a eşitle
    const carCost=parseInt(event.target.value) || 0
    dispatch(changeCost(carCost))
}

const handleSubmit=(event)=>{
    //carsslice da yaptığımız addcar a objelerini gönder
    event.preventDefault();
    dispatch(addCar({name:name,
                     cost:cost                         
                    }))
                    // dispatch(changeCost(0));
                    // dispatch(changeName(""));
                        //we did this operation on formslice extraReducer part


}

    return <div className="car-form panel">
        <h4 className="subtitle is-3"> Add Car</h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                <label className="label">Name</label>
                <input className="input is-expanded"
                        value={name}
                        onChange={handleNameChange}
                />
                </div> 
            </div>
            <div className="field-group">
                <div className="field">
                <label className="label">Cost</label>
                <input className="input is-expanded"
                        value={cost || 0}
                        onChange={handleCostChange}
                />
                </div> 
            </div>
            <div className="field">
                <button className="button is-link">Submit</button>

            </div>
        </form>
    </div>
} export default CarForm;