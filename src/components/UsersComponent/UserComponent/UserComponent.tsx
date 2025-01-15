import {IUser} from "../../../models/UserInterface.ts";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

type Props = {
    user: IUser
}

const UserComponent:FC<Props> = ({user}) => {
    const navigate = useNavigate()
    const handleOnClick = () => {
      navigate('cart/' + user.id, {state: user})
    }

    return (
        <div>
            {user.firstName}-{user.lastName}
            <button onClick={handleOnClick} >go to cart</button>
        </div>
    );
};

export default UserComponent;