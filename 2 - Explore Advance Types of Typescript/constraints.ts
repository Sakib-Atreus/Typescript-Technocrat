{
  // Constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 1,
    name: "Mr.",
    email: "mr@gmail.com",
    age: 24,
    devTools: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 2,
    name: "Mrs.",
    email: "mrs@gmail.com",
    profession: "MERN Stack Developer",
  });




  
}
