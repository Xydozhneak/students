
class Student {
    constructor(firstName, lastName, yearOfBirth, scores, visit) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.yearOfBirth = yearOfBirth;
      this.scores = scores;
      this.visit = visit;
    }
  
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.yearOfBirth;
    }
  
    getAverageScore() {
      return this.scores.reduce((a, b) => a + b) / this.scores.length;
    }
  
    present() {
      if (this.visit.length < 25) {
        this.visit.push(true);
      } else {
        console.log("array is full");
      }
    }
  
    abcent() {
      if (this.visit.length < 25) {
        this.visit.push(false);
      } else {
        console.log("array is full");
      }
    }
  
    summary() {
      const averageScore = this.getAverageScore();
      const averageVisit = this.visit.filter((item) => item === true).length / this.visit.length;
  
      if (averageScore > 90 && averageVisit > 0.9) {
        return "Exelent!";
      } else if (averageScore > 90 || averageVisit > 0.9) {
        return "Good";
      } else {
        return "Low!";
      }
    }
  }
  const student1 = new Student('Petr', 'petrof', 1997, scoresFirstStudent, visitsFirstStudent);
  const student2 = new Student('Vitalii', 'Bondarenko', 1998, scoresSecondStudent, visitsSecondStudent);
  const student3 = new Student('Nikita', 'Kovalenko', 1999, scoresThirdStudent, visitsThirdStudent);

  let visitsFirstStudent = [];
  const scoresFirstStudent = [100, 100, 100, 100, 100, 100];
  let visitsSecondStudent = [];
  const scoresSecondStudent = [90, 87, 60, 76, 76, 60];
  let visitsThirdStudent = [];
  const scoresThirdStudent = [80, 70, 100, 80, 90, 60];

  student1.present();
  student1.present()
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.present();

  student2.abcent();
  student2.present();
  student2.present();
  student2.present();
  student2.present();

  student3.present();
  student3.present();
  student3.present();
  student3.present();
  student3.present();

  console.log(student1.getAge(), student1.getAverageScore(),student1.summary());
  console.log(student2.getAge(), student2.getAverageScore(),student2.summary());
  console.log(student3.getAge(), student3.getAverageScore(),student3.summary());
 