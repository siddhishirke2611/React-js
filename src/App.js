import { Fragment } from 'react'
import './App.css';
import './component/Netflix.css';
import NetFlix from './component/NetFlix';

function App() {
  return (
    <section className='container'>
      <h1 className='card-heading'>List of Best Netflix Series</h1>
      <NetFlix />
    </section>
  );
}

export default App;
