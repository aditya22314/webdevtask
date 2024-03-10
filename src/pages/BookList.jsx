import Book from "./Book"

const BookList = (books) => { 
 console.log(books,"BOOKS");
  return (
    <div style={{display:"flex",justifyContent:'center',alignItems:"center",gap:'100px'}} >
       { books.books && 
        books.books?.map((val)=>{ 
            {console.log(val,"sk")}
            return <Book  key ={val.id} book={val} />
        })
       }
    </div>
  )
}

export default BookList
