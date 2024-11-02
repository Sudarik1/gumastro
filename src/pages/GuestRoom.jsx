
import { useState, useEffect } from "react";

import useGetPagesData from "../utils/useGetPagesData"
import { comment } from "postcss";

const GuestRoom = ( {} ) => {

    const pagesData = useGetPagesData()

    const [commentsData, setCommentsData] = useState([])
    const [userName, setUserName] = useState('')
    const [comment, setComment] = useState('')

    useEffect ( ()=>{
        const fetchCommentsData = async () => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/comment/')
                const data = await res.json()
                setCommentsData(data)
            }
            catch (error) {
                console.log('Error fetching notes', error)
            }
        }
            
        fetchCommentsData()
    }, [])

    const addCommentHandler = (e, userName, comment) => {

        e.preventDefault();
        const confirm = window.confirm('Уверены, что хотите оставить этот комментарий?')
        if(!confirm){
            return
        }

        const addComment = async (userName, comment) => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/comment/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userName: userName,
                        comment: comment                    
                    })
                })
            }
            catch (error) {
                console.log('Возникла ошибка во время обновления названия заметки', error)
            }
        }

        addComment(userName, comment)
        setUserName('')
        setComment('')
    }

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
                    <form onSubmit={ (e) => addCommentHandler(e) } noValidate>
                        <div>                              
                            <div>
                                <label htmlFor="guestRoom__userComment" className="text--increase-contrast"></label>
                                <br></br>
                                <textarea 
                                className="page__guest-room__input__comment" 
                                name="guestRoom__userComment" 
                                placeholder="Поделитесь своими впечатлениями здесь" 
                                onChange={(e) => setComment(e.target.value)}
                                required
                                >
                                </textarea>
                                <br></br>
                            </div>
                            <div>
                                <label htmlFor="guestRoom__userName" className="text--increase-contrast"></label>
                                <input 
                                type="text" 
                                className="page__guest-room__input__name" 
                                name="guestRoom__userName" 
                                placeholder="Ваше имя" 
                                onChange={(e) => setUserName(e.target.value)}
                                required
                                >
                                </input>
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

export default GuestRoom