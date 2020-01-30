import { ChangeEvent } from "react";
import React from "react";

interface Props {
    q: string;
    handleSearchChange(q: ChangeEvent<HTMLInputElement>): void;
}


export const Header: React.FC<Props> = ({ q, handleSearchChange }) => {
    return (
        <div className="header">
            <div>
                <input type="search" placeholder="Search" value={q} onChange={handleSearchChange} />
            </div>
        </div>
    );
};