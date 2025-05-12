void main() {
  String str = "Hello";
  String reversed = "";
  for (int i = str.length - 1; i != -1; i--) {
    reversed += str[i];
  }
  print(reversed);
}
