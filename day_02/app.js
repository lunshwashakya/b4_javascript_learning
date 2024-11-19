const nameOfDay = "Monday";

if (nameOfDay === "Monday") {
    console.log("Today is Monday");
    console.log("Today is weekday!");
}
else if (nameOfDay === "Tuesday") {
    console.log("Today is Tuesday");
    console.log("Today is weekday!");
}
else if (nameOfDay === "Wednesday") {
    console.log("Today is Wednesday");
    console.log("Today is weekday!");
}
else if (nameOfDay === "Thursday") {
    console.log("Today is Thursday");
    console.log("Today is weekday!");
}
else if (nameOfDay === "Friday") {
    console.log("Today is Friday");
    console.log("Today is weekday!");
}
else {
    console.log("Today is weekend!");
}
    
switch(nameOfDay){
    case "Monday":
        console.log("Today is Monday");
        console.log("Today is weekday!");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        console.log("Today is weekday!");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        console.log("Today is weekday!");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        console.log("Today is weekday!");
        break;
    case "Friday":
        console.log("Today is Friday");
        console.log("Today is weekday!");
        break;
    default:
        console.log("Today is weekday!");
    }
    
    switch(nameOfDay){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log(`Today is ${nameOfDay}`);
        console.log("Today is weekday!");
        break;
    default:
        console.log("Today is weekend!");
}