import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route exact path="/" element={ <Notes />}/>
         
        <Route path="/create" element={<Create />}/>
          
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
