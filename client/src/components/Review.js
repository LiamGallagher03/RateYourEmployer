function Review({ review }) {
    return (
        <div className='review'>
              <table>
               
                <tr>
                <th className="Establishment">{review.establishment}</th>
                <th className="Location">{review.location}</th>
                <th className="Rating">{review.rating}</th>
                <th className="Review">{review.review}</th>
                </tr>
            </table>
        </div>
    )
}

export default Review
