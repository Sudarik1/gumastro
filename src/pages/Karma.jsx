
import PageContentWithImage from "../components/PageContentWithImage";

import photo from '../assets/images/karma-map-photo.jpg'

const Karma = () => {
    return(
        <PageContentWithImage 
        elementIndex = {4} 
        src={photo} 
        alt="Кармическая карта, добавлены две тайные планеты, белая луна и черная луна, раскрывающие кармические тайны."
        />   
    )
}

export default Karma