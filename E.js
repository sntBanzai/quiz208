/**
 * @author X870
 */
var session = {
	player: "",
	result: 0,
	progress_counter: 0,
};

var highlighted = false;

function main(e){
	'use strict';
	if (typeof e == 'undefined') e = window.event;
	var t = e.srcElement||e.target;
	validate(t);
	clear();
	create(session.progress_counter);
	session.progress_counter++;
	console.log("Progress counter:");
	console.log(session.progress_counter);
	var to_highlight = document.getElementsByTagName('div');
	console.log("to highlight");
	console.log(to_highlight);
	for(var i=0; i<to_highlight.length; i++){
		U.addEvent(to_highlight[i], 'mouseover', highlight);
		U.addEvent(to_highlight[i], 'mouseout', r_highlight);
	}
}

function validate(element){
	'use strict';
	if(session.progress_counter == 0){
		session.player = element.value;
		console.log(element.value);
		console.log(session.player);
	}
	else{
		console.log(element);
		console.log(element.attributes);
		for(var i=0; i<element.attributes.length; i++){
			console.log(element);
			console.log(element.attributes);
			if(element.attributes[i].name == 'class'){
				console.log(element.attributes[i].value);
				if(element.attributes[i].value == "true"){
					session.result++;
					console.log("Session result:");
					console.log(session.result);
					result_history[session.progress_counter-1] = true;
					console.log("Result history:");
					console.log(result_history);
				}
				else{
					console.log("nic nie rób");
				}
		}
	}
		
	}
}

function clear(){
	'use strict';
	document.getElementsByTagName("body")[0].parentNode.removeChild(document.getElementsByTagName("body")[0]);
}

function create(counter){
	'use strict';
	if(counter>=quests.length){
		finalize(session.result);
	}
	else{
		var html = document.getElementsByTagName('html')[0];
    	var new_body = document.createElement('body');
   		html.appendChild(new_body);
   		document.body.innerHTML = quests[counter];
   		var to_attach = document.getElementsByTagName('div');
   		for(var i=0; i<to_attach.length; i++){
   			U.addEvent(to_attach[i], 'click', main);
   		}
	}
}

function finalize(result){
	'use strict';
	var html = document.getElementsByTagName('html')[0];
    var new_body = document.createElement('body');
   	html.appendChild(new_body);
   	var percentage = (session.result/(session.progress_counter)).toFixed(2)*100+' procent';
   	var rezultat = session.result.toString()+' punktów';
   	console.log('rezultat sesji w finalize');
   	console.log(session.result.toString());
   	console.log(percentage);
	document.body.innerHTML = '<h1>Podsumowanie wyników</h1><br><h2>Uzyskałaś</h2>'+rezultat+'<h2>co stanowi</h2>'+percentage+'<h2> poprawnych odpowiedzi.</h2>';
	document.body.innerHTML += '<br><h2>Komentarz</h2><br>';
	if(percentage!='100 procent'){
		document.body.innerHTML += '<h2>To ja się pytam co tak słabo?! Dlaczego nie ma stówki?!</h2>';
		document.body.innerHTML += session.player+'<h2>, czy to na pewno Ty?!</h2>';
	}
	else{
		document.body.innerHTML += '<h2>Gratulacje, jest stówka!</h2>'+session.player+'<h2>, niniejszym otrzymujesz certyfikat Zrytego Beretu!</h2>';
	}
}

function highlight(e){
	'use strict';
	if (typeof e == 'undefined') e = window.event;
	var t = e.srcElement||e.target;
	t.style.backgroundColor = 'rgb(255,255,70)';
}

function r_highlight(e){
	'use strict';
	if (typeof e == 'undefined') e = window.event;
	var t = e.srcElement||e.target;
	t.style.backgroundColor = 'rgb(255,255,255)';
}

window.onload = function(){
	U.$("choosePl").onclick = function(){
		var to_show = document.getElementsByClassName('players');
		console.log(to_show);
		for(var i=0; i<to_show.length; i++){
			to_show[i].style.visibility = 'visible';
		}
		var to_add_lis = document.getElementsByTagName('input');
		console.log(to_add_lis);
		for(var i=0; i<to_add_lis.length; i++){
			U.addEvent(to_add_lis[i], 'click', main);
		}
	};
};
