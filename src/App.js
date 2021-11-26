import { ToastContainer} from 'react-toastify';

import Reports from './components/reports';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {
  return (
    <div className="container">
      <ToastContainer />
      <Reports />
    </div>
  );
}

export default App;
