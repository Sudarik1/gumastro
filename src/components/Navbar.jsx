
import useGetPagesData from "../utils/useGetPagesData"

import LinkComponent from "./LinkComponent"

const Navbar = () => {

    const pagesData = useGetPagesData()

    if (!pagesData || pagesData.length === 0) {
        return <div>Загрузка...</div>;
    }

    return(
        <section className="page__nav"> 
            <nav className="page__nav__links">
                <LinkComponent endpoint="/" text={pagesData[0].title}></LinkComponent>
                <LinkComponent endpoint="/birthdayMap" text={pagesData[1].title}></LinkComponent>
                <LinkComponent endpoint="/predictionAstrology" text={pagesData[2].title}></LinkComponent>
                <LinkComponent endpoint="/relationshipAstrology" text={pagesData[3].title}></LinkComponent>
                <LinkComponent endpoint="/karma" text={pagesData[4].title}></LinkComponent>
                <LinkComponent endpoint="/medical" text={pagesData[5].title}></LinkComponent>
                <LinkComponent endpoint="/election" text={pagesData[6].title}></LinkComponent>
                <LinkComponent endpoint="/relocate" text={pagesData[7].title}></LinkComponent>
                <LinkComponent endpoint="/harary" text={pagesData[8].title}></LinkComponent>
                <LinkComponent endpoint="/profession" text={pagesData[9].title}></LinkComponent>
                <LinkComponent endpoint="/rectification" text={pagesData[10].title}></LinkComponent>
                <LinkComponent endpoint="/poetry" text={pagesData[11].title}></LinkComponent>
                <LinkComponent endpoint="/notes" text={pagesData[12].title}></LinkComponent>
                <LinkComponent endpoint="/astroleger" text={pagesData[13].title}></LinkComponent>
                <LinkComponent endpoint="/guestRoom" text={pagesData[14].title}></LinkComponent>
            </nav>
        </section>
    )
}

export default Navbar