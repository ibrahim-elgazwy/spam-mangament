import Reports from './components/reports';
import Toastify from './components/toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';


const App = () => {
  return (
    <div className="container">
      <Toastify />
      <Reports />
    </div>
  );
}

export default App;
