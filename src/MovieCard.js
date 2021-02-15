import React from 'react'
import{ Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({movie}) => {
return (
    
        <Card className=" text-white movie " style={{background:"rgb(2,9,17)"}}>
            <div className="pad">{movie.title}({movie.year})</div>
            <StarRatingComponent className="pad" name="rate"starCount={5}value={movie.rate}/>
            <img className="pad"src={movie.posterUrl}  alt="im" width="120px"/>
            <div className="pad"> {movie.description} </div>
            <div className="pad"> 
            </div>
               
        </Card>   
)}

export default MovieCard ;

