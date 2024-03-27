import React, { useEffect } from "react";
import { Roller } from "react-awesome-spinners";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import "../App.css"
import Header from './header';
import Footer from "./footer";

function Posts() {
    const [loading, setLoading] = React.useState(false);
    const [posts, setPosts] = React.useState([]);


    useEffect(() =>{
        const fetchData = async () => {
            setLoading(true);
            try {
                const post = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await post.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <>
        <Header />
        {loading && (
                <div className="spinner-overlay">
                    <Roller />
                </div>
            )}
            <div className="container mt-5">
            <h1 className="mt-3 text-center">Posts</h1>
            <div className="row">
                {posts.map(post => (
                    <div className="col-md-4 mb-4" key={post.id}>
                        <Card  border="primary">
                        <Card.Header><span className="font-weight-bold">Title:  </span>{post.title}</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{post.body}</ListGroup.Item>
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

export default Posts
