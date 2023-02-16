import { Link } from "react-router-dom";

const NavBar = ({nav1, nav2, to1, to2}) => {
  return (
    <div className=" my-9 flex flex-col md:flex-row items-center justify-center  h-12 max-md:h-52 ">
      <div className="p-3 my-5 border-b-4 border-sky-600 max-sm:my-0 max-sm:mx-10 text-2xl justify-center text-sky-600">
        <Link to={to1}>{nav1}</Link>
      </div>
      <div className="p-3 border-b-4 border-sky-600 my-5  max-sm:my-0 max-sm:mx-10 text-2xl justify-center  text-sky-600">
        <Link to={to2}>{nav2}</Link>
      </div>
      
    </div>
  );
};

export default NavBar;
