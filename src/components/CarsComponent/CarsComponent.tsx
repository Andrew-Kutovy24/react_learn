import {FC, useEffect, useState} from "react";
import {ICar} from "../../models/CarInterface.ts";
import CarComponent from "../CarComponent/CarComponent.tsx";
import {getAllCars} from "../../services/car.service.ts";

const CarsComponent:FC = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getAllCars().then(data => setCars(data))
    }, []);

    console.log(cars);

    return (
        <div>
            {cars.map(car => <CarComponent key={car.id} car={car}/>)}
        </div>
    );
};

export default CarsComponent;