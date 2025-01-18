import {FC} from "react";
import {IUser} from "../../../models/UserInterface.ts";

type MyUserProps = {
    user: IUser
}

export const UserComponent:FC<MyUserProps> = ({user}) => {

    return (
        <div>
            {user.firstName} - {user.lastName}
        </div>
    );
};
