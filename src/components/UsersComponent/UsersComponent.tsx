import { useEffect, useState} from "react";
import {apiService} from "../../services/api.service.ts";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "./UserComponent/UserComponent.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        apiService.getUsers().then(({users})=> {
            setUsers(users)
        })
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;