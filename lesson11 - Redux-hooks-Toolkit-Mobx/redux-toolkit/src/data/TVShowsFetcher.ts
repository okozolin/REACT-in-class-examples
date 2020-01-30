import { TVShowData } from "./TVShowData";
import { TVList } from "./TVList";
import { CastMember } from "./CastMember";


export class TVShowsFetcher {

    private static instance: TVShowsFetcher;

    private constructor() { }

    static getInstance(): TVShowsFetcher {
        if (!TVShowsFetcher.instance) {
            TVShowsFetcher.instance = new TVShowsFetcher();
        }
        return TVShowsFetcher.instance;
    }

    getShows(q: string): Promise<TVShowData[]>{
        return fetch(`https://api.tvmaze.com/search/shows?q=${q}`)
            .then(response => response.json())
            .then(data => new TVList<TVShowData>(data))
            .then(showsList => showsList.createShows(TVShowData));
    }

    getCast(showId: string): Promise<CastMember[]>{
        return fetch(`https://api.tvmaze.com/search/shows/${showId}/cast`)
            .then(response => response.json())
            .then(data => new TVList<CastMember>(data))
            .then(cast => cast.createShows(CastMember));
    }

    // getTVShow(showId:string): Promise<TVShowData>{
    //     return fetch(`http://api.tvmaze.com/search/shows/${showId}/cast`)
    //         .then(response => response.json())
    //         .then(data => new TVList<CastMember>(data))
    //         .then(cast => cast.createShows(CastMember));
    // }
}