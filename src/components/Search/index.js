import React, { useState, useEffect } from 'react';
import {
  StyledSearch,
  Input,
  IconButton,
  SearchListWrapper,
  ListItem,
  Title,
  Thumb,
} from './style';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { youtubeSearch } from 'services/youtubeApi/endpoints';

const SearchList = ({ items, setVideoId }) => {
  if(!items) return null;

  return (
    <SearchListWrapper>
      {items.map(item => (
        <ListItem 
          key={item.id.videoId}
          onClick={() => setVideoId(item.id.videoId)}  
        >
          <Title>{item.snippet.title}</Title>
          <Thumb 
            src={item.snippet.thumbnails.default.url}
            alt={item.snippet.title}
          />
        </ListItem>
      ))}
    </SearchListWrapper>
  );
};

const Search = ({ setVideoId }) => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  let history = useHistory();

  useEffect(() => {
    if (!searchTerm) return;
    youtubeSearch(searchTerm).then(({ data }) => {
      setResults(data.items);
    });
  }, [searchTerm]);

  return (
    <StyledSearch>
      <IconButton onClick={() => history.push('/')}>
        <FiArrowLeft />
      </IconButton>  

      <Input
        id="search"
        name="search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}  
      />

      <SearchList items={results} setVideoId={setVideoId} />
    </StyledSearch>
  );
};

export default Search;
