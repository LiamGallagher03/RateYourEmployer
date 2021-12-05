import './App.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

function App() {
  return (
    <html>
      <header>
        <div class="logo">
          Rate Your Employer
        </div>
      </header>
      <body>
        <div class="search-bar">
          <form id="form">
          <input class="search-text"
            type="search"
            id="query"
            name="q"
            placeholder="Type to search"
            aria-label="search through site content">
          </input>
          <button type="submit">Search</button>
          </form>
        </div>
      </body>
    </html>
    
  );
  const f = document.getElementById('form');
  const q = document.getElementById('query');
  const google = 'https://www.google.com/search?q=site%3A+';
  const site = 'localhost:3000';

  function submitted(event) {
    event.preventDefault();
    const url = google + site + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
  }

  f.addEventListener('submit', submitted);

   
}

export default App;