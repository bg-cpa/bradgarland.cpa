var word1_list = ["enterprising","creative","number-crunching","adopted","poetic","local","community","collaborative","caffeinated","nerdy","Deep South"]
var word1 = word1_list[Math.floor(Math.random() * word1_list.length)];
var word2_list = ["learner","organizer","creator","accountant","innovator","Huntsvillian","professional","entrepreneur","bean counter","Korean","nerd"]
var word2 = word2_list[Math.floor(Math.random() * word2_list.length)];	

document.getElementById("title").innerHTML = word1 + " " + word2;
