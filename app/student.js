// Student Class
class Student extends Result {
  constructor(info) {
    super();

    this.name = info.name;
    this.age = info.age;
    this.roll = info.roll;
    this.bangla = info.marks.bangla;
    this.english = info.marks.english;
    this.math = info.marks.math;
    this.science = info.marks.science;
    this.social_science = info.marks.social_science;
    this.religion = info.marks.religion;
  }

  //   get Subject Wise GPA
  getGPA(topic) {
    return this.calculateGPA(topic);
  }

  //   get CGPA
  getCGPA() {
    return this.calculateCGPA();
  }

  //   get final grade
  getFinalGrade() {
    return this.finalGrade();
  }
}
