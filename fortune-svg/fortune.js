
var badfortunes=["will have a very bad day.", "should probably think twice before leaving the house.", "might accidentally get themselves killed.", "will not only make it a bad day for themselves, but everyone around them."];
var badwhen=[" The worst part of the day will happen because", " The day will start off as normal, but it will all go downhill because", " This is because", " Everything will be horrible, but the worst part for them will be how"];
var badwhy=[" they will make a really stupid mistake.", "they will eat expired food from the school store and have horrible bowel movements."," they will get caught breaking a law.", " they will contract rabies from the school goats.", " they will get caught snitching and nobody will ever trust them again."," they will say something stupid as a joke and everyone will think they were being serious so everyone will think they are really dense.", " they will be horribly injured.", " someone will point out all their flaws in immaculate detail, especially the ones they are self concious about."];
var badday=[" This will be, without a doubt, the worst day of their life, ", " This day will be so bad that they will never be able to recover from the trauma, ", "They will probably need extensive therapy in order to recover from today, "];
var badconnect=["but it will only happen if", "but it will be okay if", "and it will make things even worse if", "and it could happen again if",
"and just when they think it can't get any worse, it will once", "but the day can at least end on a somewhat positive note if", "and God forbid", "and unless they want tomorrow to go as badly, it is super important that",
"and it wouldn't even be that big of a deal, but the situation will spiral out of control once"];
var badfortunes2=[" they apologize right away.", " they just laugh it off.", " they blame it all on someone else", " they move to a new country under a different name", " they complain about it to everyone they see.", " someone snitches to the teachers about what happened."];

var goodfortunes=["will have a better day than expected.","won't have a single problem.", "will have the most fun they've had in a while.", "will have a day like no other."];
var goodwhen=[" The highlight of the day is when ", " This is partially because ", " This is because ", " The day will mainly be good because "];
var goodwhy=[" they will recieve good news.", " they will have a healthy breakfast and have good energy.", " they'll find a penny on the ground.", " they'll throw a pencil at the ceiling and it will stick on the first try.",
" they will get a good eight hours of sleep", " their skin will clear up.", " they will finally be able to do what they've always wanted to do.", " they will strengthen their friendships.", " Eve will finally be able to say for sure what school she's going to next year so now nobody will ask her what school she's going to anymore because she swears the next person who asks her is going to get decked."];
var goodday=[" It really will be the best day of their life, ", " It will be an amazing day, "];
var goodconnect=["but that could change if", "and they can improve their day even more if", "but their luck will run out if", "and the only way to make the day go bad is if"];
var goodfortunes2=[" they sit in Dr. Urbano's chair.", " they share some of their good fortune with others.",
" they rub their good luck in everyone else's faces to make them jealous."];

class fortuneTeller {
  constructor(yourName){
    this.yourName = yourName !== 'undefined' ? yourName : "X";

  }
  choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }
  chooseTxt(choices) {
    var t = this.choose(choices);
    this.txt += t;
    this.arr.push(t);
  }

  getFortune(style="str") {
    var s=Math.floor(Math.random() * 2);
    this.txt="Today, " + this.yourName + " ";
    this.arr = [];

    if (s==0){
      this.chooseTxt(badfortunes);
      this.chooseTxt(badwhen);
      this.chooseTxt(badwhy);
      this.chooseTxt(badday);
      this.chooseTxt(badconnect);
      this.chooseTxt(badfortunes2);

    }
    else{
      this.chooseTxt(goodfortunes);
      this.chooseTxt(goodwhen);
      this.chooseTxt(goodwhy);
      this.chooseTxt(goodday);
      this.chooseTxt(goodconnect);
      this.chooseTxt(goodfortunes2);
    }

    if (style === "arr"){
      return this.arr;
    } else {
      return this.txt;
    }

  }

}
