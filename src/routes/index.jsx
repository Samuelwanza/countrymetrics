import { Routes, Route } from 'react-router-dom';
import Countries from '../pages/countries/Countries';
import Country from '../pages/country/Country';

const routes = () => (
  <Routes>
    <Route path="/" element={<Countries />} />
    <Route path="/countries/:id" element={<Country />} />
  </Routes>
);

export default routes;
