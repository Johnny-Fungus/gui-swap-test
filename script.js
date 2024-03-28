/*

if we did one thing last time, do the other thing this time

we need a boolean variable
it needs to be defined once and then modified in the function

variables declared outside of functions have global scope and can be accessed anywhere in the script
variables declared in functions get deleted after the last operation in that function executes
    and as a result can only be accessed inside the function they were created in
*/
let toggle = true
function swapModes(){
    if (toggle === true){
        document.getElementById('closeMode').classList.remove('hidden')
        document.getElementById('bedtimeMode').classList.add('hidden')
        toggle = false
    } else {
        document.getElementById('closeMode').classList.add('hidden')
        document.getElementById('bedtimeMode').classList.remove('hidden')
        toggle = true
    }
}