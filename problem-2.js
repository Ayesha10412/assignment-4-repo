

function sendNotification(email) {

if(email.includes('@')){
    char=email.split('@');
    return char[0].concat(" sent you an email from ",char[1]);
}
else{
    return "Invalid Email";
}

}


