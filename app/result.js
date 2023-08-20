class Result {
  // calculate subject wise gpa
  calculateGPA(topic) {
    let gpa;
    let grade;

    if (this[topic] >= 0 && this[topic] < 33) {
      gpa = 0.0;
      grade = "F";
    } else if (this[topic] >= 33 && this[topic] < 40) {
      gpa = 1.0;
      grade = "D";
    } else if (this[topic] >= 40 && this[topic] < 50) {
      gpa = 2.0;
      grade = "C";
    } else if (this[topic] >= 50 && this[topic] < 60) {
      gpa = 3.0;
      grade = "B";
    } else if (this[topic] >= 60 && this[topic] < 70) {
      gpa = 3.5;
      grade = "A-";
    } else if (this[topic] >= 70 && this[topic] < 80) {
      gpa = 4.0;
      grade = "A";
    } else if (this[topic] >= 80) {
      gpa = 5.0;
      grade = "A+";
    } else {
      gpa = "Invalid";
      grade = "Invalid";
    }

    return { gpa, grade };
  }

  //   calculate cgpa
  calculateCGPA() {
    if (
      this.bangla > 32 &&
      this.english > 32 &&
      this.math > 32 &&
      this.science > 32 &&
      this.social_science > 32 &&
      this.religion > 32
    ) {
      const totalGPA =
        this.getGPA("bangla").gpa +
        this.getGPA("english").gpa +
        this.getGPA("math").gpa +
        this.getGPA("science").gpa +
        this.getGPA("social_science").gpa +
        this.getGPA("religion").gpa;

      return (totalGPA / 6).toFixed(2);
    } else {
      return 0;
    }
  }

  //   final result
  finalGrade() {
    if (this.getCGPA() >= 0.0 && this.getCGPA() < 1.0) return "F";
    if (this.getCGPA() >= 2.0 && this.getCGPA() < 3.0) return "C";
    if (this.getCGPA() >= 1.0 && this.getCGPA() < 2.0) return "D";
    if (this.getCGPA() >= 3.0 && this.getCGPA() < 3.5) return "B";
    if (this.getCGPA() >= 3.5 && this.getCGPA() < 4.0) return "A-";
    if (this.getCGPA() >= 4.0 && this.getCGPA() < 5.0) return "A";
    if (this.getCGPA() >= 5.0) return "A+";
  }
}
