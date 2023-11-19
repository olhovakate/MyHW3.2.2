function findBestStudent(studentsData) {
  let maxScore = -Infinity;
  let topStudent = null;

  for (const studentKey in studentsData) {
    const student = studentsData[studentKey];
    const studentDate = new Date(student.date);

    if (studentDate <= new Date("2023-11-10") && student.score > maxScore) {
      maxScore = student.score;
      topStudent = student;
    }
  }
  if (topStudent && topStudent.score !== 0) {
    console.log(
      `Поздравляем, ${topStudent.name}! У вас максимальное количество баллов - ${topStudent.score}!`
    );
  } else {
    console.log("Нет студентов для анализа.");
  }
  return topStudent;
}

const studentsData = {
  student1: { name: "Anna", score: 20, date: "2023-11-12" },
  student2: { name: "Ivan", score: 30, date: "2023-11-07" },
  student3: { name: "Maria", score: 45, date: "2023-11-11" },
  student4: { name: "Milana", score: 55, date: "2023-11-09" },
  student5: { name: "Emily", score: 10, date: "2023-11-10" },
};

const topStudent = findBestStudent(studentsData);

module.exports = findBestStudent;
