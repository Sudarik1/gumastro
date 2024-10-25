
import PageContentWithImage from "../components/PageContentWithImage";

import photo from '../assets/images/relationship-map-photo.jpg'

const BirthdayMap = () => {
    return(
        <PageContentWithImage 
        elementIndex = {3} 
        src={photo} 
        alt="Карта взаимоотношений."
        />   
    )
}

export default BirthdayMap