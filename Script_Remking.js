var everythingLoaded = setInterval(function() {
 var rk_class= document.body.classList.contains('neterror'); 
var rk_complete =/loaded|complete/.test(document.readyState);
if (rk_complete && rk_class) {
    location.reload()
  }else{
    alert('Ya cargó la web!!! Registrate')
}

}, 10000);



/*------------------------*/

var rk_letter1 = "abcde"
rk_letter1.repeat()
//--> ""
rk_letter1.repeat(2)
//--> "abcdeabcde"
rk_letter1.repeat(2)
//"abcdeabcde"

/*-----------------------*/
var rk_letter1 = "abcde"
rk_letter1.substring(0)
//"abcde"
rk_letter1.substring(1)
//"bcde"
rk_letter1.substring(2)
//"cde"
rk_letter1.substring(3)
//"de"
rk_letter1.substring(4)
//"e"

/*-----------------------*/

var rk_letter1 = "abcde"
undefined
for (var i = 0; i < rk_letter1; i++){
	rk_letter1.charAt(i);
}
//undefined
rk_letter1[0]
//"a"
rk_letter1[1]
//"b"
rk_letter1[2]
//"c"
rk_letter1[3]
//"d"
rk_letter1[4]
//"e"
rk_letter1[5]
//undefined

/*---------------------*/
var veggies = "carrot";
		var fruitvegbasket = [];

		//console.log(fruitvegbasket.push(veggies));
		//console.log(fruitvegbasket);

		for (var i = 0; i < veggies.length; i++){			
			fruitvegbasket.push(i);
			//console.log(fruitvegbasket);
		}


		var rk_letter1 = "abcde";
		var rk_eachLetter = [];
		var rk_eachLetterBySplit = [];
		var rk_Split = rk_letter1.split('');
		console.info("Method Split: "+ rk_Split);
		console.log("Method Array Location: " + rk_letter1[0]);
		console.log("Method Push With Split: " + rk_eachLetterBySplit.push(rk_Split));
		console.log("Method Push With Split [Value]: " + rk_eachLetterBySplit);

		for (var i = 0; i < rk_letter1.length; i++){
			
			//console.log(rk_letter1.charAt(i));
			var letterByletter = rk_letter1.charAt(i);
			var rk_pushToArray = rk_eachLetter.push(letterByletter);
			//console.log(rk_pushToArray);
			//console.log(rk_eachLetter);
		}

		console.log("Method For + charAt + Push " +rk_eachLetter);


/***************************************************************************************************/

var targetDiv = document.getElementsByClassName("parrafo_titulo_canal")[0];
var checkBv = document.body.contains(targetDiv);
function refreshBV(){		
	if(checkBv === true){
		location.reload();
		clearInterval(refreshIntervalId);
		console.log('refresh!')
	}else{
		console.log("Ready!");
	}	
}

var refreshInterval = setInterval(refreshBV, 10000);

refreshInterval





