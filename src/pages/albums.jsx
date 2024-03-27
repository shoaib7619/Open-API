import Header from "./header"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect } from "react";
import { Roller } from "react-awesome-spinners";
import Footer from "./footer";

function Albums() {
    const [loading, setLoading] = React.useState(false);
    const [albums, setAlbums] = React.useState([]);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const comment = await fetch('https://jsonplaceholder.typicode.com/albums');
                const data = await comment.json();
                setAlbums(data);
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
            <div className="container mt-5">
                <h1 className="mt-3 text-center">Albums</h1>
                <div className="row">
                    {albums.map(album => (
                        <div className="col-md-4 mb-4" key={album.id}>
                            <Card  border="primary" style={{ width: '18rem' }}>
                                <Card.Header><span className="font-weight-bold">User ID:  </span>{album.userId}</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{album.title}</ListGroup.Item>
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

export default Albums
