import Header from './components/Header'
import Reviews from './components/Reviews'

import { useState, useEffect } from 'react'

function App() {
  const fakeReviews = [
    {
      id: 1,
      establishment: "tempate",
      location: "template",
      rating: true,
      review: "bad"
    },
    {
      id: 2,
      establishment: "bad",
      location: "bad",
      rating: false,
      review: "bad"
    }
  ]

  const [reviews, setReviews] = useState(fakeReviews)

  useEffect(() => {
    fetch('/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data.reviews)
        console.info(data)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <Reviews reviews={reviews} />
    </div>

  );
}

export default App;