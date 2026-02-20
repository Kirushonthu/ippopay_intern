import React from 'react'

function User() {

  const user = [
    { name: "kish", age: 17, ph: 1234444 },
    { name: "vijay", age: 17, ph: 123444 },
    { name: "harsh", age: 17, ph: 123444 },

  ]

  return (
    <>
      <h1>array of objects</h1>
      {user.map((ele, index) => (
        <div key={index}>
          <h2>{ele.name}</h2>
          <h2>{ele.age}</h2>
          <h2>{ele.ph}</h2>
        </div>
      ))}
    </>
  )
}

export default User