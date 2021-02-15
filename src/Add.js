import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'


const Add = ({addMovie}) => {
    const [show, setShow] = useState(false);
    const Show = () => setShow(true);
    const Close = () => setShow(false);

    const [input,setInput]=useState(
      { title:"",
        description:"",
        posterUrl:"" ,
        rate:1,
        year:""
      }
    );
    const handleChange=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
    }
  
    return (
      <>
        <Button  variant="outline-light" onClick={Show}>
          Add movie
        </Button>
        <Modal show={show} onHide={Close}>
          <Modal.Header closeButton>
            <Modal.Title>Your movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label  style={{width:"250px"}}>title:</label>
            <input type='text' name="title" onChange={handleChange}  /><br />
            <label  style={{width:"250px"}}>genre:</label>
            <input type='text' name="description" onChange={handleChange}  /><br />
            <label  style={{width:"250px"}}>image:</label>
            <input type='text' name="posterUrl" onChange={handleChange} /><br />
            <label  style={{width:"250px"}}>rating:</label>
            <input type='text' name="rate" onChange={handleChange}  />
            <label  style={{width:"250px"}}>year:</label>
            <input type='text' name="year" onChange={handleChange} /><br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={Close}>
              Close
            </Button>
            <Button variant="dark" onClick={
              ()=>{
                addMovie(input);
                Close();
                setInput({
                  title:"",
                  description:"",
                  posterUrl:"" ,
                  rate:1,
                  year:""
                })
              }
            }>
              Add movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default Add