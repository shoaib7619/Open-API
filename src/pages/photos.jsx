import Header from "./header"
import Card from 'react-bootstrap/Card';
import React, { useEffect } from "react";
import { Roller } from "react-awesome-spinners";
import Footer from "./footer";

function Photos() {
    const [loading, setLoading] = React.useState(false);
    const [photos, setPhotos] = React.useState([]);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const comment = await fetch('https://jsonplaceholder.typicode.com/photos');
                const data = await comment.json();
                setPhotos(data);
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
                <h1 className="mt-3 text-center">Photos</h1>
                <div className="row">
                    {photos.map(photo => (
                        <div className="col-md-4 mb-4" key={photo.id}>
                            <Card  border="primary" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={photo.url} />
                            <Card.Body>
                                <Card.Text> <span className="font-weight-bold">Title: </span>{photo.title}</Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Photos