import {FC} from 'react';
import ISimpson from "../../models/ISimpson.ts";
import style from './CharacterComponent.module.css'

const CharacterComponent:FC<ISimpson> = ({name, surname, age, info, photo}) => {
    return (
        <div className={style.char}>
            <h3>{name} {surname}</h3>
            <p>age: {age}</p>
            <p>{info}</p>
            <img src={photo} alt={name}/>
            <hr/>
        </div>
    );
};

export default CharacterComponent;