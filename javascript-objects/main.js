const student = {
  firstName: 'Jonathan',
  lastName: 'Trang',
  age: '26'
};
const fullName = student.firstName + ' ' + student.lastName;
student.livesInIrvine = true;
student.previousOccupation = 'Contract Administrator';

const vehicle = {
  make: 'Toyota',
  model: 'Prius Model 3',
  year: '2017'
};
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

const pet = {
  name: 'Max',
  type: 'Dog'
};
delete pet.name;
delete pet.type;

console.log('value of fullName:', fullName);
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

console.log('value of pet', pet);
