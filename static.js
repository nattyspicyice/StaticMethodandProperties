class Governor {
    constructor(power, authority, leader){
       this.power = power;
       this.authority = authority;
       this.leader = leader; 
    }
   canVeto(){
    console.log("Due to he Governor's level of " + this.power + ", he has vetoed this bill.");
    return this;
   } 
   canPropose(){
    console.log("Due to the Governor's level of " + this.authority + ", he has proposed this bill.");
    return this;
   }
   canPass(){
    console.log("Due to he Governor's level of " + this.leader + ", he has passed this bill.");
    return this;
   }
}

const governor = new Governor("power", "authority", "leadership");

governor.canVeto();
governor.canPropose();
governor.canPass();

class Person {
    constructor(age, personality, height){
        this.age = age;
        this.personality = personality;
        this.height = height;
    }
    canHangOut(personName){
        console.log(`${personName} is`, this.age, `and wants to hangout!`);
    }
    canTalkOnThePhone(personName){
        console.log(`${personName} is`, this.personality, `and wants to talk on the phone!`);
    }
    canGarden(personName){
        console.log(`${personName} is`, this.height, `and loves to garden!`);
    }
}

const person1 = new Person(25, "silly", "5'6");

person1.canHangOut("Nat");
person1.canTalkOnThePhone("Nat");
person1.canGarden("Nat");

class PostalWorker extends Person {
    canDeliverMail(personName){
        console.log(`${personName} delivers mail everyday!`)
    }
    worksOnTheirFeet(personName){
        console.log(`${personName} walks long distances everyday!`)
    }
}

const mailMan = new PostalWorker(34, "Confident", "6'0");
const mailMan1 = new PostalWorker(35, "Goofy", "6'3");

mailMan.canDeliverMail("Jake");
mailMan.worksOnTheirFeet("Jake");
mailMan1.canDeliverMail("Lil");
mailMan1.worksOnTheirFeet("Lil");

class Chef extends Person {
    canCook(personName){
        console.log(`${personName} cooks like a pro.`)
    }
    knowsManyRecipes(personName){
        console.log(`${personName}'s brain is full of many recipes.`)
    }
}

const chef = new Chef(50, "determined", "5'2");
const chef1 = new Chef(19, "creative", "5'5");

chef.canCook("Mike");
chef.knowsManyRecipes("Mike");
chef1.canCook("Mo");
chef1.knowsManyRecipes("Mo");