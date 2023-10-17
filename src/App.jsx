import { useContext } from 'react';
import { UmbracoContext } from '~/contexts/Umbraco';
function App() {
  const { rootNode, data, dataError } = useContext(UmbracoContext);
  return (
    <div>
      {!dataError ?
        <>
          {data ?
            <>
              <img width={150} height={150} src={data.thumbnailUrl} />
              <pre>{JSON.stringify({ rootNode, data }, null, 1)}</pre>
            </>
            :
            "loading..."
          }
        </>
        : <pre style={{ color: "red" }}>{JSON.stringify(dataError, null, 1)}</pre>
      }

    </div>
  );
}

export default App;
