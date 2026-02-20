async function users() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!res.ok) throw new console.error((res.Status));

        const users = await res.json();
        const tableBody = document.getElementById("tableBody")
        tableBody.innerHTML = "";

        users.forEach(user => {
            const row = document.createElement("tr");

            row.innerHTML = `
             <td class="border px-4 py-2">${user.id}</td>
             <td class="border px-4 py-2">${user.name}</td>
             <td class="border px-4 py-2">${user.email}</td>
             <td class="border px-4 py-2">${user.phone}</td>
             <td class="border px-4 py-2">${user.company.name}</td>
             <td class="border px-4 py-2">${user.address.city}</td>    
            `;

            tableBody.appendChild(row);
        });


    } catch (e) {
        console.log("Error ", e.message)
    }
}

users()