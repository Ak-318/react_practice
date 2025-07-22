import React, { useState, useEffect } from 'react';

const API = "https://jsonplaceholder.typicode.com/comments"


function FetchDetails() {

    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("")

    const getData = async () => {
        const userData = await fetch(API);
        const details = await userData.json();
        setData(details);
    }

    useEffect(() => {
        getData();
    }, [])

    const handleOnChange = (e) => {
        const searchData = e.target.value
        setSearchValue(searchData)
    }

    const finalData = searchValue ? data.filter((user) => user.email.toLowerCase().includes(searchValue.toLowerCase()) || user.name.toLowerCase().includes(searchValue.toLowerCase()) || user.body.toLowerCase().includes(searchValue.toLowerCase())) : data

    return (
        <div>
            <h1>User Data Table</h1>
            <input type="text" placeholder='Email Search' onChange={handleOnChange} />
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {finalData.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.body}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )

}

export default FetchDetails;
