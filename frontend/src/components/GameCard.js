import React from "react";
import {Card,Button} from "react-bootstrap";
import "../css/GameCard.css";


const GameCard = ({game}) => {
    //const max_text=200;
    return (
        <Card style={{ width: '18rem' }} className="text-center GameCard">
            <div className="cardImageDiv">
                <Card.Img variant="top" src={game.image_url} />
            </div>
            <Card.Body>
                <div className="cardTitleDiv">
                    <Card.Title className="align-bottom" >{game.name}</Card.Title>
                </div>
                {/*<div className="cardTextDiv">
                    <Card.Text className="cardText">{game.description_preview.slice(0,max_text)+ (game.description_preview.length>max_text?"...":"")}
                    </Card.Text>
                </div>*/}
                <Button variant="secondary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default GameCard;