
import useGetPagesData from "../utils/useGetPagesData"

const Main = ( {} ) => {

    const pagesData = useGetPagesData()

    return (
        <div>
            {pagesData.length > 0 && (
                <div>
                    <h2>{pagesData[0].title}</h2>
                    <p>{pagesData[0].content}</p>
                    <p className="page__main__promotion">Доступны консультации, стоимость - 2000 рублей в час.</p>
                </div>
            )}

            {pagesData.length === 0 && <p>Идет загрузка...</p>}
        </div>
    );
}

export default Main