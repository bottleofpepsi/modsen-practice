import './BookCard.css'
import placeholder from '../../assets/placeholder.jpg'

function BookCard() {
    return (
      <article>
        <img 
          src={placeholder}
          alt="Book Image" 
          width="200"
          height="200"
        />
        <h2>Template</h2>
        <p>Author</p>
      </article>
    )
}

export default BookCard;