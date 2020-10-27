import React from 'react'
import { moviesData } from '../MoviesData';
import {useHistory} from 'react-router-dom';
import './Description.css'

function Description({match}) {
   let movie= moviesData.find(movie => movie.id === Number(match.params.id));
   let history=useHistory();
   const handleClick=()=>history.push('/');
  return (
<div className="box">
  <h1> {movie.name} official trailer</h1>
  <span className="trailer">{movie.trailer}</span>
  <h2>{movie.description}</h2>
  <button type="button" onClick = {handleClick}>Go Back</button>
</div>
  ); 
} 
 
 export default Description