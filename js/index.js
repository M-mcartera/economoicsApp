$(document).ready(function(){
	$('input:radio[name=gender]').change(function(){
		if(this.value == "Male"){
			$('#genderlbl').html("Male");
		}
		else{
			$('#genderlbl').html("Female");
		}
	});
});