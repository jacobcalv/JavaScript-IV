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
    grade(subject){
        console.log (`${student.name} receives a perfect score on ${subject}`)
    }
}

class Students extends Person  {
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(subjects => {
            console.log(subjects);
        });
    } 
    PRAssignments(subject){
        console.log (`${student.name} has submitted a PR for ${subject}`)
    };
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManagers extends Person  {
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(name){
        console.log(`${name, channel} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(name){
        console.log(`${name} debugs ${student.name}'s code on {subject}`)
    }

}

const junkRat = new Instructor({
    name: 'Junk Rat',
    location: 'Overwatch',
    age: 23,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `*Random Noises`
  });

junkRat.demo('advanced js');
junkRat.grade('css')

  