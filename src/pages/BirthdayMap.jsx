
import PageContentWithImage from "../components/PageContentWithImage";

import photo from '../assets/images/birthday-map-photo-test.jpg'

const BirthdayMap = () => {
    return(
        <PageContentWithImage 
        elementIndex = {1} 
        src={photo} 
        alt="Карта рождения, составленная мной на примере рождения этого сайта."
        />   
    )
}

export default BirthdayMap