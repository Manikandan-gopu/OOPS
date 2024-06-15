//  Write a person class To hold the details

class Person{
    constructor(name,age,institution,course,place,mode){
        this.name = name;
        this.age = age;
        this.institution= institution;
        this.course = ` FSD57WD ${course}`;
        this.place = place;
        this.mode = mode;
    }
    getPersonInfo() {
        console.log(
             `The student name was ${this.name}
age is ${this.age}, Joined institution ${this.institution},
selected course by a student was ${this.course},
his Native Place is ${this.place}, Mode of course is ${this.mode}`)
             };
        }


const personInfo0 = new Person("ManiKandan",24,"Guvi","Mern Stack","chennai","online")
console.log(personInfo0)
personInfo0.getPersonInfo()
console.log(personInfo0.course)
console.log(personInfo0.place)


const personInfo1 = new Person("Yuvaraj",22,"Guvi","Data science","Thiruvanamalai","Online")
console.log(personInfo1)
personInfo1.getPersonInfo()



const personInfo2 = new Person("Deepak",25,"ABC","Data analyst","chennai","Offline")
console.log(personInfo2)
personInfo2.getPersonInfo()



