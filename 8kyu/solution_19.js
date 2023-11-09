

function updateLight(current) {
    if(current === "green"){
        return "yellow"
    } else if(current === "yellow") {
        return "red"
    }else{
        return "green"
    }
}

function setAlarm(employed, vacation){
    if (employed === true & vacation === false){
        return true
    } else {
        return false
    }
}