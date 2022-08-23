import {useState} from 'react';

function App() {
  const [title, setTitle] = useState('Hello World 3');
  const [showContent, setShowContent] = useState(false);

  function handleTitle() {
    setTitle('Estado modificado')
  }

  function handleContent() {
    setShowContent(!showContent);
  }

  return (
    <div>  
      <h1>{title}</h1>
      <ExclusiveContent showContent={showContent}/>
      <button onClick={handleContent}>{showContent ? 'Clique para esconder o conteúdo' : 'Clique aqui para exibir o conteúdo'}</button>
      &nbsp;
      <button onClick={handleTitle}>Alterar o título</button>
    </div>
  );
}

function ExclusiveContent({showContent}) {
  return (
    <>
      {showContent && <h2>Obrigado por chegar até aqui no vídeo</h2>}
    </>
  )
}

export default App;
