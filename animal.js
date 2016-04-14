function Animal(name, isSleepy, whatNoise){
 this.name = name;
 this.sleepy = isSleepy;
 this.noise = whatNoise;
 this.makeNoise = function(){
   if (this.sleepy === false){
     console.log(this.name + " says " + this.noise);  
   }
   else{
       console.log(this.name + " is sleepy");
   }
 }
}

var dog = new Animal("ben", false, "woof");
console.log(Animal.name);
console.log(Animal.sleepy);
console.log(Animal.noise);