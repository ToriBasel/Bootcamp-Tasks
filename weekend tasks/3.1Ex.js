function  nb_year(p0,per,aug,p)
{
  let count=0;
  while (p0<p)
  {
    p0=p0+(p0*per/100)+aug;
    count++;
  }
  return count;
}

console.log(nb_year(1000, 2, 50, 1200));