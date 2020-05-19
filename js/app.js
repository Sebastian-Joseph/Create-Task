
let popped = 0;

document.addEventListener('mouseover', function(e){

    if (e.target.className === "balloon"){

                e.target.style.backgroundColor = "#ccffff";
                e.target.textContent = "POP!";
                popped++;
          var audio = new Audio('balloonpopping.mp3');
          audio.play()
                removeEvent(e);
                checkAllPopped();
    }
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
      mymusic.play();
    })
};

function checkAllPopped(){
    if (popped === 25){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
  };
