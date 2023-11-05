// 1.a Get all the countries from Asia continent/region using Filter function
var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response
    var result = JSON.parse(data)
    var output = result.filter((ele) => ele.region==="Asia")
    output.map((elem) =>console.log(elem.name.common))
}

// 1.b Get all the countries with a population of less than 2 lakhs using Filter function
var request1 = new XMLHttpRequest()
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function(){
    var data1 = request1.response
    var result1 = JSON.parse(data1)
    var output1 = result1.filter((name) => name.population<200000)
    output1.map((nam) => console.log(nam.name.common))
}

// 1.c Print the following details name, capital, flag,using forEach function
var request3 = new XMLHttpRequest()
request3.open("GET","https://restcountries.com/v3.1/all",true)
request3.send();
request3.onload = function(){
    var data3 = request3.response
    var result3 = JSON.parse(data3)
    var output3 = result3.forEach((key) => console.log(`name: ${key.name.common}, capital: ${key.capital}, flag: ${key.flag}`))
}

// 1.d Print the total population of countries using reduce function
var request4 = new XMLHttpRequest()
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send();
request4.onload = function(){
    var data4 = request4.response
    var result4 = JSON.parse(data4)
    var output2 = result4.reduce((acc,cv) => acc+cv.population,0)
    console.log(output2);
}

// e. Print the country that uses US dollars as currency.
var request2 = new XMLHttpRequest()
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send();
request2.onload = function(){
    var data2 = request2.response
    var result2 = JSON.parse(data2)
    var currency = result2.filter((value) => value.currencies && value.currencies.USD)
    currency.forEach((value) => console.log(value.name.common))
}