import {FC} from "react";
import {IUser} from "../../../models/IUser.ts";

type UserComponentProps = {
    user: IUser;
}

const UserComponent:FC<UserComponentProps> = ({user}) => {
    return (
        <div>
            <p>id:{user.id} age:{user.age}</p>
            <p>name: {user.firstName} {user.lastName}</p>
            <hr/>
        </div>
    );
};

export default UserComponent;