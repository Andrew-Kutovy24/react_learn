import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator.ts";
import {createCar} from "../../services/car.service.ts";

interface IFormProps {
    brand:string;
    price: number;
    year: number;
}

const FormComponent = () => {
    const {handleSubmit, register, reset, formState:{errors, isValid}} = useForm<IFormProps>({mode:"all", resolver: joiResolver(carValidator)})

    const formHandler = (formDataProps:IFormProps) => {
        createCar(formDataProps)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(formHandler)}>
                <label>
                    <input type="text" {...register("brand")}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>
                <label>
                    <input type="number" {...register("price")}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>
                <label>
                    <input type="number" {...register("year")}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>
                <button disabled={(!isValid)}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;