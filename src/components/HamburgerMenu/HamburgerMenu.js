import { useState } from "react";
import { Twirl } from "hamburger-react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
   const [isOpen, setOpen] = useState(false);

   return (
      <>
         <div className="hamburgermenu-container">
            <div className={isOpen ? "menu-active" : "menu-hidden"}>
               {/*REPLACE -- Add function capabilities here once available*/}
               <p className="item">Awesome option #1</p>
               <p className="item">Awesome option #2</p>
               <p className="item">Awesome option #3</p>
               <p className="item">Awesome option #4</p>
            </div>
            <div className="icon-container">
               <Twirl
                  rounded
                  color="#ffffff"
                  toggled={isOpen}
                  toggle={setOpen}
               ></Twirl>
            </div>
         </div>
      </>
   );
};

export default HamburgerMenu;
