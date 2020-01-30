import React from "react";
import { Header } from "./../components/header/Header";
import { TileList } from "./../components/tile-list/TileList";
import { ChangeEvent } from "react";
import { TVShowsFetcher } from "./../data/TVShowsFetcher";
import { TVShowData } from "./../data/TVShowData";
import { useDispatch, useSelector } from "react-redux";
import { updateShows } from "../redux/showsSlice";

export const Home: React.FC = () => {
  const [query, setQuery] = React.useState<string>("");
  //   const [shows, setShows] = React.useState<TVShowData[]>([]);
  const shows = useSelector((state: any) => state.shows);
  const dispatch = useDispatch();

  const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const q = event.target.value;
    setQuery(q);
    const items = await TVShowsFetcher.getInstance().getShows(q);
    dispatch(updateShows(items));
    // setShows(items);
  };

  return (
    <div className="App">
      <Header q={query} handleSearchChange={handleSearchChange} />
      <TileList shows={shows} />
    </div>
  );
};
