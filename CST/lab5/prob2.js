function dispVal(obj, key) {
  if (key === "age") {
    return obj[key] + " years old";
  }
  return obj[key];
}

console.log(dispVal({ nm: "ali", age: 10 }, "nm"));
