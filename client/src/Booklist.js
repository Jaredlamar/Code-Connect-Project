import React,{useState} from 'react'


function Booklist({books, currentUser, key, onNewWatchList}) {
  
  const [bookList, setBookList] = useState([])

  const handleWatchlist = (event) =>{
    event.preventDefault();
   setBookList(books)
       fetch(`/booklists`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify({
               book_id: books.id,
               user_id: currentUser.id
               
           })
       })
       .then(res => res.json())
       .then(res => {
         onNewWatchList(res)
       })
}
  return (    
      <div className='row'>
          <h2 onClick={(e)=>handleWatchlist(e)} className='book-title'>{books.title}</h2>
          <div className='row_posters'>
            <img  className='row_posterLarge' src={books.image} alt={books.title}/>
        </div>
      </div>
      
    
  )
}

export default Booklist