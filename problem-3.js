

function checkDigitsInName(name) {

if(typeof name == 'string'){
  let count=0;
  let sum=0;
for(let i=0; i<name.length; i++){
    let letter=name[i];

    if( isNaN(letter)==false)
    {
        count++;
    }
    else if((letter>='a'&& letter<='z')|| ((letter>='A'&& letter<='Z'))){

        sum++;
    }
 }
 if(count>=1 && sum>=1){
    return true;
 }
 else{
    return false;
 }

}
else{
    return  "Invalid Input";
}

}
