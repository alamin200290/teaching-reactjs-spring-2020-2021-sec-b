//Filter array
$students = ['Alamin', 'Abir', 'Razib', 'Rakib', 'Ratul'];
$arrayfilter = $students.filter(function(std){
	return std[0] == 'A';
});

console.log($arrayfilter);

