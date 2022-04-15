export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((item) => item.location === city)
    .map((student) => {
      const grades = newGrades.filter((item) => item.studentId === student.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...student,
        grade,
      };
    });
}
