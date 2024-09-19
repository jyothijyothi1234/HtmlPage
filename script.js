var script=new XMLHttpRequest();
script.open('GET','https://restcountries.com/v3.1/all',true);
script.send();
script.onload=function(){


    var obj=JSON.parse(this.response);
    console.log(obj);
}