import { Navigate, Route, Routes as RouteSwitch } from "react-router-dom";
import { About } from "./views/About";
import { Skills } from "./views/Skills";
export const Paths = {
  about: "/about",
  cv: "/cv",
  contact: "/contact",
};

export const Routes = () => {
  return (
    <RouteSwitch>
      <Route path={Paths.about} element={<About />} />
      <Route path={Paths.cv} element={<Skills />} />
      <Route path={Paths.contact} element={<div>Contact</div>} />
      <Route path="*" element={<Navigate to={Paths.about} />} />
    </RouteSwitch>
  );
};
