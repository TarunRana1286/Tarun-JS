let a =300

if (true) {
    let a = 10
    var b = 20
    const c = 30
    //console.log("INNER :", a);
    
}

//console.log(a);
//console.log(c);
//console.log(b); // Avoid using var as U can see var can be used outside the scope which should not happn

function one(){
    const username ="Tarun"

    function two(){

        const website ="github"

        console.log(username);
        

    }
    //console.log(website);
    two()
}

//one()

if(true){

    const username="Tarun"
    if(username ==="Tarun"){
        const website=" Github"
        //console.log(username + website);
    }
    //console.log(website);
    
}
//console.log(username);


//++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++
 
console.log(addone(5));

function addone (num){
 return num + 1
}

//addvalue(5)  when you access expression wise function as below u can not declare function above that you must use after declaration
const addvalue = function(num){
    return num + 2
}

addvalue(5)