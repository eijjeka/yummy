import { Routes, Route } from "react-router-dom";
import { Layout } from "App/components/Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};
