import React from "react";

const Card = (props) => {
    let today = new Date;
    var todayy = today.toLocaleDateString();
    var time = today.toLocaleTimeString();
    return (
        <div className="tc dib ma2 br3-l grow shadow-4" style={{ color: "red", minWidth: "22%", backgroundColor: "purple", minHeight: "300px" }}>
            <a href="#" style={{ textDecoration: "none" }}>
                <div>
                    <img src={`https://joeschmoe.io/api/v1/male/${props.name}`} alt="Logo" />
                    <h1 style={{ color: "white", whiteSpace: "nowrap" }}>Hi' {props.name}</h1>
                    <p style={{ color: "yellow", fontWeight: "bold" }} className="f3">I Am {props.p}</p>
                    <small style={{ color: "white" }} className="dib ma2">Date : {todayy}</small>
                    <small style={{ color: "white" }} className="dib ma2">Time : {time}</small>
                </div>
            </a>

        </div>
    )
}
export default Card;