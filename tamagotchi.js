function Tamagotchi()
{
	this.hungry = false;
	this.sick = false;
	this.age = 0;
	this.feed = function()
	{
		if(this.hungry)
		{
			console.log("That was yummy!");
			this.hungry = false;
		}
		else
		{
			console.log("No thanks, I'm full.");
			this.hungry = true;
		}
	};
	this.sleep = function()
	{
		console.log("zzzzzz");
	};
	this.medicate= function()
	{
		if(this.sick)
		{
			console.log("I feel much better!")
			this.sick = false;
		}
		else
		{
			console.log("No thanks, I feel fine.");
			this.sick = true;
		}
	};
	this.increaseAge = function()
	{
		this.age = this.age + 1;
		console.log("Happy Birthday to me! I am " + this.age + " years old!");
	};
}

var dog = new Tamagotchi();
dog.bark = function()
{
	console.log("ruff ruff");
}
dog.goOutside = function()
{
	console.log("I own that tree now!");
}
var cat = new Tamagotchi();
cat.meow = function()
{
	console.log("meow");
}
cat.scratchThatChair = function()
{
	console.log("Stop scratching that chair!");
}

dog.feed();
dog.feed();
dog.sleep();
dog.medicate();
dog.medicate();
dog.increaseAge();
dog.increaseAge();
dog.increaseAge();
dog.increaseAge();
dog.bark();
dog.goOutside();
cat.feed();
cat.feed();
cat.sleep();
cat.medicate();
cat.medicate();
cat.increaseAge();
cat.increaseAge();
cat.increaseAge();
cat.increaseAge();
cat.meow();
cat.scratchThatChair();
