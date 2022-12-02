let count = 1;

document.getElementById("slide").checked = true;

setInterval(function(){

}, 2000)

function nexImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("slide"+count).checked = true;
}