
import { useState, useEffect } from "react";

import useGetPagesData from "../utils/useGetPagesData"

const Main = ( {} ) => {

    const pagesData = useGetPagesData()

    const [commentsData, setCommentsData] = useState([])

    useEffect ( ()=>{
        const fetchCommentsData = async () => {
            try {
                const res = await fetch('http://localhost:8000/api/comment/')
                const data = await res.json()
                setCommentsData(data)
            }
            catch (error) {
                console.log('Error fetching notes', error)
            }
        }
            
        fetchCommentsData()
    }, [])

    return (
        <div className="page__guest-room">
            {pagesData.length > 0 && (
                <>
                    <h2>{pagesData[14].title}</h2>
                    <h3 className="page__guest-room__header">Комментарии пользователей до Вас</h3>
                    <div className="page__guest-room__comments">
                        {commentsData.map( (comment) => (
                            <div key={comment._id}>
                                <h3 className="page__guest-room__comment__user-name">{comment.userName}</h3>
                                <p className="page__guest-room__comment__user-comment">{comment.comment.replace(/\n/g, '<br>')}</p>
                            </div>
                        ))}
                    </div>
                    <form noValidate>
                        <div>                              
                            <div>
                                <label htmlFor="guestRoom__userComment" className="text--increase-contrast"></label>
                                <br></br>
                                <textarea className="page__guest-room__input__comment" name="guestRoom__userComment" placeholder="Поделитесь своими впечатлениями здесь" required></textarea>
                                <br></br>
                            </div>
                            <div>
                                <label htmlFor="guestRoom__userName" className="text--increase-contrast"></label>
                                <input type="text" className="page__guest-room__input__name" name="guestRoom__userName" placeholder="Ваше имя" required></input>
                            </div>                      
                        </div>
                    
                        <div>
                            <button type="submit" className="pages__btn">Оставить комментарий</button>
                        </div>
                    </form>
                </>
            )}

            {pagesData.length === 0 && <p>Идет загрузка...</p>}
        </div>
    );
}

export default Main