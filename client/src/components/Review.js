function Review({ review }) {
    var recommend;
    review.rating ? recommend = "👍" : recommend = "👎"

        return (
            <div className='review'>
                <table>

                    <tr>
                        <td className="Establishment">{review.establishment}</td>
                        <td className="Location">{review.location}</td>
                        <td className="RatingEmoji">{recommend}</td>
                        <td className="Review">{review.review}</td>
                    </tr>
                </table>
            </div>
        )
}

export default Review
