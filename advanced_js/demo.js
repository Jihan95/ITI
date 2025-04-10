let z = 2;
for (let i = 0; i < 3; i++) {
  let currentZ = z++;  // Capture the value of z at the time the callback is created
  setTimeout(() => {
    console.log("i:", i);
    console.log("z:", currentZ);
  }, 10);
}