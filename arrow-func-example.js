var names = ["Lorem","Ipsum","Dolor"];

names.forEach(function(name){
    console.log("forEach", name);
});

names.forEach((name) =>{
    console.log("arrowFunc", name);
});

names.forEach((name) => console.log("arrowFunc2", name));

var returnMe = (name) => name + "!";
console.log(returnMe("SS"));

var person = {
    name: "Ann",
    greet: function(){
        names.forEach((name)=>{
            console.log(this.name + " says hi to" + name)
        });
    }
}

person.greet();

function add(a,b){
    return a+b;
}

var addStatement = (a,b) => {
    return a + b;
}

var addExpression = (a,b) => a + b;

console.log(addStatement(100,100));
console.log(addStatement(200,200));