const simpsonsName=document.getElementById("simspson-name");
const simpsonSECONDname=document.getElementById("simspson-secondname");
const simpsonsEdad=document.getElementById("edad");
const simpsonsLast=document.getElementById("apellido");
const cumple1=document.getElementById("cumple1");
const descripcion1=document.getElementById("descripcion1");


const simname2=document.getElementById("name2");
const simsecond2=document.getElementById("secondname2");
const simedad2=document.getElementById("edad2");
const trabajo2=document.getElementById("job2");
const simapellido2=document.getElementById("apellido2");
const cumple2=document.getElementById("cumple2");
const descripcion2=document.getElementById("descripcion2");

const nombre3=document.getElementById("name3");
const secondName3=document.getElementById("second3");
const simapellido3=document.getElementById("apellido3");
const simedad3=document.getElementById("edad3");
const trabajo=document.getElementById("job3");
const descripcion3=document.getElementById("descripcion3");
const cumple3=document.getElementById("cumple3");


const nombre4=document.getElementById("name4");
const secondName4=document.getElementById("second4");
const simapellido4=document.getElementById("apellido4");
const simedad4=document.getElementById("edad4");
const descripcion4=document.getElementById("descripcion4");
const cumple4=document.getElementById("cumple4");

const simpsonsURL='https://localhost:5001/simpsons/Character';

let getSimpsonData=async()=>{
    const response=await fetch(`${simpsonsURL}/1`);
    const simpsons=await response.json();
    console.log(simpsons);
    const{firstName,secondName,age,lastName, description, birthDate}=simpsons;
    simpsonsName.innerText=firstName;
    simpsonSECONDname.innerText=secondName;
    simpsonsEdad.innerText=age;
    simpsonsLast.innerText=lastName;
    cumple1.innerText=birthDate;
    descripcion1.innerText=description;
  
};

getSimpsonData();



let getSimpsonData2= async()=>{
    const response=await fetch (`${simpsonsURL}/0`);
    const simpsons=await response.json();
    console.log(simpsons);
    const{firstName,secondName,age,job,lastName,birthDate, description}=simpsons;

    job2.innerText=job;
    simname2.innerText=firstName;
    simsecond2.innerText=secondName;
    simedad2.innerText=age;
    simapellido2.innerText=lastName;
    cumple2.innerText=birthDate;
    descripcion2.innerText=description;
    
    
};

getSimpsonData2();




let getSimpsonData3= async()=>{
    const response=await fetch (`${simpsonsURL}/2`);
    const simpsons=await response.json();
    console.log(simpsons);
    const{firstName, secondName, lastName, age, job, description, birthDate}=simpsons;
    nombre3.innerText=firstName;
    second3.innerText=secondName;
    simapellido3.innerText=lastName;
    simedad3.innerText=age;
    trabajo.innerText=job;
    descripcion3.innerText=description;
    cumple3.innerText=birthDate;

};
getSimpsonData3();



let getSimpsonData4= async()=>{
    const response=await fetch (`${simpsonsURL}/3`);
    const simpsons=await response.json();
    console.log(simpsons);
    const{firstName, secondName, lastName, age, description, birthDate}=simpsons;
    nombre4.innerText=firstName;
    second4.innerText=secondName;
    simapellido4.innerText=lastName;
    simedad4.innerText=age;
    descripcion4.innerText=description;
    cumple4.innerText=birthDate;

};
getSimpsonData4();


