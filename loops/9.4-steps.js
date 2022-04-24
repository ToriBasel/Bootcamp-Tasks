function steps(N){
  for (let i=0;i<N;i++)
  {
    console.log("");
    for (let j=0;j<i;j++)
    {
      process.stdout.write("#");
    }
  }
}
