import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import FaqSection from './components/FaqSection';
import Header from './components/Header';
import Heading from './components/Heading';
import Help from './components/Help';
import WorkSection from './components/WorkSection';
function App() {
  return (
    <div>
      <Header />
      <div className='bg-heading'>
        <Heading />
      </div>
      <div className='py-5'>
        <WorkSection />
      </div>
      <div className='bg-heading pt-4'>
         <Help />
      </div>
      <div className='py-5'>
        <FaqSection />
      </div>
    </div>
  );
}

export default App;
