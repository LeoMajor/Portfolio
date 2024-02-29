import { RouterProvider } from 'react-router-dom';
import { getRouter } from './configs/router';

function App() {
  return (
    <>
      <RouterProvider router={getRouter()} />
    </>
  );
}

export default App;
