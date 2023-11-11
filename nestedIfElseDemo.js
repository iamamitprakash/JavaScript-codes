isUserPrime = true;
isUserDiscovery = false;
isUserAccorn = true;

if(isUserPrime){//A loop within a loop is called nested loop
    if(isUserDiscovery){
        if(isUserAccorn){
            console.log("Enjoy all Prime, Discovery and Accorn content.");
        }else{
            console.log("Enjoy both Prime and Discovery content.");
        }
    }else if(isUserAccorn){
        console.log("Enjoy both Prime and Accorn content.");
    }else{
        conseole.log("Enjoy Prime content");
    }
}else{
    console.log("Please buy a subscription top enjoy content.");
}