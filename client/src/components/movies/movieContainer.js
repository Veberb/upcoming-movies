import React, { useEffect, useState, useRef } from 'react';
import MovieCard from './movieCard';
import SearchBar from '../search/searchBar';
import InfiniteScroll from 'react-infinite-scroller';
import axios from '../../axios/backend';
import './movieContainer.css';

function MovieContainer() {
  const [movies, setMovies] = useState([]);
  const page = useRef(0);
  const hasMoreToLoad = useRef(true);
  const isFetching = useRef(false);

  const getList = async () => {
    if (isFetching.current) return;
    isFetching.current = true;
    console.log(page.current);
    const { data } = await axios.get('movies', { params: { page: page.current } });
    isFetching.current = false;
    setMovies(old => [...old, ...data.results]);
    hasMoreToLoad.current = data.page === data.total_pages;
  };

  const loadMoreMovies = async pagination => {
    page.current = pagination;
    getList();
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <InfiniteScroll
        pageStart={0}
        hasMore={hasMoreToLoad.current}
        loadMore={loadMoreMovies}
        threshold={100}
        loader={
          <div className="ui active inverted dimmer">
            <div className="ui large text loader">Loading</div>
          </div>
        }
      >
        <div className="movie-container">
          {movies.map((mov, index) => (
            <MovieCard movie={mov} key={index}></MovieCard>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default MovieContainer;
