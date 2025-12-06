const photo = document.getElementById("photo");
const audio = document.getElementById("audio");

alert("Do not click on the cat or it will pop!");

photo.addEventListener("click", ()=>{
   if(photo.src.includes("popcat1.jpg")){
    let i = 0;
    audio.src="newpopsound.mp3";
    const interval = setInterval(() => {
        if(photo.src.includes("popcat1.jpg")){
            photo.src = "popcat2.jpg";
            audio.play();
        }
        else{
           photo.src = "popcat1.jpg";
        }
        i++;
        if(i >= 10){
            clearInterval(interval);
        }
    }, 150); // 200ms delay between each change
  }
})

