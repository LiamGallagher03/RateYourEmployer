import Review from './Review'

function Reviews({reviews}) {
    return (
        
        <div>
            <table>
            <tr>
                    <th className="Establishment">Establishment</th>
                    <th className="Location">Location</th>
                    <th className="Rating">Rating</th>
                    <th className="Review">Review</th>
                </tr>
                </table>
         {reviews.map(review => (
             
            <Review  
            key = {review.id}
            review={review} 
       />
        ))}
        </div>
    )
}

export default Reviews