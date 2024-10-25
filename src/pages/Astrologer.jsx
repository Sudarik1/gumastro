
import { useState } from "react"

import useGetPagesData from "../utils/useGetPagesData"

import diploma from "../assets/images/astrologer-dimploma-photo-first.jpg"
import diplomaSecond from "../assets/images/astrologer-dimploma-photo-second.jpg"
import photo from "../assets/images/astrologer-photo-first.jpg"
import photoSecond from "../assets/images/astrologer-photo-second.jpg"
import certificate from "../assets/images/astrologer-certificate.jpg"

const Astroleger = ( {} ) => {

    const pagesData = useGetPagesData()

    const [expandedPhoto, setExpandedPhoto] = useState(null);


    const toggleExpand = (photoIndex) => {
        setExpandedPhoto(expandedPhoto === photoIndex ? null : photoIndex);
      };

    return (
        <div>
            {pagesData.length > 0 && (
                <>
                    <h2>{pagesData[13].title}</h2>
                    <p>{pagesData[13].content}</p>
                    <p className="page__main__promotion">Доступны консультации, стоимость - 2000 рублей в час.</p>
                
                    <div className="page__astrologer__photos">
                        <div className={`
                            page__astrologer__photos__div 
                            ${expandedPhoto === 1 ? "page__astrologer__diplom-photo--expanded" : ""}
                            cursor-pointer
                            
                            `}>
                            <img 
                            className="page__astrologer__photo" 
                            src={diplomaSecond} 
                            alt="Диплом высшей школы классической астрологии, расширенный."
                            onClick={() => toggleExpand(1)}
                            />
                        </div>

                        <div className="page__astrologer__photos__div">
                            <img 
                            className="page__astrologer__photo" 
                            src={photo} 
                            alt="Моя фотография на рабочем месте." 
                            />
                        </div>
                            
                        <div className={`
                            page__astrologer__photos__div 
                            ${expandedPhoto === 2 ? "page__astrologer__diplom-photo--expanded" : ""}
                            cursor-pointer
                            `}>
                            <img 
                            className="page__astrologer__photo" 
                            src={diploma} 
                            alt="Диплом высшей школы классической астрологии."
                            onClick={() => toggleExpand(2)}
                            />
                        </div>
                            
                        <div className="page__astrologer__photos__div">
                            <img 
                            className="page__astrologer__photo" 
                            src={photoSecond} 
                            alt="Моя фотография в парке Горького на фоне сирени."
                            />
                        </div>

                        <div className={
                            `page__astrologer__photos__div 
                            ${expandedPhoto === 3 ? "page__astrologer__diplom-photo--expanded" : ""}
                            cursor-pointer
                            `}>
                            <img 
                            className="page__astrologer__photo" 
                            src={certificate} 
                            alt="Сертификат высшей школы классической астрологии."
                            onClick={() => toggleExpand(3)}
                            />
                        </div>

                    </div>
                </>
            )}

            {pagesData.length === 0 && <p>Идет загрузка...</p>}
        </div>
    );
}

export default Astroleger