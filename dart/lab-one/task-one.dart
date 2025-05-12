import 'dart:io';

void main() {
  for (int i = 1; i < 11; i++) {
    for (int j = i; j < 11; j++) {
      int result = i * j;
      stdout.write("$i x $j = $result ->");
      if (result % 2 == 0) {
        stdout.write("even\n");
      } else {
        stdout.write("odd\n");
      }
    }
    stdout.write("\n");
  }
}
