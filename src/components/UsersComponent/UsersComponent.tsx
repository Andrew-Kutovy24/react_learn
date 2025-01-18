import {useEffect, useState} from "react";
import {IUser} from "../../models/UserInterface.ts";
import {useSearchParams} from "react-router-dom";
import {UserComponent} from "./UserComponent/UserComponent.tsx";
import {apiService} from "../../services/api.service.ts";

const UsersComponent = () => {
    const [query] = useSearchParams()
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        const pg = query.get('pg') || ''

        apiService.getUsers(pg)
            .then((data) => setUsers(data.users))
    }, [query])

    return (
        <div>
            {users.map((user) => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;