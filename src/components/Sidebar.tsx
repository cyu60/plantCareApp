import React from "react";
import Image from "next/image";
import { Plant } from "../types/plant";
import Link from "next/link";
import { HiMenu } from "react-icons/hi"; // > HiChevronRight 

// type CardProps = {
//   plant: Plant;
//   // paragraph: string
// };

const SideBar: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <div className="pt-6">
            <label
              htmlFor="my-drawer-2"
              className="drawer-button text-4xl btn btn-ghost lg:hidden "
            >
              <HiMenu />
            </label>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-80 bg-base-100 p-4 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/add">Add Plant</Link>
              {/* <a>Add Plant</a> */}
            </li>
            <li>
              <Link href="/tasks">Tasks</Link>
              {/* <a>Tasks</a> */}
            </li>
            <li>
              <Link href="/discover">Discover</Link>
              {/* <a>Discover</a> */}
            </li>
          </ul>
        </div>
      </div>
    </>
    // <>
    //   <div className="card-compact card w-max bg-base-100 shadow-xl">
    //     <figure>
    //       <Image src={plant.image} alt={plant.name} width={80} height={100} />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title">{plant.name}</h2>
    //       <div className="badge-secondary badge">{plant.category}</div>

    //       <p>{plant.description}</p>
    //       <div className="card-actions justify-end">
    //         {/* <button className="btn-primary btn">Delete</button> */}
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default SideBar;
