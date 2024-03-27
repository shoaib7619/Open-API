import Header from "./header";
import Table from 'react-bootstrap/Table';
import React, { useEffect} from "react";
import { Roller } from "react-awesome-spinners";

function Users() {
    const [loading, setLoading] = React.useState(false);
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
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
                <h1 className="mt-3 text-center">User Data</h1>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th><span className="font-weight-bold">Address: </span>Street</th>
                            <th><span className="font-weight-bold">Address: </span>Suite</th>
                            <th><span className="font-weight-bold">Address: </span>City</th>
                            <th><span className="font-weight-bold">Address: </span>Zipcode</th>
                            <th><span className="font-weight-bold">Geo: </span>Lat</th>
                            <th><span className="font-weight-bold">Geo: </span>Lng</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th><span className="font-weight-bold">Company: </span>Name</th>
                            <th><span className="font-weight-bold">Company: </span>CatchPhrase</th>
                            <th><span className="font-weight-bold">Company: </span>Bs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.street}</td>
                                <td>{user.address.suite}</td>
                                <td>{user.address.city}</td>
                                <td>{user.address.zipcode}</td>
                                <td>{user.address.geo.lat}</td>
                                <td>{user.address.geo.lng}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td>
                                <td>{user.company.catchPhrase}</td>
                                <td>{user.company.bs}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Users;
