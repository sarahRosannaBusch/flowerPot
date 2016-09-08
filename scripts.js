/*
  var xhr; //to talk to the server on the Netduino, ie: initialize API
  try { xhr = new XMLHttpRequest(); }
  catch(e) { xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
*/

setInterval('loop()', 1000); //update web page every second (change to hour)
setInterval('clock()', 1000); //update clock every second (change to min)

function loop()
{
  var moisture;
  /*
  xhr.open('GET', '../../getAllAnalogPinValues', true); //make readings
  xhr.onreadystatechange = function()
  {
    if(xhr.readyState == 4 && xhr.status == 200) //if everything's cool
    {
      //detect voltage on moisture sensor
      moisture = getXMLValue(xhr.responseXML, 'pin0');
      moisture = analogToVolts(moisture);
      document.getElementById("moisture").innerHTML = "Moisture Voltage: " + moisture + " V";

      dry(moisture); //red led indicates plant needs water
    }
  }
  xhr.send(null);
  */

  graph(moisture); //update moisture graph
}

/*
function getXMLValue(xmlData, pin)
{
  try
  {
    if(xmlData.getElementsByTagName(pin)[0].firstChild.nodeValue)
      return xmlData.getElementsByTagName(pin)[0].firstChild.nodeValue;
    else
      return null;
  }
  catch(err) { return null; }
} */

function analogToVolts(analogValue)
{
  analogValue = 3.3*(analogValue/1024); //convert to volts
  analogValue = analogValue.toFixed(3); //display to three decimals
  return analogValue;
}

/*
function dry(moistureMeter)
{
  if(moistureMeter < 1.000) //turn on warning light
  {
    xhr.open('GET', '../../setDigitalPin?pin=1&state=true', true);
    safeSend();
  }
  else
  {
    xhr.open('GET', '../../setDigitalPin?pin=1&state=false', true);
    safeSend();
  }
}

function safeSend()
{
  xhr.onreadystatechange = function()
  {
    if(xhr.readyState == 4 && xhr.status == 200) {} //wait 'til everything's cool
  }
  xhr.send();
} */

function clock()
{
  var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

  document.getElementById("clock").innerHTML = hour + ':' + minute + ':' + second;
}

var time = 1; //x-axis position (time)
var moist = 150; //y-axis position (moisture level)
function graph(moisture)
{
  //var line1 = document.getElementById('line1');

  var line;
  switch(time)
  {
    case 1:
      line = document.getElementById('line1');
      break;
    case 2:
      line = document.getElementById('line2');
      break;
    case 3:
      line = document.getElementById('line3');
      break;
    case 4:
      line = document.getElementById('line4');
      break;
    case 5:
      line = document.getElementById('line5');
      break;
    case 6:
      line = document.getElementById('line6');
      break;
    case 7:
      line = document.getElementById('line7');
      break;
    case 8:
      line = document.getElementById('line8');
      break;
    case 9:
      line = document.getElementById('line9');
      break;
    case 10:
      line = document.getElementById('line10');
      break;
    case 11:
      line = document.getElementById('line11');
      break;
    case 12:
      line = document.getElementById('line12');
      break;
    case 13:
      line = document.getElementById('line13');
      break;
    case 14:
      line = document.getElementById('line14');
      break;
    case 15:
      line = document.getElementById('line15');
      break;
    case 16:
      line = document.getElementById('line16');
      break;
    case 17:
      line = document.getElementById('line17');
      break;
    case 18:
      line = document.getElementById('line18');
      break;
    case 19:
      line = document.getElementById('line19');
      break;
    case 20:
      line = document.getElementById('line20');
      break;
    case 21:
      line = document.getElementById('line21');
      break;
    case 22:
      line = document.getElementById('line22');
      break;
    case 23:
      line = document.getElementById('line23');
      break;
    case 24:
      line = document.getElementById('line24');
      break;
  }

  line.setAttribute('y', 193-moist);
  line.setAttribute('height', moist);


  if(moist<75) //too dry
    line.setAttribute('fill', 'red');
  else if(moist>125) //too wet
    line.setAttribute('fill', 'skyblue');
  else //just right
    line.setAttribute('fill', 'green');

  moist -= 5;

  if(time < 24)
    time ++;
  else
  {
    time = 1;
    moist = 170;
    document.getElementById('line1').setAttribute('height', 13);
      document.getElementById('line1').setAttribute('y', 180);
    document.getElementById('line2').setAttribute('height', 13);
      document.getElementById('line2').setAttribute('y', 180);
    document.getElementById('line3').setAttribute('height', 13);
      document.getElementById('line3').setAttribute('y', 180);
    document.getElementById('line4').setAttribute('height', 13);
      document.getElementById('line4').setAttribute('y', 180);
    document.getElementById('line5').setAttribute('height', 13);
      document.getElementById('line5').setAttribute('y', 180);
    document.getElementById('line6').setAttribute('height', 13);
      document.getElementById('line6').setAttribute('y', 180);
    document.getElementById('line7').setAttribute('height', 13);
      document.getElementById('line7').setAttribute('y', 180);
    document.getElementById('line8').setAttribute('height', 13);
      document.getElementById('line8').setAttribute('y', 180);
    document.getElementById('line9').setAttribute('height', 13);
      document.getElementById('line9').setAttribute('y', 180);
    document.getElementById('line10').setAttribute('height', 13);
      document.getElementById('line10').setAttribute('y', 180);
    document.getElementById('line11').setAttribute('height', 13);
      document.getElementById('line11').setAttribute('y', 180);
    document.getElementById('line12').setAttribute('height', 13);
      document.getElementById('line12').setAttribute('y', 180);
    document.getElementById('line13').setAttribute('height', 13);
      document.getElementById('line13').setAttribute('y', 180);
    document.getElementById('line14').setAttribute('height', 13);
      document.getElementById('line14').setAttribute('y', 180);
    document.getElementById('line15').setAttribute('height', 13);
      document.getElementById('line15').setAttribute('y', 180);
    document.getElementById('line16').setAttribute('height', 13);
      document.getElementById('line16').setAttribute('y', 180);
    document.getElementById('line17').setAttribute('height', 13);
      document.getElementById('line17').setAttribute('y', 180);
    document.getElementById('line18').setAttribute('height', 13);
      document.getElementById('line18').setAttribute('y', 180);
    document.getElementById('line19').setAttribute('height', 13);
      document.getElementById('line19').setAttribute('y', 180);
    document.getElementById('line20').setAttribute('height', 13);
      document.getElementById('line20').setAttribute('y', 180);
    document.getElementById('line21').setAttribute('height', 13);
      document.getElementById('line21').setAttribute('y', 180);
    document.getElementById('line22').setAttribute('height', 13);
      document.getElementById('line22').setAttribute('y', 180);
    document.getElementById('line23').setAttribute('height', 13);
      document.getElementById('line23').setAttribute('y', 180);
    document.getElementById('line24').setAttribute('height', 13);
      document.getElementById('line24').setAttribute('y', 180);
  }
}
