import axios from "axios";
import {ICar} from "../models/CarInterface.ts";

const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v1/cars",
    headers: {'Content-Type': 'application/json'}
})

export const getAllCars = async ():Promise<ICar[]> => {
    const {data} = await axiosInstance.get<ICar[]>('')
    return data
}

export const createCar = async (car: ICar): Promise<void> => {
    await axiosInstance.post('', car)
}
