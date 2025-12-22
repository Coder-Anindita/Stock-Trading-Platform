import {Link,NavLink} from "react-router-dom"
import { useState } from "react";

const Menu = () => {
    const [selectedMenu,setSelectedMenu]=useState(0);
    const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);

    const handleOnSelectedMenu=(index)=>{
        setSelectedMenu(index)
    }

    const handleProfileDrop=()=>{
        setIsProfileDropdownOpen(prev=>!prev)
    }

    const menuClass="menu"
    const activeMenuClass="menu selected"
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleOnSelectedMenu(0)}>
                <p className={ selectedMenu===0?activeMenuClass:menuClass}>Dashboard</p>
            </Link>
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleOnSelectedMenu(1)}>
                <p className={ selectedMenu===1?activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleOnSelectedMenu(2)}>
                <p className={ selectedMenu===2?activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleOnSelectedMenu(3)}>
                <p className={ selectedMenu===3?activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleOnSelectedMenu(4)}>
                <p className={ selectedMenu===4?activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleOnSelectedMenu(5)}>
                <p className={ selectedMenu===5?activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileDrop} >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
