import { useState } from "react"
import Book from "./components/Book"
import "./index.css"
import {Link} from 'react-router-dom'

function App() {
const [nameOfBook,setNameOfBook] = useState("")
const [startingDate, setStartingDate] = useState("")
const [endDate, setEndDate] = useState("")

function onSubmit(event){
  // prevents the default behaviour of reloading the page
  event.preventDefault()

  // construct data as an object
  const data = {
    id: Math.random(),
    name: nameOfBook,
    startingDate: startingDate,
    endDate: endDate,
  }
  // make a copy of the array(books)
  const NewData = [...books]


  // push data to the array(newData)
  NewData.push(data)

  // set newData to books 
  setBooks(NewData)
}



  const [books, setBooks] = useState([
    {
      id: 1,
      name: "The Princess and the pea",
      startingDate: "2/7/24",
      endDate: "5/7/24"

    },
    {
      id: 2,
      name: "Meet the Omptitas",
      startingDate: "6/7/24",
      endDate: "9/7/24",
    },
     {
      id: 3,
      name: "Jack and the bean stalk",
      startingDate: "10/7/24",
      endDate: "13/7/24"
     },
  ])

  
  return (
    <>
  <div>
   <Link to="/">Home</Link>
   <br />
   <Link to="/contact">Contact</Link>
   <br/>
   <Link to="/about">About</Link>
  </div>

    <h1 className="title">MY READING LIST</h1>
 
 <div className="wrapper">
 <div>
 {books.map(book =>(
      <Book
      book={book}
      books={books}
      setBooks={setBooks} />
    ))}
 </div>


   <div>
    <h3>ADD A BOOK</h3>
    
   <form onSubmit={onSubmit}>
      <input type="text" value={nameOfBook}  onChange={(event) => setNameOfBook(event.target.value)} placeholder="Name of book"/> 
      <br />
      <input type="text" value={startingDate} onChange={(event) => setStartingDate(event.target.value)} placeholder="Starting date"/>
      <br />
      <input type="text" value={endDate} onChange={(event) => setEndDate(event.target.value)} placeholder="End date"/>
<br />

      <button>submit</button>
      
    </form>
   </div>
 </div>
      
    </>
  )
}

export default App
