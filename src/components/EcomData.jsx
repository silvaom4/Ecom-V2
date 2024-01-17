// import React from 'react'
import React, { useEffect,  useState } from 'react'

export default function EcomData() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:7075/usersData')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    }, [])

  
    return (
    <div>
        <h1>Hello from Ecom Data</h1>
        <table>
            <thead>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Phone Number</th>
            </thead>
            <tbody>
                {data.map((d, i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.first_name}</td>
                        <td>{d.last_name}</td>
                        <td>{d.gender}</td>
                        <td>{d.phone_number}</td>


                    </tr>
                ))}
            </tbody>
        </table>



    </div>
  )
}
