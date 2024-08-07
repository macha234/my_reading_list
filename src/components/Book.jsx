


function Book({book, books, setBooks}) {


    function completeBook(id){
    const newBooks =  books.filter(book => book.id !== id)
    setBooks(newBooks)
    }
    return(
        <div className="book">
            <h1>{book.name}</h1>

            <ul>
                <li>startingDate: {book.startingDate}</li>

                <li>endDate: {book.endDate}</li>
                
            </ul>

            <div>
                <button className="button" onClick={()=>completeBook(book.id)}>complete</button>
            </div>
        </div>
    )

}
export default Book