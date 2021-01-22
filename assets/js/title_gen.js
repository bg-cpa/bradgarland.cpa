var word1_list = ["civic","creative","organized","adopted","poetic","local","reluctant","community",]
var word1 = word1_list[Math.floor(Math.random() * word1_list.length)];
var word2_list = ["leader","organizer","creative","accountant","innovator","Huntsvillian","professional"]
var word2 = word2_list[Math.floor(Math.random() * word2_list.length)];	

document.getElementById("title").innerHTML = word1 + " " + word2;
