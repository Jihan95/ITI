let z = 2;
for (let i = 0; i < 3; i++) {
  z = z + i;
  setTimeout(() => {
    console.log("i:", i);
    console.log("z:", z);
  }, 10);
}