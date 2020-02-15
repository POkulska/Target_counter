let workdayTarget = {
    videoTarget:0,
    commentTarget:0,
}

function getTarget() {

}

function calcTargetWeigth() {
    let videoWeight: 


//     videoWeight: videoTarget/videoTarget,
//     commentWeigth: videoTarget/commentTarget,
//     livestreamWeigth: 1.5 * videoWeight,
// }


let workdayResult = {
    videos:0,
    comments:0,
    livestreams:0,
    all:0,
}

// workdayResult.videos 

//workdayTarget.videoTarget = document.querySelector('form input').value;

const form = [...document.querySelectorAll('form input')];
workdayTarget.videoTarget= form[1].value;


// const setTarget = (e) => {
//     e.preventDefault();
// }




// form.addEventListener('submit',setTarget)

// 1. i need o get target from input fields and put it to the object
// 2. then i need to use these numbers to calculate the weight of each video , livestream  and comment
// 3. then put function that increments or decrements value of span by 1, on click 
// 4 functions : addValue(){} and function substractValue{} or 1 function calculateValue(){}
// 5, function that summs both span values for comments videos and livesteams and assigns it in the result seuction
// and also that uses the total value to give the percentage how much it is in 100%.
// 6. reset all function