import {useState} from 'react';

function App() {
  const [title, setTitle] = useState('Hello World 3');

  return (
    <div>  
      <h1>{title}</h1>
    </div>
  );
}

export default App;
