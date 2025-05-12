void main() {
  int grade = 95;
  if (grade >= 90) {
    print("A (90+)");
  } else if (grade <= 89 && grade >= 80) {
    print("B (80-89)");
  } else if (grade <= 79 && grade >= 70) {
    print("C (70-79)");
  } else if (grade <= 69 && grade >= 60) {
    print("D (60-69)");
  } else {
    print("F (below 60)");
  }
}
