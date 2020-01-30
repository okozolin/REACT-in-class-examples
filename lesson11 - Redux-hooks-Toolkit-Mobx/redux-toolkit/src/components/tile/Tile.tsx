import React from "react";
import { Link } from "react-router-dom";
import { TVShowData } from "../../data/TVShowData";

interface Props {
    data: TVShowData,
}


export const Tile: React.FC<Props> = ({ data }) => {
    return (
        <li>
            <Link to={{pathname:`/show/${data.ID}`, state:{data}}} >
                <img src={data.imageMedium} alt="Show" />
                <h3>{data.title}</h3>
            </Link>
        </li>
    );
};


