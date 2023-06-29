









// async function pickRandomImg(){
//     const data = await getDataFromJson();
//     const randomPortraitEl = document.getElementById("randomPortrait");
//     const randomAutomotiveEl = document.getElementById("randomAutomotive");
//     const randomLandscapeEl = document.getElementById("randomLandscape");
//     const randomPortraitIndex = Math.floor(Math.random() * data.portraits.length);
//     const randomAutomotiveIndex = Math.floor(Math.random() * data.automotive.length);
//     const randomLandscapeIndex = Math.floor(Math.random() * data.landscapes.length);
//     const main = document.querySelectorAll(".main");
//     main.forEach(element => {
//         element.style.opacity = 1
//     });

//     randomPortraitEl.setAttribute("src", data.portraits[randomPortraitIndex].path)
//     randomAutomotiveEl.setAttribute("src", data.automotive[randomAutomotiveIndex].path )
//     randomLandscapeEl.setAttribute("src", data.landscapes[randomLandscapeIndex].path)
// }




//let timeoutId;

// function start(){
//     const main = document.querySelectorAll(".main")
//     main.forEach(element => {
//         element.style.opacity = 0
//     });
//     timeoutId = setTimeout(function() {
//         pickRandomImg()
//         setTimeout(pickRandomImg, 5000) 
        
//         start()
//     }, 5000);
// }
// start()
getImages()


