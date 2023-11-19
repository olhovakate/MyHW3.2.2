const findBestStudent = require("./bestStudent");

describe("findBestStudent", () => {
  test("Находит студента с максимальным количеством баллов и самой ранней сдачей", () => {
    const studentsData = {
      student1: { name: "Anna", score: 20, date: "2023-11-12" },
      student2: { name: "Ivan", score: 50, date: "2023-11-07" },
      student3: { name: "Maria", score: 45, date: "2023-11-11" },
      student4: { name: "Milana", score: 30, date: "2023-11-09" },
      student5: { name: "Emily", score: 10, date: "2023-11-10" },
    };

    const topStudent = findBestStudent(studentsData);
    expect(topStudent).toEqual({
      name: "Ivan",
      score: 50,
      date: "2023-11-07",
    });
  });

  test("Находит студента с одинаковыми баллами, но с самой ранней датой", () => {
    const studentsData = {
      student1: { name: "Anna", score: 20, date: "2023-11-12" },
      student2: { name: "Ivan", score: 20, date: "2023-11-07" },
      student3: { name: "Maria", score: 20, date: "2023-11-11" },
      student4: { name: "Milana", score: 20, date: "2023-11-09" },
      student5: { name: "Emily", score: 20, date: "2023-11-10" },
    };

    const topStudent = findBestStudent(studentsData);
    expect(topStudent).toEqual({
      name: "Ivan",
      score: 20,
      date: "2023-11-07",
    });
  });

  test("Находит студента с минимальным количеством баллов,но со сдачей до дедлайна", () => {
    const studentsData = {
      student1: { name: "Anna", score: 20, date: "2023-11-12" },
      student2: { name: "Ivan", score: 30, date: "2023-11-13" },
      student3: { name: "Maria", score: 15, date: "2023-11-09" },
      student4: { name: "Milana", score: 45, date: "2023-11-11" },
      student5: { name: "Emily", score: 60, date: "2023-11-12" },
    };

    const topStudent = findBestStudent(studentsData);
    expect(topStudent).toEqual({
      name: "Maria",
      score: 15,
      date: "2023-11-09",
    });
  });

  test("Находит студента с меньшим количеством баллов, но сдачей в день дедлайна", () => {
    const studentsData = {
      student1: { name: "Anna", score: 60, date: "2023-11-12" },
      student2: { name: "Ivan", score: 30, date: "2023-11-07" },
      student3: { name: "Maria", score: 55, date: "2023-11-11" },
      student4: { name: "Milana", score: 45, date: "2023-11-09" },
      student5: { name: "Emily", score: 50, date: "2023-11-10" },
    };

    const topStudent = findBestStudent(studentsData);
    expect(topStudent).toEqual({
      name: "Emily",
      score: 50,
      date: "2023-11-10",
    });
  });

  test("Ничего не находит при пустых данных", () => {
    const studentsData = {};

    const topStudent = findBestStudent(studentsData);
    expect(topStudent).toBeNull();
  });

  test("Выводит поздравление для студента с максимальным  количеством баллов", () => {
    const studentsData = {
      student1: { name: "Anna", score: 20, date: "2023-11-12" },
      student2: { name: "Ivan", score: 30, date: "2023-11-07" },
      student3: { name: "Maria", score: 45, date: "2023-11-11" },
      student4: { name: "Milana", score: 55, date: "2023-11-09" },
      student5: { name: "Emily", score: 10, date: "2023-11-10" },
    };

    const consoleLogMock = jest.spyOn(console, "log");

    findBestStudent(studentsData);

    expect(consoleLogMock).toHaveBeenCalledWith(
      `Поздравляем, Milana! У вас максимальное количество баллов - 55!`
    );
  });

  test("Выводит сообщение о отсутствии студентов для анализа", () => {
    const studentsData = {
      student1: { name: "Anna", score: 0, date: "2023-11-14" },
      student2: { name: "Ivan", score: 0, date: "2023-11-14" },
      student3: { name: "Maria", score: 0, date: "2023-11-14" },
      student4: { name: "Milana", score: 0, date: "2023-11-14" },
      student5: { name: "Emily", score: 0, date: "2023-11-14" },
    };

    const consoleLogMock = jest.spyOn(console, "log");

    findBestStudent(studentsData);

    expect(consoleLogMock).toHaveBeenCalledWith("Нет студентов для анализа.");
  });
});

