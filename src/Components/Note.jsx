import { useState } from "react";
import "./Note.css";

function Note({ title, date, content, color }) {

    const likeBtnClickHandler = () => {
        console.log("Button is clicked")
        Setlikes(likes + 1)
    }

    const [likes, Setlikes] = useState(0)
    return (
        <div className="note" style={{ backgroundColor: color }}>
            <div className="note-top">
                <span>{title}</span>
                <span>{date}</span>
            </div>
            <p>Likes: {likes}</p>
            <button className="like-button" onClick={likeBtnClickHandler}>Drop a "❤️"</button>
        </div>
    );
}

export default Note;