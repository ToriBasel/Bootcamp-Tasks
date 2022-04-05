function describeCountry(country,population,capitalCity)
{
  return (`${country}has ${population} people and its capital city is ${capitalCity}`);
}

var asia=describeCountry('china ','2billion','Hong Kong');
var africa=describeCountry('Egypt ','110million','Cairo');
var europe=describeCountry('France ','50million','Paris');
console.log(asia);
console.log(africa);
console.log(europe);