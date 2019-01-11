$(document).ready(function(){
	let total=0;//total number of scores.
	let num=0;//stores question number;
	let sec=0;
	let min=0;
	let hrs=0;
	let sec0="0";
	let min0="0";
	let hrs0="0";
	let interval=setInterval(timer,1000);


	// remember to use jSON instead**
	let questionBank=[
	{
		question:"What is the capital city of Ghana?",
		id:1,
		answer:"Accra",
		options:['Kumasi','greater Accra','Accra']
	},{
		question:"how many regions are in Ghana?",
		id:2,
		answer:"10",
		options:['8','19','10']

	},{
		question:"what is the capital city of nigeria?",
		id:3,
		answer:"Lagos",
		options:["ghana","abuja","Lagos"]},
		{

		question:"what is the capital city of Ethiopia?",
		id:4,
		answer:"Addis Ababa",
		options:["Addis Ababa","omen","zulu"]

	}

	];

	
		let length=questionBank.length;//stores the number of 	questions.

		// main function to load quiz into the DOM
		(function(){
			for(let i=0;i<questionBank.length;i++){

				let question=questionBank[i].question//stores questions;
				let id=questionBank[i].id;//stores the question id
				num++;
				// appends the questions to the #main div 
				$("#main").append(` <p class='${questionBank[i].id}'>${num}. ${questionBank[i].question}</p>`);

				for(let j=0;j<questionBank[i].options.length;j++){
					let opts=`<div><input type='radio' name='${questionBank[i].id
				}' value="${questionBank[i].options[j]}">${questionBank[i].options[j]}</div>`;

				$(`.${questionBank[i].id}`).append(opts);//appends the options to each question	
				}
			}

		})();
		
			function timer(){
				sec++;
				if(sec>9){
					sec0="";
				}else{
					sec0="0";
				}
				if(min>9){
					min0="";
				}else{
					min0="0";
				}
				if(hrs>9){
					hrs0="";

				}else{
					hrs0="0";
				}
				if(sec>=60){
					min++;
					sec=0;
				}
				if(min>=60){
					hrs++;
					min=0;
					sec=0;
				}
			$(".timer").text("Time spent "+ hrs0+hrs+":"+min0+min+":"+sec0+sec);

			}
			function timeSpent(){
				 clearInterval(interval);
				 let time=$(".timer").text("Time spent "+ hrs0+hrs+":"+min0+min+":"+sec0+sec);

				 return time;
			}



	$("#submit").on("click",function(){


	
		
		// validates user answers
	for(let i=0;i<questionBank.length;i++){
		if($(`input[name=${questionBank[i].id}]:checked`).val()==questionBank[i].answer){
			total++;

			console.log("correct");
		}else{
			$(".total").css("color","red");
			console.log("failed");
	}
	}
	if(total==length){
			$(".total").css("color","green");

	}else{
			$(".total").css("color","red");

	}

$(".total").text(`you scored ${total} out of ${length}`);
$("#submit").attr("disabled","disabled");//disable button after user clicks in submit
$("#answer").show();//shpw button after user clicks on submit
	
timeSpent();
	});

	// display correct answers
$("#answer").on("click",function(){

	for(let i=0;i<questionBank.length;i++){
		if($(`input[value="${questionBank[i].answer}"]`).val()==questionBank[i].answer){
			$(`input[value="${questionBank[i].answer}"]`).attr("checked","checked");
		}
		
	}
	
});

});