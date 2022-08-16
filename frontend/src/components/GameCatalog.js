import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import GameCard from "./GameCard";

const GameCatalog= ({games})=> {
    return (
        <Container>
            <Row xs={1} md={2} lg={3} xxl={4}>
                {games.map((game,index)=>(
                <Col key={index} className="mb-4">
                    <GameCard game={game} ></GameCard>
                </Col>
                ))}
            </Row>
        </Container>
    );
}

export default GameCatalog;