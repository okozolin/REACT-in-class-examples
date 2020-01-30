import { CastMember } from "./CastMember";

export class ShowCast{

    private _data: object[];
    private _castMembers: CastMember[] = [];

    constructor(data: object[]) {
        this._data = data;
    }

    public createCast(){
        this._data.forEach((show) => {
            this._castMembers.push(new CastMember(show));
        });
        return this._castMembers;
    }

}