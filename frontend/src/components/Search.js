import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';


const Search = ({api_clientid,setGames}) => {

    const [term,setTerm] = useState('');

    const filterGameData=(data)=>{
        return data.filter((elem)=>elem.type==='game');
    }

    const handleSubmit= (e)=> {
        setGames([]);
        e.preventDefault();
        fetch(`https://api.boardgameatlas.com/api/search?client_id=${api_clientid}&name=${term}&limit=10000&fields=name,type,image_url`)
            .then((response)=>response.json())
            .then((data)=>{
                //console.log(data)
                //console.log(filterGameData(data.games));
                setGames(filterGameData(data.games));
            })
            .catch((error)=>{
                console.log(error);
            });
            setTerm('');
    }
    
    return (
        <Container className='mt-4 mb-4'>
            <Row className='justify-content-center'>
                <Col xs={12} md={8} lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Row >
                            <Col xs={8} sm={9}>
                                <Form.Control id='searchInput' type='text' placeholder='Search images...' value={term} onChange={(e)=> setTerm(e.target.value)}>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Button type='submit'>Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;