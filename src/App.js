import React,{useState} from 'react';
import './App.css';
import MoviesList from './MoviesList'
import  Search from './Search' 
import Rating  from './rating' 
import Add  from './Add' 

import{ Navbar , Nav ,  Form  ,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



function App () {

  //the movie list 
  const moviesList=[
    {
      title:"Wonder Woman",
      description:"Action , SF",
      posterUrl:"https://i.egycdn.com/pic/WmFwZndlY21ZVGp2Y3ZObW1hY21URVBtYm1UbXhQ.jpg",
      rate:3,
      year:2020
    },
    {
      title:"Avengers Endgame",
      description:"Action , SF",
      posterUrl:"https://i.egycdn.com/pic/WmFwZndlY21MY212bWptdm12bWpFY21ibUVtSGNtRW1FY3dQ.jpg",
      rate:5,
      year:2019
    },
    {
      title:"Iron Man 3",
      description:"Action , SF",
      posterUrl:"https://pic.egybest.net/i/WmFwZndlY212bW1tcGJtRUVjbXZtRW1USXhtam1wSQ.jpg",
      rate:4,
      year:2013
    }

  ];

  //search with movie name  
  const [search,setSearch]=useState("");
  const searchFunc=(value)=>{
    setSearch(value);
  }  

  //search with movie rate
  const [rating,setRating]=useState(1);
  const ratingFunc=(rate)=>{
    setRating(rate);
  } 

  //add movie  
  const [movies,setMovies]=useState(moviesList) ;
  const addMovie=(newMovie)=>{
    setMovies([...movies,newMovie])
  }

  return (

  <div className="bigcontainer">

    {/*header*/}
    <Navbar  >
      <Nav className="padtop mr-auto">
          <Nav.Link className="navclass" href="#home">Home</Nav.Link>
      </Nav>      
      <Form inline>
          {/*search with movie rate*/}      
          <div className="padstar"> <Rating ratingFunc={ratingFunc} rating={rating}/></div>
          {/*search with movie name*/} 
          <Search search={searchFunc}/> 
          <Button variant="outline-light">Search</Button> 
      </Form>
    </Navbar>
    {/*body*/} 
    <div className="container" style={{paddingTop:"100px"}}>
      <div>
      {/*add a movie*/} 
      <div className="containeradd" > 
        <span>You can add a movie of your choice </span>       
        <Add addMovie={addMovie}/>
        </div>
      </div>
      {/*show the movies*/} 
      <div>
        <MoviesList movies={movies.filter(movie=>
        movie.title.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()) && movie.rate>=rating  ) }/>
      </div>
    </div>

  </div>
  )
}
export default App ;