//Параметризованные тесты//параметризованные тесты

describe("findBestStudent", () => {
  test.each([
    [
      "Находит студента с максимальным количеством баллов и самой ранней сдачей",
      {
        student1: { name: "Anna", score: 20, date: "2023-11-12" },
        student2: { name: "Ivan", score: 50, date: "2023-11-07" },
        student3: { name: "Maria", score: 45, date: "2023-11-11" },
        student4: { name: "Milana", score: 30, date: "2023-11-09" },
        student5: { name: "Emily", score: 10, date: "2023-11-10" },
      },
      {
        name: "Ivan",
        score: 50,
        date: "2023-11-07",
      },
    ],
    [
      "Находит студента с одинаковыми баллами, но с самой ранней датой",
      {
        student1: { name: "Anna", score: 20, date: "2023-11-12" },
        student2: { name: "Ivan", score: 20, date: "2023-11-07" },
        student3: { name: "Maria", score: 20, date: "2023-11-11" },
        student4: { name: "Milana", score: 20, date: "2023-11-09" },
        student5: { name: "Emily", score: 20, date: "2023-11-10" },
      },
      {
        name: "Ivan",
        score: 20,
        date: "2023-11-07",
      },
    ],
    [
      "Находит студента с минимальным количеством баллов,но со сдачей до дедлайна",
      {
        student1: { name: "Anna", score: 20, date: "2023-11-12" },
        student2: { name: "Ivan", score: 30, date: "2023-11-13" },
        student3: { name: "Maria", score: 15, date: "2023-11-09" },
        student4: { name: "Milana", score: 45, date: "2023-11-11" },
        student5: { name: "Emily", score: 60, date: "2023-11-12" },
      },
      {
        name: "Maria",
        score: 15,
        date: "2023-11-09",
      },
    ],
    [
      "Находит студента с меньшим количеством баллов, но сдачей в день дедлайна",
      {
        student1: { name: "Anna", score: 60, date: "2023-11-12" },
        student2: { name: "Ivan", score: 30, date: "2023-11-07" },
        student3: { name: "Maria", score: 55, date: "2023-11-11" },
        student4: { name: "Milana", score: 45, date: "2023-11-09" },
        student5: { name: "Emily", score: 50, date: "2023-11-10" },
      },
      {
        name: "Emily",
        score: 50,
        date: "2023-11-10",
      },
    ],
    ["Ничего не находит при пустых данных", {}, null],
    [
      "Выводит поздравление для студента с максимальным количеством баллов",
      {
        student1: { name: "Anna", score: 20, date: "2023-11-12" },
        student2: { name: "Ivan", score: 30, date: "2023-11-07" },
        student3: { name: "Maria", score: 45, date: "2023-11-11" },
        student4: { name: "Milana", score: 55, date: "2023-11-09" },
        student5: { name: "Emily", score: 10, date: "2023-11-10" },
      },
      {
        name: "Milana",
        score: 55,
        date: "2023-11-09",
      },
    ],
    [
      "Выводит сообщение о отсутствии студентов для анализа",
      {
        student1: { name: "Anna", score: 0, date: "2023-11-14" },
        student2: { name: "Ivan", score: 0, date: "2023-11-14" },
        student3: { name: "Maria", score: 0, date: "2023-11-14" },
        student4: { name: "Milana", score: 0, date: "2023-11-14" },
        student5: { name: "Emily", score: 0, date: "2023-11-14" },
      },
      null,
    ],
  ])("%s", (_, studentsData, expected) => {
    const topStudent = findBestStudent(studentsData);
    expect(topStudent).toEqual(expected);
  });
});
