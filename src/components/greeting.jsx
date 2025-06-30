import { useState } from 'react';
import Output from './output';

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);
  const handleChangeText = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h1>Hello world!</h1>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={handleChangeText}>Change Text!</button>
    </div>
  );
}
