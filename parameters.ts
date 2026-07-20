// Default Parameters

function greetings(msg : String = "Namaskaram!"): void{
    console.log(msg);
}
greetings();
greetings("Hello !");

// Optional Parameters

function Welcome(name : String, greet? : String): void{
    console.log(name + " " + greet);
}
Welcome("Indhu");
Welcome("Indhu", "HowRU");

// If the user does not provide that argument, TypeScript automatically uses the default.
// TypeScript treats optional parameters as implicitly typed as undefined, so you must check if they exist before using them.