var quests = [
	'<h1 class="question">1. Pracownicy z pokoju 208 posiadają:</h1><div class="answer"><h2 class="false">a) mordy</h2></div><div class="answer"><h2 class="true">b) ryje</h2></div><div class="answer"><h2 class="false">c) gęby</h2></div><div class="answer"><h2 class="false">d) facjaty</h2></div>',
	'<h1 class="question">2. Dokończ frazę: "Trzeba mieć jaja, a nie..."</h1><div class="answer"><h2 class="false">a) pisanki</h2></div><div class="answer"><h2 class="false">b) wydmuszki</h2></div><div class="answer"><h2 class="true">c) kinder niespodzianki</h2></div><div class="answer"><h2 class="false">d) kinder bueno</h2></div>',
	'<h1 class="question">3. Największym łasuchem w pokoju 208 jest:</h1><div class="answer"><h2 class="true">a) Boczek</h2></div><div class="answer"><h2 class="true">b) Boczek</h2></div><div class="answer"><h2 class="true">c) Boczek</h2></div><div class="answer"><h2 class="true">d) Boczkomik</h2></div>',
	'<h1 class="question">4. Które z poniższych powiedzonek nie jest powiedzonkiem Xeny:</h1><div class="answer"><h2 class="false">a) Joł bejbe, joł bejbe!</h2></div><div class="answer"><h2 class="false">b) No, no... no przepraszam!!!</h2><div class="answer"><h2 class="true">c) Luzuj majty!</h2></div><div class="answer"><h2 class="false">d) Kiedy powiem sobie dość!</h2></div>',
	'<h1 class="question">5. Która z poniższych ksywek nie należy do Jerzego M.:</h1><div class="answer"><h2 class="false">a) Gollum</h2></div><div class="answer"><h2 class="false">b) Erotoman-Gawędziarz</h2></div><div class="answer"><h2 class="false">c) Tofik</h2></div><div class="answer"><h2 class="true">d) Porzucek</h2></div>',
	'<h1 class="question">6. Dzidzia Buki ma na imię</h1><div class="answer"><h2 class="false">a) Justynka</h2></div><div class="answer"><h2 class="true">b) Natalka</h2></div>',
	'<h1 class="question">7. Która z poniższych ksywek nie należy do Agaty M.:</h1><div class="answer"><h2 class="false">a) Maderfaker</h2></div><div class="answer"><h2 class="false">b) Big Gała</h2></div><div class="answer"><h2 class="false">c) Sarnie Oczy</h2></div><div class="answer"><h2 class="true">d) Mała Mi</h2></div>',
	'<h1 class="question">8. Największym amatorem mokrych drożdżówek w pok. 208 jest:</h1><div class="answer"><h2 class="false">a) Magda</h2></div><div class="answer"><h2 class="false">b) Marta</h2></div><div class="answer"><h2 class="false">c) Asia</h2></div><div class="answer"><h2 class="true">d) Agata</h2></div>',
	'<h1 class="question">9. Największym amatorem draży w pokoju 208 jest:</h1><div class="answer"><h2 class="true">a) Magda</h2></div><div class="answer"><h2 class="false">b) Marta</h2></div><div class="answer"><h2 class="false">c) Asia</h2></div><div class="answer"><h2 class="false">d) Agata</h2></div>',
	'<h1 class="question">10. Zapach gotowanych parówek szczególnie "lubi":</h1><div class="answer"><h2 class="false">a) Magda</h2></div><div class="answer"><h2 class="false">b) Marta</h2></div><div class="answer"><h2 class="true">c) Asia</h2></div><div class="answer"><h2 class="false">d) Agata</h2></div>',
	'<h1 class="question">11. Pić coca colę szczególnie lubi (uwaga podchwytliwe!):</h1><div class="answer"><h2 class="false">a) Magda</h2></div><div class="answer"><h2 class="false">b) Marta</h2></div><div class="answer"><h2 class="false">c) Agata lub Asia</h2></div><div class="answer"><h2 class="true">d) żadna odpowiedź nie jest poprawna</h2></div>',
	'<h1 class="question">12. Która z powyżej wymienionych osób nie odwiedzała nas w pokoju 208:</h1><div class="answer"><h2 class="false">a) chudy Krzysztof, polonista</h2></div><div class="answer"><h2 class="false">b) Ewelina zza ściany</h2></div><div class="answer"><h2 class="false">c) *sunie*</h2></div><div class="answer"><h2 class="true">d) Zboczuch</h2></div>',
	'<h1 class="question">13. "Czarna mamba" to pseudonim nadany przez Zboczucha:</h1><div class="answer"><h2 class="true">a) Xenie</h2></div><div class="answer"><h2 class="false">b) Boczkowi</h2></div><div class="answer"><h2 class="false">c) Maderowi</h2></div><div class="answer"><h2 class="false">d) Gollumowi</h2></div>',
	'<h1 class="question">14. Która z poniżej wymienionych osób rozbijała się po Dubaju:</h1><div class="answer"><h2 class="false">a) Szyfcia</h2></div><div class="answer"><h2 class="false">b) Konował</h2></div><div class="answer"><h2 class="false">c) Poślad</h2></div><div class="answer"><h2 class="true">d) Moszczu</h2></div>',
	'<h1 class="question">15. Dokończ frazę: "Ty jesteś..."</h1><div class="answer"><h2 class="false">a) wilczycą</h2></div><div class="answer"><h2 class="false">b) wampirzycą</h2></div><div class="answer"><h2 class="true">c) smoczycą</h2></div><div class="answer"><h2 class="false">d) buuuuuuda!</h2></div>',
	'<h1 class="question">16. Kto z poniżej wymienionych na pewno nie golił się pod pachami:</h1><div class="answer"><h2 class="false">a) Porzucek</h2></div><div class="answer"><h2 class="false">b) Zboczuch</h2></div><div class="answer"><h2 class="true">c) Gollum</h2></div><div class="answer"><h2 class="false">d) Węglorz</h2></div>',
	'<h1 class="question">17. Największym żartowinisiem w pokoju 104 była:</h1><div class="answer"><h2 class="false">a) Buka</h2></div><div class="answer"><h2 class="false">b) Xena</h2></div><div class="answer"><h2 class="true">c) Boczek</h2></div><div class="answer"><h2 class="false">d) Mader</h2></div>',
	'<h1 class="question">18. Syn Asi będzie miał na imię:</h1><div class="answer"><h2 class="false">a) Krzysztof</h2></div><div class="answer"><h2 class="true">b) Krystian</h2></div><div class="answer"><h2 class="false">c) Kamil</h2></div><div class="answer"><h2 class="false">d) Keruj</h2></div>',
	'<h1 class="question">19. Największym oszustem zegarkowo-godzinowym w pokoju 104 była:</h1><div class="answer"><h2 class="false">a) Buka</h2></div><div class="answer"><h2 class="false">b) Xena</h2></div><div class="answer"><h2 class="false">c) Boczek</h2></div><div class="answer"><h2 class="true">d) Mader</h2></div>',
	'<h1 class="question">20. Największym odludkiem w pokoju 104 była:</h1><div class="answer"><h2 class="true">a) Buka</h2></div><div class="answer"><h2 class="false">b) Xena</h2></div><div class="answer"><h2 class="false">c) Boczek</h2></div><div class="answer"><h2 class="false">d) Mader</h2></div>',
	'<h1 class="question">21. Kto z lokatorów pok. 208 był najbardziej humorzasty:</h1><div class="answer"><h2 class="true">a) Gollum</h2></div><div class="answer"><h2 class="true">b) Erotoman-Gawędziarz</h2></div><div class="answer"><h2 class="true">c) Mała Mi</h2></div><div class="answer"><h2 class="true">d) Tofik</h2></div>',
	'<h1 class="question">22. Lokatorzy pok. 104/208 to inaczej:</h1><div class="answer"><h2 class="false">a) rodzina Adamsów</h2></div><div class="answer"><h2 class="false">b) rodzina zastępcza</h2></div><div class="answer"><h2 class="true">c) faker family</h2></div><div class="answer"><h2 class="true">d) rodzina Muminków</h2></div>'
];

var result_history = [false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false,];