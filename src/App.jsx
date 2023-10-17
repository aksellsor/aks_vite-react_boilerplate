import { useContext } from 'react';
import { UmbracoContext } from '~/contexts/Umbraco';
function App() {
  const { data } = useContext(UmbracoContext);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </div>
  );
}

export default App;
