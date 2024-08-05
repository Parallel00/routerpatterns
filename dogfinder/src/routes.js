import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import List from './listdog';
import FiltDet from './filtdets';

function SiteRoutes({dogs}) {
  return (
    <Routes>
      <Route
        path="/dogs"
        element={<List dogs={dogs} />}
      />

      <Route
        path="/dogs/:name"
        element={<FiltDet dogs={dogs} />}
      />

      <Route
        path="/*"
        element={<Navigate to="/dogs" />}
      />
    </Routes>
  );
}

export default SiteRoutes;

