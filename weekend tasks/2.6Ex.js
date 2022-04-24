// Input , Output Examples ::
// centuryFromYear(1705) returns (18)
// centuryFromYear( 1900) returns (19)
// centuryFromYear(1601) returns (17)
// centuryFromYear(2000) returns (20)

function centuryFromYear(year)
{
  if (year%100===year/100)
  return year/100;
  else
   return Math.ceil(year/100);
}

console.log(centuryFromYear(1810));