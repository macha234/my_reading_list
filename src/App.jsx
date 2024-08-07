import { useState } from "react"
import Book from "./components/Book"
import "./index.css"


function App() {
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
     }
  ])
  
  return (
    <>
    <h1 className="title">MY READING LIST</h1>
    {books.map(book =>(
      <Book
      book={book}
      books={books}
      setBooks={setBooks} />
    ))}
      
    </>
  )
}

export default App
