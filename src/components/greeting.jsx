import { useState } from 'react';

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);
  const handleChangeText = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h1>Hello world!</h1>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={handleChangeText}>Change Text!</button>
    </div>
  );
}
