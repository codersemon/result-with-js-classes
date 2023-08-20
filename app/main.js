// select student list DOM 
const studentList = document.querySelector('.student_list');

// initiate content
let content = '';
stu_info.map((student, index) => {
  let stuData = new Student(student);

  content += `<tr>
  <td>${index+1}</td>
  <td>${stuData.name}</td>
  <td>${stuData.age}</td>
  <td>${stuData.roll}</td>
  <td>
      <ul>
          <li>Bangla - Marks (${stuData.bangla}) - GPA (${stuData.getGPA('bangla').gpa}) - Grade (${stuData.getGPA('bangla').grade})</li>
          <li>English - Marks (${stuData.english}) - GPA (${stuData.getGPA('english').gpa}) - Grade (${stuData.getGPA('english').grade})</li>
          <li>Math - Marks ${stuData.math}) - GPA (${stuData.getGPA('math').gpa}) - Grade (${stuData.getGPA('math').grade})</li>
          <li>Science - Marks (${stuData.science}) - GPA (${stuData.getGPA('science').gpa}) - Grade (${stuData.getGPA('science').grade})</li>
          <li>Social Science - Marks (${stuData.social_science}) - GPA (${stuData.getGPA('social_science').gpa}) - Grade (${stuData.getGPA('social_science').grade})</li>
          <li>Religion - Marks (${stuData.religion}) - GPA (${stuData.getGPA('religion').gpa}) - Grade (${stuData.getGPA('religion').grade})</li>
      </ul>
      <hr>
      <h6>CGPA: ${stuData.getCGPA()}</h6>
      <h6>Final Grade: ${stuData.getFinalGrade()}</h6>
  </td>
</tr>`;

console.log(student);
})
studentList.innerHTML = content;

