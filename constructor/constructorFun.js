function Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase)
{
	this.name = name;
	this.gender = gender;
	this.grade = GPA;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;
	this.canStudentHaveFun = function()
	{
		if(this.detentions < 10 && this.GPA > 2)
		{
			console.log("This student can have fun!");
		}
	}
}

var prompt = require('prompt');
prompt.start();
prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
	var student = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase)
	student.canStudentHaveFun();
})