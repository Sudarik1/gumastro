
import useGetPagesData from "../utils/useGetPagesData"

const PageContentWithoutImage = ( props ) => {

    const pagesData = useGetPagesData()

    return (
        <div>
            {pagesData.length > 0 && (
                <div>
                    <h2>{pagesData[props.elementIndex].title}</h2>
                    <p>{pagesData[props.elementIndex].content}</p>
                </div>
            )}
            {pagesData.length === 0 && <p>Идет загрузка...</p>}
        </div>
    );
}

export default PageContentWithoutImage