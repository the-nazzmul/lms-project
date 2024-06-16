import MobileSidebar from "./mobileSidebar";
import NavbarRoutes from "./nabvar-routes";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm ">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
