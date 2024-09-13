import React from 'react';
import { useGlobalContext } from './Context';
import Pages from './Pages';

const App = () => {
  const { hits, isLoading } = useGlobalContext();

  if (isLoading) {
    return <h1>Loading..........</h1>;
  }

  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        {hits.map((val) => {
          return (
            <li key={val.objectID}>{val.title}</li>
          );
        })}
      </ul>
      <Pages />
    </div>
  );
};

export default App;
