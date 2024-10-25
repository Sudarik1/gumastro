
import PageContentWithImage from "../components/PageContentWithImage";

import photo from '../assets/images/prediction-map-photo.jpg'

const BirthdayMap = () => {
    return(
        <PageContentWithImage 
        elementIndex = {2} 
        src={photo} 
        alt="Прогностическая карта на момент времени."
        />   
    )
}

export default BirthdayMap