import {ICar} from "../../models/CarInterface.ts";
import {FC} from "react";

type MyCarProps = {
    car: ICar
}
const CarComponent:FC<MyCarProps> = ({car}) => {
    return (
        <div>
            <p>brand:{car.brand}</p>
            <p>price:{car.price}</p>
            <p>year:{car.year}</p>
            <hr/>
        </div>
    );
};

export default CarComponent;