// import { TVShow } from "./TVShow";
import { IDataObject } from "./IDataObject";

export class TVList <T extends IDataObject>{

    private _data: any[];

    private _shows: T[] = [];

    constructor(data: any) {
        this._data = data;
    }

    /**
     * createShows
     * creates a list of TVShow objects from _data
     */
    public createShows<T extends IDataObject>(t: new () => T): T[]{
        this._data.forEach((item) => {
            const newT: T = new t();
            newT.setData(item);
            this._shows.push(newT as any);
        });
        return this._shows as any;
    }
}