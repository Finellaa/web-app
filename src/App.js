import './App.css';
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import RepositoryListPage from './repositories/RepositoryListPage';
import RepositoryDetailPage from './repositories/RepositoryDetailPage';
import NotFound from './error/NotFound';


function App() {
  return (
      <Router>
    <div className="App">
    <RepositoryListPage />
      <div className="content">
        <Routes>
          <Route exact path="/" component={RepositoryListPage} />
          <Route path="/repositories/:id" component={RepositoryDetailPage} />
          <Route component={NotFound} />
          <Route path="/error" component={NotFound} />
        </Routes>

      </div>
  </div>
  </Router>

  );
 }

export default App;
