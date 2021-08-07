import React from "react";
import Card from "./Card";

const Cards = () => {
    var cardarray = [
        {
            id: "1",
            name: "Arsl Thaheem",
            p: "Developer"
        },
        {
            id: "2",
            name: "Owais Rajpute",
            p: "MLT"
        },
        {
            id: "3",
            name: "Farhan Thaheem",
            p: "Student"
        },
        {
            id: "4",
            name: "Abdullah Rajpute",
            p: "Student"
        }
    ]
    let newarray = cardarray.map((unknownName, i) => {
        return <Card name={cardarray[i].name} p={cardarray[i].p} id={cardarray[i].id} ></Card>
    });
    return (
        <div>
            <h1 className="tc" style={{ color: 'purple' }}>Images Avatar With Name :) </h1>
            <div className="flex justify-center flex-wrap mt4">
                {newarray}
            </div>
            <a className="mt4 ml5 db" href="https://www.facebook.com/ThaheemSahab786" target="_blank">Facebook Page</a>
        </div>
    )
}
export default Cards;