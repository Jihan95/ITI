abstract class Shape {
  double? length;
  double? width;

  Shape(this.length, this.width);

  double calculateArea();
}

mixin PerimeterMixin {
  double calculatePerimeter();
}

mixin VolumeMixin {
  double calculateVolume();
}

class Rectangle extends Shape with PerimeterMixin{
  Rectangle (double length, double width): super(length, width);

  @override
  double calculateArea() {
    return length! * width!;
  }

  @override
  double calculatePerimeter() {
    return 2 * (length! + width!);
  }
}

class Triangle extends Shape{
  Triangle (double height, double base): super(height, base);

  double get base => length!;
  double get height => width!;

  @override
  double calculateArea() {
    return 0.5 * height! * base!;
}
}
class Circle extends Shape with PerimeterMixin{
  Circle(double radius): super(radius, null);

  double get radius => length!;

  @override
  double calculateArea() {
    return 3.14 * radius * radius;
  }

  @override
  double calculatePerimeter() {
    return 2 * 3.14 * radius;
  }
}
void main() {
  Rectangle rect = Rectangle(10, 5);
  Triangle tri = Triangle(10, 5);

  print("Rectangle Area: ${rect.calculateArea()}"); // 50
  print("Rectangle Perimeter: ${rect.calculatePerimeter()}");
  print("Triangle Area: ${tri.calculateArea()}");   // 25

  Circle circle = Circle(7);
  print("Circle Area: ${circle.calculateArea()}"); // ~153.94
  print("Circle Perimeter: ${circle.calculatePerimeter()}");
}