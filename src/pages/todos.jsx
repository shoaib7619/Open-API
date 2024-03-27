import Header from "./header"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect } from "react";
import { Roller } from "react-awesome-spinners";
import Footer from "./footer";

function Todos() {
    const [loading, setLoading] = React.useState(false);
    const [todos, setTodos] = React.useState([]);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const comment = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await comment.json();
                setTodos(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };
        fetchData();
    }, [])

    return (
        <>
            <Header />
            {loading && (
                <div className="spinner-overlay">
                    <Roller />
                </div>
            )}
            <div className="container mt-5 mb-5">
                <h1 className="mt-3 text-center">Todos</h1>
                <div className="row">
                    {todos.map(todo => (
                        <div className="col-md-4 mb-4" key={todo.id}>
                            <Card border="primary" style={{ width: '18rem' }}>
                                <Card.Header><span className="font-weight-bold">User ID:  </span>{todo.userId}</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{todo.title}</ListGroup.Item>
                                    <ListGroup.Item><span className="font-weight-bold">Status: </span>{todo.completed ? "Complete" : "Not Complete"}</ListGroup.Item>
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

export default Todos
