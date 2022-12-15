let a=5;
let b= "";
for(i=1;i<=a;i++){
  for (j=0;j<i;j++){
    document.write(String.fromCharCode(j+65));
  }
  document.write("<br>")
}
