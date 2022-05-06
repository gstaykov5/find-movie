import React, { Fragment, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToSearchedMovies } from '../../../features/movies/moviesSlice';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  border: '1px solid black',
  borderRadius: '5px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 10, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '22ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

function SearchInput() {
  const [term, setTerm] = useState('');

  const dispatch = useDispatch();

  const { movies } = useSelector(state => state.moviesReducer);

  const handleSearchTerm = () => {
    if(term.trim() !== '') {
      const search = movies.filter(movie => movie.name.toLowerCase().includes(term.toLowerCase()));
      dispatch(addToSearchedMovies(search));
      setTerm('');
    }
  }
  
  return (
    <Fragment>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          value={term}
          placeholder="Search by movie title"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => setTerm(e.target.value)}
        />
        <Button
        component={Link}
        to={`/search`}
        variant="outlined" 
        color="success" 
        sx={{m: '10px', color: 'green' }}
        onClick={handleSearchTerm}
        >
          Search
        </Button>
      </Search>
    </Fragment>
  )
}

export default SearchInput;