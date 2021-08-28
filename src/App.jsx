import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <main>
      <section>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
              <Route path="/:subject/:id">
              <Post />
            </Route>
          </Switch>
        </BrowserRouter>
      </section>
    </main>
  );
}

export default App;
