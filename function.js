students=[];

function submit(){
 Name_1=document.getElementById("Student1").value;
 Name_2=document.getElementById("Student2").value;
 Name_3=document.getElementById("Student3").value;
 Name_4=document.getElementById("Student4").value;
 students.push(Name_1);
 students.push(Name_2);
 students.push(Name_3);
 students.push(Name_4);
 console.log(students);

 document.getElementById("names").innerHTML=students;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sort(){
    students.sort();

    console.log(students);

    document.getElementById("names").innerHTML=students;
}