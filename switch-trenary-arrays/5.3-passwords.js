function validpass(password){
  if(password.length>7)
  console.log("strong");
  else
  console.log("weak");
}

function validpassterany(password){
  password.length>7?console.log("strong"):console.log("weak");
}

function validpasslogical(password){
  return(
    password.length>7 && "strong" || "weak"
  );
}
