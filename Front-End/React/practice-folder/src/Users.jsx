import React from 'react'

function Users() {
    const users = {
        user1: { name: "Kishore", age: 21 },
        user2: { name: "Arun", age: 22 },
        user3: { name: "Vijay", age: 23 }
    };

    return (
        <>
        <h1>objects of object</h1>
            {/* {Object.entries(users).map(([key,user],index)=>(
        <div key={index}>
            <h2>{user.name}</h2>
        </div>
        ))}
       */}

            {Object.values(users).map((user, index) => (
                <div key={index}>
                    <h2>{user.name}</h2>
                </div>
            ))}


        </>
    )
}

export default Users