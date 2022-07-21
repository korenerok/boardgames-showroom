import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Header from './components/Header';
import Search from './components/Search';

const api_clientid= process.env.REACT_APP_API_CLIENTID;

function App() {
  return (
    <div className='App'>
      <Header title='Image Gallery'></Header>
      <Search api_clientid={api_clientid}></Search>
    </div>
  );
}

export default App;
