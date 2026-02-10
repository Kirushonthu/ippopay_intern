console.log("swash");

// fetch("https://jsonplaceholder.typicode.com/users")

//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("HTTP Error: " + res.status);
//     }
//     return res.json();
//   })
//   .then((datas) => console.table(datas))
//   .catch((error) => console.log(error.message));

async function display() {
  try {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    console.table(data);

  } catch (error) {

    console.log(error.message);

  }
}

display()

async function postdata() {

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "kish",
        age: 22,
        userid: 7
      })
    })
    if (!res.ok) {
      throw new Error("HTTP Error: " + res.status);
    }

    const data = await res.json();
    console.table(data);
  } catch (e) {
    console.log("Error", e.message);

  }
}
postdata()