import Header from './components/Header'
import Reviews from './components/Reviews'

import { useState } from 'react'

function App() {
 const [reviews, setReviews] = useState([
   {
    id: 1,
    establishment: "Freddy Fazbear's Pizza",
    location: "Dallas, TX",
    rating: true,
    review: "Yummy"
   },
   {
     id: 2,
     establishment: "Majima Construction",
     location: "Kamurocho, Japan",
     rating: false,
     review: "weird guy with eyepatch"
   },
   {
     id: 3,
     establishment: "boring company",
     location: "testland",
     rating: true,
     review: "test"
   },
   {
     id: 4,
     establishment: "gfoamngojfagfajmgag",
     location: "fagfagfagfagagfagfa",
     rating: true,
     review: "fdsagsagagfagfaga"
   }
 ])

  return (
    <div className="App">
   <Header />
    <Reviews reviews={reviews}/>
    </div>
    
  );
}

export default App;