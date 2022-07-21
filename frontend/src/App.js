import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className='App'>
      <Header title='Image Gallery'></Header>
      <Search></Search>
    </div>
  );
}

export default App;
