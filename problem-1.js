
function calculateTax(income, expenses) {

if( income>=0 && expenses>=0 && income>=expenses ){
    let tax=((income - expenses)*(20/100));
    return tax;
}

else{
    return  "Invalid Input";
}
}


