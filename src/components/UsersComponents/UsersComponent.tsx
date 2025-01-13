import {FC, useEffect, useState} from 'react';
import IUser from "../../models/UserInterface.ts";
import {getUsers} from "../../services/user.api.service.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers(value.data)
            })
    }, []);

    console.log(users);
    return (
        <div>
            {users.map(user => <UserComponent
                                        id={user.id}
                                        key={user.id}/>)}
        </div>
    );
};

export default UsersComponent;