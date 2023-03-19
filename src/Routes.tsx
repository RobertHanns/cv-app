import { Navigate, Route, Routes as RouteSwitch } from "react-router-dom";
import { AboutView } from "./views/AboutView/AboutView";
export const Paths = {
  about: "/about",
  cv: "/cv",
  contact: "/contact",
};

export const Routes = () => {
  return (
    <RouteSwitch>
      <Route path={Paths.about} element={<AboutView />} />
      <Route path={Paths.cv} element={<div>Cv</div>} />
      <Route path={Paths.contact} element={<div>Contact</div>} />
      <Route path="*" element={<Navigate to={Paths.about} />} />
    </RouteSwitch>
  );
};
