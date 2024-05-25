{
    // You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade. 
    // Hints: Use a reduce() method to sum the grades. average = total grades/ total length

    interface Student {
        name: string;
        age: number;
        grades: number[];
    }

    function calculateAverageGrade(student: Student): number {
        if(student.grades.length === 0){
            return 0;
        }

        const totalGrades = student.grades.reduce((total, grade) => total + grade, 0);
        return totalGrades / student.grades.length;
    }

    const student1: Student = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90]
    };

    const averageGradeForBob = calculateAverageGrade(student1);
    console.log(averageGradeForBob);


}