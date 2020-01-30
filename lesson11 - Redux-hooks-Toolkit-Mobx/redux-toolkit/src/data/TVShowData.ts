import { IDataObject } from "./IDataObject";

export class TVShowData implements IDataObject{
    

    private _score: number;
    private _show: any;

    constructor(data: any = {}) {
        this._score = data.score;
        this._show = data.show;
    }

    setData(data: any): void {
        this._score = data.score;
        this._show = data.show;
    }



    get score(): number {
        return this._score;
    }

    get title(): string {
        return this._show.name;
    }

    get summary(): string {
        return this._show.summary;
    }

    get type(): string {
        return this._show.type;
    }

    get url(): string {
        return this._show.officialSite ? this._show.officialSite : this._show.url;
    }

    get genres(): string[] {
        return this._show.genres;
    }

    get language(): string {
        return this._show.language;
    }

    get ID(): string {
        return this._show.id.toString();
    }

    get imageMedium(): string {
        return this._show.image ? this._show.image.medium : '';
    }

    get imageOriginal(): string {
        return this._show.image ? this._show.image.original : '';
    }

}