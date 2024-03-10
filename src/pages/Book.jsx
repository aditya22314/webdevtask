
const Book = (book) => {
 console.log(book,"BOOK")
 const booklist =book.book;
 console.log(booklist.id,"BOOKLIST")

//   console.log(book.book,"BOKK")
//   const books = book?.book.map((value) => 
//    ( 
    
//         <div key={value.id}>
//             {console.log(value,"val")}
//             <h1>{value.name}</h1>
//             <h1>{value.price}</h1>
//         </div>
//     )
//   )
const handleClick = (booklist) => {
   alert(booklist.name)
    console.log(booklist.price)
    console.log(booklist.name)
    console.log(booklist.img)
}
  return (
    <>
    <div style={{display:"flex",flexDirection:"column",border:"2px solid #cdcdcd"}}>
      <div  style={{backgroundColor:"#cdcdcd",width:"300px" ,height:"300px",display:"flex",flexDirection:"column",backgroundImage:`url(${booklist.img})`,backgroundSize:"cover"}} onClick={() =>handleClick(booklist)} >
      
       {/* <img  style={{opacity:"0.5",width:"100%",height:"100%",backgroundSize:"cover"}} src={booklist.img}/> */}
       {/* {books} */}
      </div>
      <div>
        <h1>{booklist.name}</h1>
       <p>{booklist.price}</p>
      </div>
    </div>
    </>
  )
}

export default Book
