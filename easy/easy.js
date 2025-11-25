function freeClass() {

  return function(workout) {
    console.log(`Today's exercise: ${workout}`);
  };
}
let exercise = freeClass();
console.log(exercise('Running'));
console.log(exercise('Swimming'));
console.log(exercise('Dancing'));
console.log(exercise('Fencing'));