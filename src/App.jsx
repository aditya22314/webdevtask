
import './App.css'
import BookList from './pages/BookList'

function App() {

 const Books = [
  {
  id:1,
  name:"Atomic Habits",
  price:"399",
  img:"https://m.media-amazon.com/images/I/81Ls+SBCLiL._SY385_.jpg"
  },
  {
   id:2,
   name:"The Art of Stoicism",
   price:"499",
   img:"https://m.media-amazon.com/images/I/61O2b21rYSL._SY385_.jpg"
  },
 ]
  return (
    <> 
   
     <section style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"100vw"}}>
      <h1 style={{textAlign:"center"}}>Books</h1>
       <BookList books={Books} />   
     </section>
       
    </>
  )
}

export default App
