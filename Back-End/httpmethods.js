console.log("hello")

// const url = "https://dummyjson.com/users/1"

// const userdata = fetch(url,{
//      method: "POST" ,
//      body: JSON.stringify({ name: "Kishore" }
// )})
fetch("https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=90.27&current_weather=true")
  .then(res => res.json())
  .then(data => console.log(data));
   
 // .then(res => res.json())
    // .then(data => console.log(data.address))
    // .catch(error => {
    //     console.error("data fetch failed", error.message);
    // })
