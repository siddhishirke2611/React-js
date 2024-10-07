import { Fragment } from 'react'
import './App.css';
// import './component/Netflix.css';
import './component/EV.css';
import NetFlix from './component/NetFlix';
import EventHandling from './component/EventHandling';

function App() {
  return (
    <section className='container'>
      {/* <h1 className='card-heading'>List of Best Netflix Series</h1>
      <NetFlix /> */}
      <EventHandling/>
    </section>
  );
}

export default App;
