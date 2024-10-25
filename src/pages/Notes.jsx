
import { useState, useEffect } from "react"

import useGetPagesData from "../utils/useGetPagesData"

const Notes = () => {

    const pagesData = useGetPagesData()
    
    const [notesData, setNotesData] = useState([])

    const [ selectedNote, setSelectedNote ] = useState(null)

    useEffect ( ()=>{
        const fetchNotesData = async () => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/note/')
                const data = await res.json()
                setNotesData(data)
            }
            catch (error) {
                console.log('Error fetching notes', error)
            }
        }
            
        fetchNotesData()
    }, [])

    const handleNoteClick = (note) => {
        setSelectedNote(note);
    };
    
    const handleBackToNotes = () => {
        setSelectedNote(null);
    };

    const renderNoteBodyWithBreaks = (body) => {
        return { __html: body.replace(/\n/g, '<br>') };
    };

    return(
        <div>
            {pagesData.length > 0 ? 
            (
                <>
                    <h2>{pagesData[12].title}</h2>
                    { !selectedNote ? (
                        (notesData.length > 0 ? 
                            (
                                notesData.map(note => (
                                    <div className="page__notes--link-style" key={note._id}> 
                                        <h3 className="font-weight-normal" >
                                            <a href="#" onClick={() => handleNoteClick(note)}>
                                                {note.title}
                                            </a>
                                        </h3> 
                                    </div>
                                ))
                            ) : 
                            (
                                <p>Loading notes...</p>
                            ))
                    ) : 
                    (
                        <div className="page__notes__full-note">
                                <h3>{selectedNote.title}</h3>
                                <p dangerouslySetInnerHTML={renderNoteBodyWithBreaks(selectedNote.body)}></p>
                                <button className="pages__btn" onClick={handleBackToNotes}>Вернуться ко всем заметкам</button>
                        </div>
                    )
                }
                </>
            ) : 
            (
                <p>Загрузка страницы...</p>
            )}
        </div>
    )

}

export default Notes