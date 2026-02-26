console.log("Student Management System")

const Students=[
    {name:"Kishore",id:1 ,Marks:70 ,attendence:"80%"},
    {name:"Swash",id:2 ,Marks:75 ,attendence:"70%"},
    {name:"Luffy",id:3 ,Marks:99 ,attendence:"50%"},
    {name:"Ace",id:4 ,Marks:95 ,attendence:"88%"}
]

function AddStudent(n,Marks,at) {
    const id=Students.length+1;
    const attend=at+"%";
    Students.push({name:n,
        id:id,
        Marks:Marks,
        attendence:attend});
        console.log(Students)
}

function FindStudent(fid){
   const found = Students.find((n)=>n.id===fid); 
    if(!found){
        console.log("Given id is Invalid")
        return;}
     console.log(found);
}

function ViewStudents(){
     Students.forEach((stu)=>console.log(stu));
}

function DeleteStudent(idd){
    const index=Students.findIndex((st)=>st.id===idd);
    // const FindName=Students.find((f)=>f.id===idd);
    const FindName =Students[index];
    if(index===-1) {
        console.log("id is invalid") 
    return;}
     Students.splice(index,1);
     console.log(`student with id ${idd} ${FindName.name} Deleted`)

}


function AverageMarks(){
    if(Students.length===0){
        return 0;
    }
    const Mapdata=Students.reduce((sum,st)=>{
         return sum+st.Marks;
    },0);

   console.log("Average Mark is :",Mapdata/Students.length);
    
}

function Findtoper(){
     if (!Students.length) {
        console.log("Add a student");
        return;
    }
    let top=0;
    Students.forEach((f)=>{
        if(f.Marks>top){
            top=f.Marks;
        }
    })
    const Topper=Students.find((f)=>f.Marks===top); 
    console.log(`Topper is ${Topper.name} with ${Topper.Marks} Marks`);
}

AddStudent("Sabo",100,67)
ViewStudents()
FindStudent(3)
AverageMarks()
DeleteStudent(1)
Findtoper()

