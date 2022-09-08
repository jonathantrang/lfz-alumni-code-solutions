const colors = ['red', 'white', 'blue'];
const america = colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);
console.log('America is', america);

colors[2] = 'green';
const mexico = colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';

console.log('Mexico is', mexico);
console.log('value of colors is:', colors);

const students = ['Leonardo', 'Donatello', 'Raphael', 'Michelangelo'];
const numberOfStudents = students.length;
const lastIndex = students.length - 1;
const lastStudent = students[lastIndex];

console.log('There are ' + numberOfStudents + ' students in the class.');
console.log('The last student in the array is', lastStudent + '.');
console.log('value of students:', students);

/* typically I would declare variables first and put them all together but
when I did on the console log it would show colors[2] as green. So for the sake
of the exercise I did this format. */
