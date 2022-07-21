import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';


const Search = ({api_clientid}) => {

    const [term,setTerm] = useState('');
    
    const handleSubmit= (e)=> {
        e.preventDefault();
        fetch(`https://api.boardgameatlas.com/api/search?client_id=${api_clientid}&name=${term}`)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data)
            })
            .catch((error)=>{
                console.log(error)
            });
            setTerm('');
    }
    
    return (
        <Container className='mt-4'>
            <Row className='justify-content-center'>
                <Col xs={12} md={8} lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Row >
                            <Col  xs={10}>
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