function submit(){
  var career=document.getElementById('career').value;
  var name=document.getElementById('name').value;
  var Branch=document.getElementById('Branch').value;
  var PhNo=document.getElementById('PhNo').value;
  var gmail=document.getElementById('gmail').value;
  var Degree=document.getElementById('Degree').value;
  var dBranch=document.getElementById('dBranch').value;
  var marks=document.getElementById('marks').value;
  var iDegree=document.getElementById('iDegree').value;
  var iBranch=document.getElementById('iBranch').value;
  var imarks=document.getElementById('imarks').value;
  var Medium=document.getElementById('Medium').value;
  var School=document.getElementById('School').value;
  var smarks=document.getElementById('smarks').value;
  var Skills=document.getElementById('Skills').value;

  var indexedDB=window.indexedDB||window.mozIndexedDB||window.webKitIndexedDB||window.msIndexedDB;

//ternary Operation
indexedDB?console.log("Success"):console.log("browser Not Supported");
//createing DataBase
var request=indexedDB.open("DBMS",1);
var result;
var store;
console.log(request);
//upgradeneede
request.onupgradeneeded=function(e) {
  result=e.target.result;
  store=result.createObjectStore("resume",{KeyPath:'Id',autoIncrement:true});
}
//Success
request.onsuccess=function(e){
  console.log("reached successfully");
  result=e.target.result;
  var tx=result.transaction("resume",'readwrite');
  store=tx.objectStore("resume");
  store.put(
    {
      CO:career,
      Name:name,
      branch:Branch,
      phno:PhNo,
      Gmail:gmail,
      degree:Degree,
      Dbranch:dBranch,
      Marks:marks,
      Idagree:iDegree,
      Ibanch:iBranch,
      Imarks:imarks
    });

}
//error

request.onerror=function(e){

}



}
