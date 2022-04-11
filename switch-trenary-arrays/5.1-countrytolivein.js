function countryToLiveIn(lang,Isisland,population,country){
if (typeof (country===String) && typeof (Isisland ===Boolean) && typeof (population===Number)){
if(lang==="English" && population<50 && Isisland===false)
{
  console.log(`you should live in ${country}`)
}
else 
console.log(`${country} doesnt meet your criteria`)
}
else
console.log("your input is invalid");
}