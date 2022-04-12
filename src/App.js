
import Address from './Address';
import './App.css';
import Destinations from './Destinations';
import Explore from './Explore';

import Home from './Home';
import Quote from './Quote';
import Upcomming from './Upcomming';

function App() {
  return (
    <div className="App">
     <Home/>
     <Quote/>
     <Upcomming/>
     <Explore/>
     <Destinations/>
     <Address/>
    </div>
  );
}

export default App;
