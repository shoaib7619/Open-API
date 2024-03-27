import Header from "./header"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect } from "react";
import { Roller } from "react-awesome-spinners";
import Footer from "./footer";

function Comments() {
    const [loading, setLoading] = React.useState(false);
    const [comments, setComments] = React.useState([]);


    useEffect (()=>{
        const fetchData = async () => {
            setLoading(true)
            try {
                const comment = await fetch('https://jsonplaceholder.typicode.com/comments');
                const data = await comment.json();
                setComments(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };
        fetchData();
    },[])

    return (
        <>
            <Header />
            {loading && (
                <div className="spinner-overlay">
                    <Roller />
                </div>
            )}
            <div className="container mt-5">
                <h1 className="mt-3 text-center">Comments</h1>
                <div className="row">
                    {comments.map(comment => (
                        <div className="col-md-4 mb-4" key={comment.id}>
                            <Card  border="primary"style={{ width: '18rem' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><span className="font-weight-bold">Name: </span>{comment.name}</ListGroup.Item>
                                    <ListGroup.Item><span className="font-weight-bold">Email: </span>{comment.email}</ListGroup.Item>
                                    <ListGroup.Item><span className="font-weight-bold">Comment: </span>{comment.body}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Comments
