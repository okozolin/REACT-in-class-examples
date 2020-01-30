import { IDataObject } from "./IDataObject";

export class CastMember implements IDataObject {

  private _person: any;
  private _character: any;

  constructor(data: any = {}) {
    this._person = data.person;
    this._character = data.character;
  }
  
  setData(data: any): void {
    this._person = data.person;
    this._character = data.character;
  }

  get actorID(): string {
    return this._person.id;
  }

  get characterID(): string {
    return this._character.id;
  }

  get actorUrl(): string {
    return this._person.url;
  }

  get characterUrl(): string {
    return this._character.url;
  }

  get actorName(): string {
    return this._person.name;
  }

  get characterName(): string {
    return this._character.name;
  }

  get actorPage(): string {
    return this._person.url;
  }

  get characterPage(): string {
    return this._character.url;
  }

  get actorImageMedium(): string {
    return this._person.image ? this._person.image.medium : '';
  }

  get actorImageOriginal(): string {
    return this._person.image ? this._person.image.original : '';
  }
  get characterImageMedium(): string {
    return this._character.image ? this._character.image.medium : '';
  }

  get characterImageOriginal(): string {
    return this._character.image ? this._character.image.original : '';
  }

  get actorLifeSpan(): string {
    return `${this.actorBirthDay} - ${this.actorDeathDay}`
  }

  get actorBirthDay(): string {
    return new Date(this._person.birthday).getFullYear().toString();
  }

  get actorDeathDay(): string {
    return this._person.deathday ? new Date(this._person.deathday).getFullYear().toString() : "";
  }

}