abstract class IPerson {
  void displayDetails();
  String getRole();
}

class Student implements IPerson {
  String name;
  int age;
  int grade;

  Student(this.name, this.age, this.grade);

  @override
  void displayDetails() {
    print("Student Name: ${name}, Student age: ${age}, Grade: ${grade}");
  }

  @override
  String getRole() {
    return ("Student");
  }
}

class Teacher implements IPerson {
  String name;
  String subject;
  int id;
  int age;

  Teacher(this.name, this.subject, this.id, this.age);

  @override
  void displayDetails() {
    print("Teacher Name: ${name}, Subject:${this.subject}");
  }
  @override
  String getRole() {
    return ("Teacher");
  }
}

class Staff implements IPerson {
  String name;
  String department;

  Staff(this.name, this.department);

  @override
  void displayDetails() {
    print("Staff Name: $name, Department: $department");
  }

  @override
  String getRole() {
    return "Staff";
  }
}

void main() {
  // Test Student
  Student student = Student("John Doe", 20, 6);
  student.displayDetails();
  assert(student.getRole() == "Student");

  // Test Teacher
  Teacher teacher = Teacher("Jane Smith", "Math", 101, 35);
  teacher.displayDetails();
  assert(teacher.getRole() == "Teacher");

  // Test Staff
  Staff staff = Staff("Mark Johnson", "Administration");
  staff.displayDetails();
  assert(staff.getRole() == "Staff");

}
