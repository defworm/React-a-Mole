
import './App.css';
import { useState } from 'react';
import MoleContainer from './MoleContainer';
import Mole from './Mole';

function App () {
  let [score, setScore] = useState (0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push (
        <MoleContainer
        key =
        {setScore={setScore}}
        score={score} />
      )
    }
    return (
      <div>
        {hills}
      </div>
    )
  }
}

export default App;
