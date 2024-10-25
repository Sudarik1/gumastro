
import useGetPagesData from "../utils/useGetPagesData"

const PageContentWithImage = ( props ) => {

    const pagesData = useGetPagesData()

    return (
        <div>
            {pagesData.length > 0 && (
                <div>
                    <h2>{pagesData[props.elementIndex].title}</h2>
                    <p>{pagesData[props.elementIndex].content}</p>

                    <div className="pages__photo">
                        <img 
                        className="pages__photo--full-width" 
                        src={props.src} 
                        alt={props.alt}>
                        </img>
                    </div>
                </div>
            )}
            {pagesData.length === 0 && <p>Идет загрузка...</p>}
        </div>
    );
}

export default PageContentWithImage