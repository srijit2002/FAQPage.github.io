import React from "react";
import Card from "./Card";
import data from "./data";


const Container = () => {
    return (
        <div className="container">
            <h1 className="container__heading">FAQ</h1>
            <div className="card__body">
                {
                    data.map(question=>{
                        return <Card key={question.id} question={question}/>
                    })
                    
                }
            </div>
        </div>
    )

}
export default Container;