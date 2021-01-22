$(document).ready(function(){
	$('input:radio[name=gender]').change(function(){
		if(this.value == "Male"){
			$('#genderlbl').html("Male");
		}
		else{
			$('#genderlbl').html("Female");
		}
	});

	//values
	$('#formReg').submit(function(e){
		e.preventDefault();
		console.log($(this).valid());
	});
});