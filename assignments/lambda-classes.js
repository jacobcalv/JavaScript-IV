// CODE here for your Lambda Classes
class Person {
    constructor(personAttr){
        this.name = personAttr.name;
        this.location = personAttr.location;
        this.age = personAttr.age;
    }
    speak(){
        console.log (`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person  {
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
        this.name = instructorAttr.name;
    }
    demo(subject){
        console.log (`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        console.log (`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person  {
    constructor(studentAttr){
        super(studentAttr);
        this.name = studentAttr.name;
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(subjects => {
            console.log(subjects);
        });
    } 
    PRAssignments(student, subject){
        console.log (`${student.name} has submitted a PR for ${subject}`)
    };
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManagers extends Person  {
    constructor(pmAttr){
        super(pmAttr);
        this.name = pmAttr.name;
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(PM, channel){
        console.log(`${PM.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(PM,student,subject){
        console.log(`${PM.name} debugs ${student.name}'s code on ${subject}`)
    }

}

const bob = new Person({
    name: 'Bob',
    age: '50 years young',
    location: 'Alaska'
})


const junkRat = new Instructor({
    name: 'Junk Rat',
    location: 'Junkertown',
    age: 23,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `*Random Noises`
});



const jacob = new Student({
    name: 'jacob',
    previousBackground: 'Customer Service Manager',
    className: 'WEBPT8',
    favSubjects: ['js', 'css', 'html']
})


const spongeBob = new ProjectManagers({
    name: "SpongeBob SquarePants",
    gradClassName:'Boating School 02' ,
    favInstructor: 'Ms. Puff',
})


console.log(bob);
bob.speak();

console.log(junkRat);
junkRat.demo('advanced js');
junkRat.grade(jacob, 'css');

console.log(jacob);
jacob.listsSubjects();
jacob.PRAssignments(jacob,'english'); //******************** */


console.log(spongeBob);
spongeBob.standUp(spongeBob, 'webpt8_sponge');
spongeBob.debugsCode(spongeBob, jacob, 'css')