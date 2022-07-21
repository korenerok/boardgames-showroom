import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const handleSubmit= (e)=> {
    e.preventDefault();
    console.log(e.target.searchInput.value);
}

const Search = () => {

    const [term,setTerm] = useState('');
    
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