class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Abstract method
    introduce() {
        throw new Error("The introduce() method must be implemented.");
    }
}



class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;

        
        this.#grades = [];
    }

    
    #grades;

    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.#grades.push(grade);
        } else {
            console.log("Invalid grade.");
        }
    }

    getAverage() {
        if (this.#grades.length === 0) {
            return 0;
        }

        let total = 0;

        
        for (let grade of this.#grades) {
            total += grade;
        }

        return total / this.#grades.length;
    }

    introduce() {
        return `Student: ${this.name}, ID: ${this.studentId}`;
    }
}



class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    introduce() {
        return `Teacher: ${this.name}, Subject: ${this.subject}`;
    }

    teach() {
        return `${this.name} is teaching ${this.subject}.`;
    }
}



class Course {
    constructor(courseName, teacher) {
        this.courseName = courseName;
        this.teacher = teacher;
        this.students = [];
    }

    enroll(student) {
        this.students.push(student);
    }

    showStudents() {
        console.log(`\nStudents in ${this.courseName}:`);

        
        for (let student of this.students) {
            console.log(student.name);
        }
    }

    getStudentCount() {
        return this.students.length;
    }
}



class School {
    constructor(name) {
        this.name = name;
        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
    }

    displayCourses() {
        console.log(`\nCourses offered by ${this.name}:`);

        
        this.courses.forEach(course => {
            console.log(course.courseName);
        });
    }

    findTopStudent() {
        let topStudent = null;
        let highestAverage = 0;

        for (let course of this.courses) {
            for (let student of course.students) {

                
                if (student.getAverage() > highestAverage) {
                    highestAverage = student.getAverage();
                    topStudent = student;
                }
            }
        }

        return topStudent;
    }
}



const schoolInfo = {
    location: "Calbayog City",
    established: 2009,
    type: "Public University"
};


const schoolRules = {
    attendanceRequired: true,
    passingGrade: 75,
    maxAbsences: 10
};



const student1 = new Student("Fatima", 18, "S001");


const student2 = new Student("Romela", 19, "S002");


const teacher1 = new Teacher("Mr. Abitria", 35, "T001");


const course1 = new Course("JavaScript Programming", teacher1);


const school1 = new School("Northwest Samar State University");



const subjects = [
    "JavaScript",
    "Programming Languages",
    "Software Engineering 1"
];


const rooms = [
    "Room 301",
    "Room 302",
    "Room 303"
];


const schoolDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
];




student1.addGrade(90);
student1.addGrade(85);
student1.addGrade(95);

student2.addGrade(80);
student2.addGrade(70);
student2.addGrade(88);




course1.enroll(student1);
course1.enroll(student2);

school1.addCourse(course1);





if (student1.getAverage() >= schoolRules.passingGrade) {
    console.log(`${student1.name} passed.`);
} else {
    console.log(`${student1.name} failed.`);
}


if (student2.getAverage() >= schoolRules.passingGrade) {
    console.log(`${student2.name} passed.`);
} else {
    console.log(`${student2.name} failed.`);
}




const people = [
    student1,
    student2,
    teacher1
];


for (let person of people) {
    console.log(person.introduce());
}




console.log("\n--- SCHOOL INFORMATION ---");
console.log(schoolInfo.location);
console.log(schoolInfo.established);
console.log(schoolInfo.type);

console.log("\n--- SCHOOL COURSES ---");
school1.displayCourses();

course1.showStudents();

console.log("\n--- TEACHER ---");
console.log(teacher1.teach());

console.log("\n--- STUDENT AVERAGES ---");
console.log(
    `${student1.name}: ${student1.getAverage().toFixed(2)}`
);

console.log(
    `${student2.name}: ${student2.getAverage().toFixed(2)}`
);




const topStudent = school1.findTopStudent();

if (topStudent !== null) {
    console.log(
        `\nTop Student: ${topStudent.name} ` +
        `with an average of ${topStudent.getAverage().toFixed(2)}`
    );
}