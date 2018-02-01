var video;
var vidW = 640;
var vidH = 480;
var vidX = 0;
var vidY = 300;
var vScale = 20;
var runningArray = [];
var flag_Algerian;
var flag_American;
var flag_Argentinian;
var flag_Austrian;
var flag_Bahamas;
var flag_Bangladesh;
var flag_Belgium;
var flag_Bhutan;
var flag_Brazil;
var flag_Canada;
var flag_Chile;
var flag_China;
var flag_Columbia;
var flag_Croatia;
var flag_Cuba;
var flag_Cyprus;
var flag_Czech;
var flag_Danish;
var flag_English;
var flag_Estonian;
var flag_Finland;
var flag_French;
var flag_Georgia;
var flag_German;
var flag_Greek;
var flag_Iceland;
var flag_India;
var flag_Indonesia;
var flag_Ireland;
var flag_Israel;
var flag_Italian;
var flag_Jamaican;
var flag_Japanese;
var flag_Kenyan;
var flag_Kuwait;
var flag_Lebanese;
var flag_Lesotho;
var flag_Libya;
var flag_Luxembourg;
var flag_Malta;
var flag_Nepal;
var flag_Nigeria;
var flag_North_Korea;
var flag_Norway;
var flag_Panama;
var flag_Poland;
var flag_Portugal;
var flag_Qatar;
var flag_Saudi_Arabia;
var flag_Seychelles;
var flag_South_Africa;
var flag_South_Korean;
var flag_Spain;
var flag_Swedish;
var flag_Swiss;
var flag_Thai;
var flag_Trinidad;
var flag_Tunisia;
var flag_Turkey;
var flag_UAE;
var flag_Venezuela;
var flag_Vietnam;
var flag_Yemen;
var flag_Zambia;
var flag_Zimbabwe;
var flagArray;
var flagQuestion = prompt("What is your favorite country?");

var flagObj;
var lastChecked = 0;
var ind = 0;

