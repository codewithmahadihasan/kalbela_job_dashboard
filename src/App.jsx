
import { RouterProvider } from 'react-router-dom';
import Router from './routers/Router';

function App() {
      return (
            <>
                  <RouterProvider router={Router} />
            </>
      );
}

export default App;
