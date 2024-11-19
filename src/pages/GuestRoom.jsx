import { useState, useEffect } from "react";

import useGetPagesData from "../utils/useGetPagesData";

const GuestRoom = () => {
    const pagesData = useGetPagesData();

    const [commentsData, setCommentsData] = useState([]);
    const [userName, setUserName] = useState("");
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchCommentsData = async () => {
            try {
                const res = await fetch("https://gumastro-server.onrender.com/api/comment/");
                const data = await res.json();
                setCommentsData(data);
            } catch (error) {
                console.log("Error fetching notes", error);
            }
        };

        fetchCommentsData();
    }, []);

    const validateInputs = () => {
        const newErrors = {};

        if (!userName.trim()) {
            newErrors.userName = "Имя обязательно для заполнения.";
        } else if (userName.trim().length < 2) {
            newErrors.userName = "Имя должно содержать минимум 2 символа.";
        }

        if (!comment.trim()) {
            newErrors.comment = "Комментарий обязателен для заполнения.";
        } else if (comment.trim().length < 10) {
            newErrors.comment = "Комментарий должен содержать минимум 10 символов.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sanitizeComment = (input) => {
        return input.replace(/<[^>]*>?/g, ""); 
    };
    

    const addCommentHandler = (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        const sanitizedComment = sanitizeComment(comment);

        const confirm = window.confirm("Уверены, что хотите оставить этот комментарий?");
        if (!confirm) {
            return;
        }

        const addComment = async (userName, comment) => {
            try {
                const res = await fetch("https://gumastro-server.onrender.com/api/comment/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userName: userName,
                        comment: comment,
                    }),
                });

                if (!res.ok) {
                    throw new Error("Ошибка при отправке комментария.");
                }
                
                const data = await res.json();
                setCommentsData((prev) => [...prev, data]);
            } catch (error) {
                console.log("Возникла ошибка во время обновления комментария", error);
            }
        };

        addComment(userName, comment);
        setUserName("");
        setComment("");
        setErrors({}); 
    };

    return (
        <div className="page__guest-room">
            {pagesData.length > 0 && (
                <>
                    <h2>{pagesData[14].title}</h2>
                    <h3 className="page__guest-room__header">Комментарии пользователей до Вас</h3>
                    <div className="page__guest-room__comments">
                        {commentsData.map((comment) => (
                            <div key={comment._id}>
                                <h3 className="page__guest-room__comment__user-name">
                                    {comment.userName}
                                </h3>
                                <p
                                    className="page__guest-room__comment__user-comment"
                                    dangerouslySetInnerHTML={{
                                        __html: comment.comment.replace(/\n/g, "<br>"),
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <form onSubmit={addCommentHandler} noValidate>
                        <div>
                            <div>
                                <label
                                    htmlFor="guestRoom__userComment"
                                    className="text--increase-contrast"
                                ></label>
                                <br />
                                <textarea
                                    className="page__guest-room__input__comment"
                                    name="guestRoom__userComment"
                                    placeholder="Поделитесь своими впечатлениями здесь"
                                    onChange={(e) => setComment(e.target.value)}
                                    value={comment}
                                    required
                                ></textarea>
                                {errors.comment && (
                                    <p className="error-message">{errors.comment}</p>
                                )}
                                <br />
                            </div>
                            <div>
                                <label
                                    htmlFor="guestRoom__userName"
                                    className="text--increase-contrast"
                                ></label>
                                <input
                                    type="text"
                                    className="page__guest-room__input__name"
                                    name="guestRoom__userName"
                                    placeholder="Ваше имя"
                                    onChange={(e) => setUserName(e.target.value)}
                                    value={userName}
                                    required
                                />
                                {errors.userName && (
                                    <p className="error-message">{errors.userName}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="pages__btn">
                                Оставить комментарий
                            </button>
                        </div>
                    </form>
                </>
            )}

            {pagesData.length === 0 && <p>Идет загрузка...</p>}
        </div>
    );
};

export default GuestRoom;
