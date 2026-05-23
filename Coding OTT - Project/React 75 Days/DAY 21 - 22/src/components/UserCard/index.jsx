import React, { useEffect, useState } from "react";
import "./usercard.css";

const UserCard = () => {

    const apiURL = "https://jsonplaceholder.typicode.com/users";

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const fetchUser = async () => {

            const response = await fetch(apiURL);
            const data = await response.json();

            try {

                setUsers(data)

            } catch (error) {

                alert(error);

            } finally {

                setLoading(false)
            }

        }

        fetchUser();

    }, []);

    return (

        <div className="container">

            <h1 className="title">User Details</h1>

            {loading &&
                <div className="loader-container">
                    <div className="spinner"></div>
                    <p>Loading...</p>
                </div>
            }

            <div className="card-wrapper">

                {users.map((data, index) => (

                    <div className="user-card" key={index}>

                        <div className="card-top">

                            <div className="avatar">
                                {data.name.charAt(0)}
                            </div>

                            <div>
                                <h2>{data.name}</h2>
                                <p className="username">@{data.username}</p>
                            </div>

                        </div>

                        <div className="info">

                            <p>
                                <i className="ri-mail-line"></i>
                                <span>{data.email}</span>
                            </p>

                            <p>
                                <i className="ri-phone-line"></i>
                                <span>{data.phone}</span>
                            </p>

                            <p>
                                <i className="ri-global-line"></i>
                                <span>{data.website}</span>
                            </p>

                            <p>
                                <i className="ri-building-line"></i>
                                <span>{data.company.name}</span>
                            </p>

                            <p>
                                <i className="ri-map-pin-line"></i>
                                <span>
                                    {data.address.street}, {data.address.city}
                                </span>
                            </p>

                            <p>
                                <i className="ri-road-map-line"></i>
                                <span>{data.address.zipcode}</span>
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default UserCard;