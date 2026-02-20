console.log("started")
axios.get("https://dummyjson.com/users")
    .then((res) => {
        console.table(res.data.users)
    })
    .catch((err) => {
        console.log(err.message)
    })




async function fectchdata() {
    try {
        const res = await axios.get("https://dummyjson.com/users")
        const firstnames=res.data.users.map(user => ({
            firstname: user.firstName,email: user.email,gender: user.gender
        }))
        console.table(firstnames)

    } catch (error) {
        console.log(error.message)
    }
}
fectchdata()


async function showtable() {
    try {
        const response= await axios.get("https://dummyjson.com/users")
        const users =response.data.users
        const tableBody = document.getElementById("tableBody")
        tableBody.innerHTML = "";

        users.forEach(user => {
            const row = document.createElement("tr");

            row.innerHTML = `
             <td class="border px-4 py-2">${user.id}</td>
             <td class="border px-4 py-2">${user.firstName}</td>
             <td class="border px-4 py-2">${user.email}</td>
             <td class="border px-4 py-2">${user.phone}</td>
             <td class="border px-4 py-2">${user.username}</td>
             <td class="border px-4 py-2">${user.password}</td>    
            `;

            tableBody.appendChild(row)})

    } catch (e) {
 console.log("Error ", e.message)
    }

}

showtable()