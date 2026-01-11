// for

for (let index = 0; index < 10; index++) {
    const element = index;

    if(index == 5){
      //  console.log("5 i number");
    }
    //console.log(element);
}

for (let i = 0; i < 10; i++) {
    //console.log(`Outer Loop Value ${i}`);
    
    for (let j = 0; j <= 10 ; j++) {
        //console.log(`Inner Loop Value ${j} and inner Loop ${i}`);
       // console.log(i + '*' + j + '=' + i * j);
    }
    
}

let myarray = ["Thor", "Flash", "Batman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
    
}