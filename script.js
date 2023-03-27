// We will validate name, email address and phone Number.
		let name = document.getElementById('name-input');
		let mail = document.getElementById('mail-input');
		let phone = document.getElementById('phone-input');
		
		
		// making 3 boolean variables  form will only submit if these variables are true: 
		let isNameValid=false;
		let isMailValid=false;
		let isPhoneValid=false;
		
		
		
			// console.log(name,mail,phone);
		
		// Validating Name:
		// Not more than 10 characters.
		// First letter should be alphabet  ^[a-zA-Z]
		// Next letters should be alphanumeric only.
		name.addEventListener('blur',function(){
			// let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;      // should be numeric or alphabetic only and upto 10 occurences. 
			
			let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;       // using both ^ and $ to get only 2 to 10 characters.
			let input = name.value;
			let wrongInputDiv = document.getElementById('wrong-name-input');
			if(regex.test(input)){
			    name.classList.remove('border-red');     // removing class
				wrongInputDiv.innerHTML=`<p> <i> <b> Correct Input </b> </i> <p>`;
				isNameValid=true;
			}else{
				wrongInputDiv.innerHTML=`<p> <i> <b> Wrong Input : First character should be alphabet only and input should consist 
										 of min 2 characters and max 10 characters.** </b> </i> <p>`;
				name.classList.add('border-red');     // adding class to show red border of input.
			}
			
			/* let reg1 = /^[a-zA-Z]/  // start with alphabet
			let reg2 = /[0-9a-zA-Z]{11}/   // more than 10 characters should occur.
			let input = name.value;
				console.log(input);
				// let result = regex.exec(input);
				// console.log(result);
				
			if(reg1.test(input)==true && reg2.test(input)==false){
			    console.log("Correct");
			}
			else{
				console.log("Incorrect");
			} 
			
			let wrongInputDiv = document.getElementById('wrong-name-input');
			
			if(reg1.test(input)==false){
				name.style.border="2px solid red";
				wrongInputDiv.innerHTML=`<p> <i> <b> Wrong Input : First character should be alphabet only** </b> </i> <p>`;
			}else{
				name.style.border="1px solid black";
				wrongInputDiv.innerHTML=`<p> <i> <b> Correct Input ** </b> </i> <p>`;
			}
			
			if(reg2.test(input)==true){
				name.style.border="2px solid red";   // or you can add class when string not matched or remove class if matched.
				wrongInputDiv.innerHTML=`<p> <i> <b> Wrong Input : Only 10 characters allowed** </b> </i> <p>`;
			}else{
				name.style.border="1px solid black";   
			    wrongInputDiv.innerHTML=`<p> <i> <b> Correct Input </b> </i> <p>`;
			}
			
			*/
			
			
		
		    /*
			let regex = /[\w\d\s]{11}/;      // if 11 occurences or more than that : then incorrect!!!
			let input = name.value;
			console.log(input);
			if(regex.test(input)){
			    console.log("Incorrect");
			}
			else{
				console.log("Correct");
			} */
			
		});
		
		
		
		
		// Validating mail:
		// mail is written as -----@----.----
		
		// for . use escape character,else will consider it as meta character.
		// Before @, anything can come like digit,alphabets,_,.,- 
							// for dot and - , use escape character. [0-9a-zA-Z_\.\-]
							// and as many times so will use +. ([0-9a-zA-Z_\.\-]+) 
		// After @ also anything can come so same.  ([0-9a-zA-Z_\.\-]+)
		// After . (.com / .in) : only alphabets can come.   ([a-zA-Z]+)
							// we can apply limit min 2 and max 7.   ([a-zA-Z]{2-7})
		
		mail.addEventListener('blur',function(){
			let regex = /^([0-9a-zA-Z_\.\-]+)@([0-9a-zA-Z_\.\-]+)\.([a-zA-Z]+)$/;
			let input = mail.value;
			let wrongInputDiv = document.getElementById('wrong-mail-input');
			if(regex.test(input)){
			    mail.classList.remove('border-red');     // removing class
				wrongInputDiv.innerHTML=`<p> <i> <b> Correct Input </b> </i> <p>`;
				isMailValid=true;
			}else{
				wrongInputDiv.innerHTML=`<p> <i> <b> Wrong Input : Enter correct mail id. ** </b> </i> <p>`;
				mail.classList.add('border-red');     // adding class to show red border of input.
			}
		});
		
		
		
		
		
		// Validating phone Number:
		
		phone.addEventListener('blur',function(){
			let regex = /^[6789](\d){9}$/;
			// let regex = /^[6789]([0-9]){9}$/;
			let input = phone.value;
			let wrongInputDiv = document.getElementById('wrong-phone-input');
			if(regex.test(input)){
			    phone.classList.remove('border-red');     // removing class
				wrongInputDiv.innerHTML=`<p> <i> <b> Correct Input </b> </i> <p>`;
				isPhoneValid=true;
			}else{
				wrongInputDiv.innerHTML=`<p> <i> <b> Wrong Input : Enter correct phone number of 10 digits** </b> </i> <p>`;
				phone.classList.add('border-red');     // adding class to show red border of input.
			}
		});
		
		
		
		
		
		// Submitting form:
		
		let submitBtn = document.getElementById('submit-btn');
		
		submitBtn.addEventListener('click',function(e){
			
			e.preventDefault();              // as on submit it will reload and we don't want that.
			console.log(isNameValid,isMailValid,isPhoneValid);
			
			let alertDiv = document.getElementById('display-alert');
			let form = document.getElementById('input-form');
			let divFields = document.getElementsByClassName('wrong-field');		
					
			if(isNameValid && isMailValid && isPhoneValid){
				 alertDiv.innerHTML=`<p> <b> Form is submitted successfully. </b> </p>`;	
				 alertDiv.setAttribute('style','position:fixed;top:0px;height:10vh;width:100vw;box-model:border-box;font-size:1.1rem;margin-left:-1vw;padding-left:4vw;background-color:lightgreen;');
				 form.reset();
				 for(let i=0;i<divFields.length;i++){
					divFields[i].innerHTML="";
				 }
				 isNameValid=false;
				 isMailValid=false;
				 isPhoneValid=false; 	
				 // Alert should go after 5seconds.
				 setTimeout(function(){
				      alertDiv.style.display="none";
				 },2000);	
			}
			else{
				 alertDiv.innerHTML=`<p> <b> Enter correct details and then try again!! </b> </p>`;	
				 alertDiv.setAttribute('style','position:fixed;top:0px;height:10vh;width:100vw;box-model:border-box;font-size:1.1rem;margin-left:-1vw;padding-left:4vw;background-color:red;');
				// Alert should go after 5seconds.
				 setTimeout(function(){
				      alertDiv.style.display="none";
				 },2000);
			}
			
		});