function preload(){
  flag_Algerian = loadImage("assets/Algerian_Flag_Emoji.PNG");
  flag_American = loadImage("assets/American_Flag_Emoji.PNG");
  flag_Argentinian = loadImage("assets/Argentinian_Flag_Emoji.PNG");
  flag_Austrian = loadImage("assets/Austrian_Flag_Emoji.PNG");
  flag_Bahamas = loadImage("assets/Bahamas_Flag_Emoji.PNG");
  flag_Bangladesh = loadImage("assets/Bangladesh_Flag_Emoji.PNG");
  flag_Belgium = loadImage("assets/Belgium_Flag_Emoji.PNG");
  flag_Bhutan = loadImage("assets/Bhutan_Flag_Emoji.PNG");
  flag_Brazil = loadImage("assets/Brazilian_Flag_Emoji.PNG");
  flag_Canada = loadImage("assets/Canadian_Flag_Emoji.PNG");
  flag_Chile = loadImage("assets/Chilean_Flag_Emoji.PNG");
  flag_China = loadImage("assets/Chinese_Flag_Emoji.PNG");
  flag_Columbia = loadImage("assets/Columbian_Flag_Emoji.PNG");
  flag_Croatia = loadImage("assets/Croatian_Flag_Emoji.PNG");
  flag_Cuba = loadImage("assets/Cuban_Flag_Emoji.PNG");
  flag_Cyprus = loadImage("assets/Cyrpus'_Flag_Emoji.PNG");
  flag_Czech = loadImage("assets/Czech_Republic's_Flag_Emoji.PNG");
  flag_Danish = loadImage("assets/Danish_Flag_Emoji.PNG");
  flag_English = loadImage("assets/English_Flag_Emoji.PNG");
  flag_Estonian = loadImage("assets/Estonian_Flag_Emoji.PNG");
  flag_Finland = loadImage("assets/Finland's_Flag_Emoji.PNG");
  flag_French = loadImage("assets/French_Flag_Emoji.PNG");
  flag_Georgia = loadImage("assets/Georgian_Flag_Emoji.PNG");
  flag_German = loadImage("assets/German_Flag_Emoji.PNG");
  flag_Greek = loadImage("assets/Greek_Flag_Emoji.PNG");
  flag_Iceland = loadImage("assets/Icelandic_Flag_Emoji.PNG");
  flag_India = loadImage("assets/Indian_Flag_Emoji.PNG");
  flag_Indonesia = loadImage("assets/Indonesian_Flag_Emoji.PNG");
  flag_Ireland = loadImage("assets/Ireland's_Flag_Emoji.PNG");
  flag_Israel = loadImage("assets/Israel's_Flag_Emoji.PNG");
  flag_Italian = loadImage("assets/Italian_Flag_Emoji.PNG");
  flag_Jamaican = loadImage("assets/Jamaican_Flag_Emoji.PNG");
  flag_Japanese = loadImage("assets/Japanese_Flag_Emoji.PNG");
  flag_Kenyan = loadImage("assets/Kenyan_Flag_Emoji.PNG");
  flag_Kuwait = loadImage("assets/Kuwait_Flag_Emoji.PNG");
  flag_Lebanese = loadImage("assets/Lebanese_Flag_Emoji.PNG");
  flag_Lesotho = loadImage("assets/Lesotho_Flag_Emoji.PNG");
  flag_Libya = loadImage("assets/Libyan_Flag_Emoji.PNG");
  flag_Luxembourg = loadImage("assets/Luxembourg_Flag_Emoji.PNG");
  flag_Malta = loadImage("assets/Maltan_Flag_Emoji.PNG");
  flag_Nepal = loadImage("assets/Nepal's_Flag_Emoji.PNG");
  flag_Nigeria = loadImage("assets/Nigerian_Flag_Emoji.PNG");
  flag_North_Korea = loadImage("assets/North_Korean_Flag_Emoji.PNG");
  flag_Norway = loadImage("assets/Norwegian_Flag_Emoji.PNG");
  flag_Panama = loadImage("assets/Panama_Flag_Emoji.PNG");
  flag_Poland = loadImage("assets/Polish_Flag_Emoji.PNG");
  flag_Portugal = loadImage("assets/Portuguese_Flag_Emoji.PNG");
  flag_Qatar = loadImage("assets/Qatar_Flag_Emoji.PNG");
  flag_Saudi_Arabia = loadImage("assets/Saudi_Arabian_Flag_Emoji.PNG");
  flag_Seychelles = loadImage("assets/Seychelles_Flag_Emoji.PNG");
  flag_South_Africa = loadImage("assets/South_African_Flag_Emoji.PNG");
  flag_South_Korean = loadImage("assets/South_Korean_Flag_Emoji.PNG");
  flag_Spain = loadImage("assets/Spanish_Flag_Emoji.PNG");
  flag_Swedish = loadImage("assets/Swedish_Flag_Emoji.PNG");
  flag_Swiss = loadImage("assets/Swiss_Flag_Emoji.PNG");
  flag_Thai = loadImage("assets/Thai_Flag_Emoji.PNG");
  flag_Trinidad = loadImage("assets/Trinidad_and_Tobago_Flag_Emoji.PNG");
  flag_Tunisia = loadImage("assets/Tunisian_Flag_Emoji.PNG");
  flag_Turkey = loadImage("assets/Turkey_Flag_Emoji.PNG");
  flag_UAE = loadImage("assets/UAE_Flag_Emoji.PNG");
  flag_Venezuela = loadImage("assets/Venezuelan_Flag_Emoji.PNG");
  flag_Vietnam = loadImage("assets/Vietnamese_Flag_Emoji.PNG");
  flag_Yemen = loadImage("assets/Yemen_Flag_Emoji.PNG");
  flag_Zambia = loadImage("assets/Zambian_Flag_Emoji.PNG");
  flag_Zimbabwe = loadImage("assets/Zimbabwe_Flag_Emoji.PNG");

  // flag_Algerian.resize(vScale, vScale);
  // flag_American.resize(vScale, vScale);
  // flag_Argentinian.resize(vScale, vScale);
  // flag_Austrian.resize(vScale, vScale);
  // flag_Bahamas.resize(vScale, vScale);
  // flag_Bangladesh.resize(vScale, vScale);
  // flag_Belgium.resize(vScale, vScale);
  // flag_Bhutan.resize(vScale, vScale);
  // flag_Brazil.resize(vScale, vScale);
  // flag_Canada.resize(vScale, vScale);
  // flag_Chile.resize(vScale, vScale);
  // flag_China.resize(vScale, vScale);
  // flag_Columbia.resize(vScale, vScale);
  // flag_Croatia.resize(vScale, vScale);
  // flag_Cuba.resize(vScale, vScale);
  // flag_Cyprus.resize(vScale, vScale);
  // flag_Czech.resize(vScale, vScale);
  // flag_Danish.resize(vScale, vScale);
  // flag_English.resize(vScale, vScale);
  // flag_Estonian.resize(vScale, vScale);
  // flag_Finland.resize(vScale, vScale);
  // flag_French.resize(vScale, vScale);
  // flag_Georgia.resize(vScale, vScale);
  // flag_German.resize(vScale, vScale);
  // flag_Greek.resize(vScale, vScale);
  // flag_Iceland.resize(vScale, vScale);
  // flag_India.resize(vScale, vScale);
  // flag_Indonesia.resize(vScale, vScale);
  // flag_Ireland.resize(vScale, vScale);
  // flag_Israel.resize(vScale, vScale);
  // flag_Italian.resize(vScale, vScale);
  // flag_Jamaican.resize(vScale, vScale);
  // flag_Japanese.resize(vScale, vScale);
  // flag_Kenyan.resize(vScale, vScale);
  // flag_Kuwait.resize(vScale, vScale);
  // flag_Lebanese.resize(vScale, vScale);
  // flag_Lesotho.resize(vScale, vScale);
  // flag_Libya.resize(vScale, vScale);
  // flag_Luxembourg.resize(vScale, vScale);
  // flag_Malta.resize(vScale, vScale);
  // flag_Nepal.resize(vScale, vScale);
  // flag_Nigeria.resize(vScale, vScale);
  // flag_North_Korea.resize(vScale, vScale);
  // flag_Norway.resize(vScale, vScale);
  // flag_Panama.resize(vScale, vScale);
  // flag_Poland.resize(vScale, vScale);
  // flag_Portugal.resize(vScale, vScale);
  // flag_Qatar.resize(vScale, vScale);
  // flag_Saudi_Arabia.resize(vScale, vScale);
  // flag_Seychelles.resize(vScale, vScale);
  // flag_South_Africa.resize(vScale, vScale);
  // flag_South_Korean.resize(vScale, vScale);
  // flag_Spain.resize(vScale, vScale);
  // flag_Swedish.resize(vScale, vScale);
  // flag_Swiss.resize(vScale, vScale);
  // flag_Thai.resize(vScale, vScale);
  // flag_Trinidad.resize(vScale, vScale);
  // flag_Tunisia.resize(vScale, vScale);
  // flag_Turkey.resize(vScale, vScale);
  // flag_UAE.resize(vScale, vScale);
  // flag_Venezuela.resize(vScale, vScale);
  // flag_Vietnam.resize(vScale, vScale);
  // flag_Yemen.resize(vScale, vScale);
  // flag_Zambia.resize(vScale, vScale);
  // flag_Zimbabwe.resize(vScale, vScale);


}


