

function calculateFinalScore(obj) {
    
    if(typeof obj.name =='string' && typeof obj.testScore== 'number' && typeof obj.schoolGrade == 'number'
         && typeof  obj.isFFamily == 'boolean' ){
            if( (obj. testScore <= 50) && ( ( obj.schoolGrade <=30))){

if(obj.isFFamily==true){
    let total=obj.testScore + obj.schoolGrade + 20;
    if(total>=80){
       
        return true;
        
    }
    else{
        return false;
    }
}

else{
    let total=obj.testScore+obj.schoolGrade;
    if(total>=80){
       

        return true;
    }
    else{
        return false;
    }
}
            }
            else{
                return false;
            }

    }

else{
    return  "Invalid Input";
}

}

