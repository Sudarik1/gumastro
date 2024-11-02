
import PageContentWithImage from "../components/PageContentWithImage";

import photo from '../assets/images/relationship-map-photo.jpg'

const Relationship = () => {
    return(
        <PageContentWithImage 
        elementIndex = {3} 
        src={photo} 
        alt="Карта взаимоотношений."
        />   
    )
}

export default Relationship