function setup() {
  vidX = (windowWidth - vidW) / 2;
  canvas = createCanvas(640, 480);
  canvas.position(vidX, vidY);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(64, 48);
  video.id("video");
  video.hide();
  flagObj = new Flags();
  flagObj.shuffleFlags();
  setName();
}

function draw() {
  background(0);
  flagObj.display();
  if(millis() - lastChecked > 3500){
    flagObj.shuffleFlags();
    lastChecked = millis();
    //ind++;
  }
}

function Flags(){
  this.flagArray = [flag_Algerian, flag_American, flag_Argentinian, flag_Austrian, flag_Bahamas, flag_Bangladesh, flag_Belgium, flag_Bhutan, flag_Brazil, flag_Canada, flag_Chile, flag_China, flag_Columbia, flag_Croatia, flag_Cuba, flag_Cyprus, flag_Czech, flag_Danish, flag_English, flag_Estonian, flag_Finland, flag_French, flag_Georgia, flag_German, flag_Greek, flag_Iceland, flag_India, flag_Indonesia, flag_Ireland, flag_Israel, flag_Italian, flag_Jamaican, flag_Japanese, flag_Kenyan, flag_Kuwait, flag_Lebanese, flag_Lesotho, flag_Libya, flag_Luxembourg, flag_Malta, flag_Nepal, flag_Nigeria, flag_North_Korea, flag_Norway, flag_Panama, flag_Poland, flag_Portugal, flag_Qatar, flag_Saudi_Arabia, flag_Seychelles, flag_South_Africa, flag_South_Korean, flag_Spain, flag_Swedish, flag_Swiss, flag_Thai, flag_Trinidad, flag_Tunisia, flag_Turkey, flag_UAE, flag_Venezuela, flag_Vietnam, flag_Yemen, flag_Zambia, flag_Zimbabwe];
  this.currentFlags = [0, 0, 0, 0, 0];


  this.shuffleFlags = function() {
    this.currentFlags[0] = getFirstFlag();
    for(var i = 1; i < this.currentFlags.length; i++) {
      this.currentFlags[i] = floor(random(this.flagArray.length));
    }
  }

  this.display = function(){
    video.loadPixels();
    //loadPixels();
    if (video.pixels.length > 0) {

      for (var y = 0; y < 48; y++) {
        for (var x = 0; x < 64; x++) {
          var index = (64 - x - 1 + (y * 64))*4;
          var r = video.pixels[index+0];
          var g = video.pixels[index+1];
          var b = video.pixels[index+2];

          var average = (r + g + b) / 3;
          var maxV = this.currentFlags.length - 1;
          var flagIndex = constrain(floor(map(average,0, 255, 0, maxV+3)), 0, maxV);


          rectMode(CENTER);
          // console.log(flagIndex, this.flagArray[this.currentFlags[flagIndex]]);
          image(this.flagArray[this.currentFlags[flagIndex]], x*vScale, y*vScale,vScale, vScale);
          //image(this.flagArray[ind%this.flagArray.length], x*vScale, y*vScale);
          //image(this.flagArray[this.currentFlags[0]], x*vScale, y*vScale,vScale, vScale);
        }
      }
    }

  }
}

