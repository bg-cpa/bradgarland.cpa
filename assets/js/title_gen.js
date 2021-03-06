var word1_list = ["enterprising","protean","creative","number-crunching","adopted","poetic","local","community","collaborative","caffeinated","nerdy","Deep South","Southern","introverted","synergistic","crypto","SEO optimized","A/B tested"]
var word1 = word1_list[Math.floor(Math.random() * word1_list.length)];
var word2_list = ["learner","organizer","creator","accountant","innovator","Huntsvillian","professional","entrepreneur","bean counter","Korean","nerd","husband","father","dynamo","Auburn alumnus","homeowner","guru","mogul","thinker","Alabamian","black belt","banjoist","movie extra","taxpayer","mathemagician","Wii scratch golfer","Guitar Hero","Netflix binger"]
var word2 = word2_list[Math.floor(Math.random() * word2_list.length)];	

document.getElementById("title").innerHTML = word1 + " " + word2;
