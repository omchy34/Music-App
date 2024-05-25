import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import "./Card.css";

const Card = ({ name, title , onClick , key }) => {
    return (
        <div className="main cursor-pointer" onClick={onClick} key={key}>
            <div className="items p-5 hover:bg-zinc-700 transition-all rounded-xl" >
                <div className="play">
                    <FaCirclePlay className="text-green-500" />
                </div>
                <img src='https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebcb6926f44f620555ba444fca/1/en/default' className="card-image h-32" alt={name} />
                <h3 className="text-base pt-2">{name}</h3>
                <p className="pt-1 text-zinc-500 text-sm">{title}</p>
            </div>
        </div>
    );
};

export default Card;