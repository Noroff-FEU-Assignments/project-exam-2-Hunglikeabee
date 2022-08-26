import { useState } from "react";
import HeadingH1 from "../../general/HeadingH1Style";
import { StyledMenu, StyledShowMenu, StyledBlackOverylay, StyledHamburger, StyledBars } from "./StyledHamburger";
import { Link } from 'react-router-dom';


export default function Hamburger() {

    const [hamburgerState, setHamburger] = useState(false)


    const handleMenu = () => {
        setHamburger((prev) => !prev)
    }

    const showMenu = <>
                        <StyledShowMenu>
                            <HeadingH1>Meny</HeadingH1>
                            <Link onClick={handleMenu} to="/">Forsiden</Link>
                            <Link onClick={handleMenu} to="torsdagsgolf">Torsdagsgolf</Link>
                            <Link onClick={handleMenu} to="grasrotandelen">Grasrotandelen</Link>
                        </StyledShowMenu>
                        <StyledBlackOverylay onClick={handleMenu} />
                    </>

    return(
        <StyledMenu>
            <StyledHamburger onClick={handleMenu}>
                <StyledBars className={hamburgerState ? "openMenu" : ""} />
            </StyledHamburger>
            {hamburgerState ? showMenu : ""}
        </StyledMenu>
    )
}