function getFirstFlag() {
  if (flagQuestion === "") return 1;
  flagQuestion = flagQuestion.charAt(0).toUpperCase() + flagQuestion.slice(1);
  // this.flagArray = [flag_Algerian, flag_American, flag_Argentinian, flag_Austrian, flag_Bahamas, flag_Bangladesh, flag_Belgium, flag_Bhutan, flag_Brazil, flag_Canada, flag_Chile, flag_China, flag_Columbia, flag_Croatia, flag_Cuba, flag_Cyprus, flag_Czech, flag_Danish, flag_English, flag_Estonian, flag_Finland, flag_French, flag_Georgia, flag_German, flag_Greek, flag_Iceland, flag_India, flag_Indonesia, flag_Ireland, flag_Israel, flag_Italian, flag_Jamaican, flag_Japanese, flag_Kenyan, flag_Kuwait, flag_Lebanese, flag_Lesotho, flag_Libya, flag_Luxembourg, flag_Malta, flag_Nepal, flag_Nigeria, flag_North_Korea, flag_Norway, flag_Panama, flag_Poland, flag_Portugal, flag_Qatar, flag_Saudi_Arabia, flag_Seychelles, flag_South_Africa, flag_South_Korean, flag_Spain, flag_Swedish, flag_Swiss, flag_Thai, flag_Trinidad, flag_Tunisia, flag_Turkey, flag_UAE, flag_Venezuela, flag_Vietnam, flag_Yemen, flag_Zambia, flag_Zimbabwe];

  var countries = ["Algeria", "America", "Argentina", "Austria", "Bahamas", "Banglagesh", "Belgium", "Bhutan", "Brazil", "Canada","Chile", "China", "Columbia","Croatia","Cuba", "Cyprus", "Czech Republic", "Denmark", "United Kingdom","Estonia", "Finland", "France","Georgia", "Germany", "Greece", "Iceland", "India", "Indonesia", "Ireland","Israel", "Italy","Jamaica","Japan","Kenya", "Kuwait","Lebanon", "Lesotho", "Libya","Luxembourg","Malta","Nepal","Nigeria","North Korea","Norway","Panama", "Poland","Portugal","Qatar", "Saudi Arabia","Seychelles","South Africa","South Korea","Spain","Sweden","Switzerland" ,"Thailand","Trinidad", "Tunisia","Turkey","UAE","Venezuela","Vietnam","Yemen","Zambia", "Zimbabwe"];
  var flag = countries.indexOf(flagQuestion);
  if(flag === -1) return 1;
  console.log("flag:", flag, countries[flag]);
  return flag;
}
function setName() {
   // textSize(30);
   // var n = names[currentEffect];
   // text("by " + n, (width - textWidth(n)) / 2, 40);
   nameDiv = select("#nameDiv");
   nameDiv.html("Trym Gudvangen");
}
