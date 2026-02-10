// const promise= getSubjects(1)

//  .then((sub) => {
//     console.log(sub)
//     return getmarks(sub.id);})

//  .then(mark=>console.log(mark))

async function display() {

    try {
        const sub = await getSubjects(1);
        const mark = await getmarks(sub.id);
        console.log("subject", sub)
        console.log("marks", mark);
    }
    catch (error) {
        console.log(error)
    }

}


display()


function getSubjects(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting subejects from database");
            resolve({ subject: ["tamil", "english", "maths", "science"], id: id });
        }, 2000)
    })
}


function getmarks(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting marks");
            resolve({
                marks: [80, 20, 4, 23, 4, 3, 2],
                id: id
            })
        }, 1000)
    })
}


// callback -> callback hell

//promises -> resolve reject

//async await to look like sync code