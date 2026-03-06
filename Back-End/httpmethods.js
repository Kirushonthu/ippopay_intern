console.log("hello")

const url = "https://dummyjson.com/users/1"

const userdata = fetch(url,{
     method: "POST" ,
     body: JSON.stringify({ name: "Kishore" }
)})
   
 // .then(res => res.json())
    // .then(data => console.log(data.address))
    // .catch(error => {
    //     console.error("data fetch failed", error.message);
    // })
