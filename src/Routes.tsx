import { Navigate, Route, Routes as RouteSwitch } from "react-router-dom";
export const Paths = {
  about: "/about",
  cv: "/cv",
  contact: "/contact",
};

export const Routes = () => {
  return (
    <RouteSwitch>
      <Route path={Paths.about} element={<div>About</div>} />
      <Route path={Paths.cv} element={<div>Cv</div>} />
      <Route path={Paths.contact} element={<div>Contact</div>} />
      <Route path="*" element={<Navigate to={Paths.about} />} />
    </RouteSwitch>
  );
};
