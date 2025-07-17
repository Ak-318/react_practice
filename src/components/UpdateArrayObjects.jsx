import React, {useState} from 'react';

function UpdateArrrayObjects() {

    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carBrand, setBrand] = useState("");
    const [carModal, setModal] = useState("");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            brand: carBrand,
            modal: carModal
        }

        setCars(c => [...c, newCar]);

        setYear(new Date().getFullYear());
        setBrand("");
        setModal("");
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((elem, i) => i !== index));
    }

    function handleModal(event){
        setModal(event.target.value);
    }

    function handleBrand(event){
        setBrand(event.target.value);
    }

    function handleYear(event){
        setYear(event.target.value);
    }

    return( <div>
                <h2>List of Cars and It's Details</h2>
                <ul>
                    { cars.map((car, index) => 
                        <li key={index} onClick={() => handleRemoveCar(index)}>
                            {car.year} {car.brand} {car.modal}
                        </li>)}
                </ul>
                <input type="number" value={carYear} onChange={handleYear}/><br/>
                <input type="text" value={carBrand} onChange={handleBrand} placeholder="Enter Brand"/><br/>
                <input type="text" value={carModal} onChange={handleModal} placeholder="Enter Modal"/><br/>
                <button onClick={handleAddCar} >Add Car Details</button>
            </div>)
}

export default UpdateArrrayObjects;