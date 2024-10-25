
import { NavLink } from "react-router-dom"

const LinkComponent = (props) => {
    const isLinkActive = ( { isActive } ) =>
        isActive
        ? 'page__nav__links__btn page__nav__links__btn--active'
        : 'page__nav__links__btn'
    
    return ( 
        <NavLink 
        to = {props.endpoint} 
        className={isLinkActive}>{props.text}
        </NavLink>
    )
}

export default LinkComponent