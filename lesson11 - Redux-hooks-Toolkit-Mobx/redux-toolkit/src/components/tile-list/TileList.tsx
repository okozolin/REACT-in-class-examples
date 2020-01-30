
import React from "react";
import { Tile } from "../tile/Tile";
import { TVShowData } from "../../data/TVShowData";

interface Props {
    shows: TVShowData[]
}

export const TileList: React.FC<Props> = ({ shows }) => {
    return (
        <div className='tile-list'>
            {
                shows.map((item: TVShowData) => (
                    <div key={item.ID}>
                        <Tile data={item} />
                    </div>
                ))}
        </div>
    );
}