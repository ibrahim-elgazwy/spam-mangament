import Reports from './components/reports';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Toastify from './components/toastify';

function App() {
  return (
    <div className="container">
      <Toastify />
      <Reports />
    </div>
  );
}

export default App;
