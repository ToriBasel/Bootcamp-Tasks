function gradeAssinger(grade){
  const num_grade = 1 * grade;
  let to_return = '';
  if (num_grade < 65) {
    to_return = 'F';
  } else if (num_grade < 70) {
    to_return = 'D';
  } else if (num_grade < 80) {
    to_return = 'C';
  } else if (num_grade < 90) {
    to_return = 'B';
  } else {
    to_return = 'A';
  }
  return to_return;
};