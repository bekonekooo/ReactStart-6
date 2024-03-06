import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList (){
    const dispatch= useDispatch();
    const cars =useSelector(({cars:{dataCars,searchTerm}})=>{
        return dataCars.filter((car)=>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    })
    // const cars = useSelector(({ cars: { dataCars, searchTerm } }) => {
    //     return dataCars.filter((car) => 
    //         car.name && car.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    // });
    console.log(cars)

    const handleCarDelete=(car)=>{
        console.log("Car ID:", car.id);
        dispatch(removeCar(car.id))
    }

    const renderedCars =cars.map((car)=>{
        return (<div key={car.id} className="panel">
            <p>
                {car.name} -$ {car.cost}
            </p>
            <button onClick={()=>handleCarDelete(car)} className="button is-danger">DELETE</button>
        </div>)
    })
    return <div className="car-list">{renderedCars}</div>
} export default CarList;