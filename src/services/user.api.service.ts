import axios, {AxiosResponse} from "axios";
import IUser from "../models/UserInterface.ts";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/users",
    headers: {"Content-Type": "application/json"}
})

const getUsers = ():Promise<AxiosResponse<IUser[]>> => {
    return axiosInstance.get('')
}

export {
    getUsers
}

