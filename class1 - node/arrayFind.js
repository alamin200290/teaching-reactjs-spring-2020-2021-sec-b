//Find array

$students = ['Alamin', 'Abir', 'Razib', 'Rakib', 'Ratul'];
$arrayfind = $students.find(function(value, index, array){
	return value[0] == 'A';
});

console.log($arrayfind);