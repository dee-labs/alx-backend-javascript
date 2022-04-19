export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Divine',
  lastName: 'Ukonu',
  age: 26,
  location: "Port Harcourt, Nigeria",
}

const student2: Student = {
  firstName: 'Chisom',
  lastName: 'Leonard',
  age: 28,
  location: "Lagos, Nigeria",
}
  const studentsList: Array<Student> = [student1, student2];

  export const renderTable = (students: Array<Student>): void => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
    tableHead.insertAdjacentElement('beforeend', headRow);
  
    for (const student of students) {
      const bodyRow = document.createElement('tr');
      bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
      bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
      tableBody.insertAdjacentElement('beforeend', bodyRow);
    }
  
    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
  };
  
  renderTable(studentsList);
