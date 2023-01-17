const ratingComponents = document.querySelectorAll('.rating'),
      submitBtn = document.querySelector('.send-btn'),
      sendDiv = document.querySelector('#send'),
      returnDiv = document.querySelector('#thank');

let rating = 0;
ratingComponents.forEach( (i) => {
    i.addEventListener('click', () => {
        rating = i.innerHTML;
        
        ratingComponents.forEach( (item) => {
            if(item.classList.contains('active')){
                item.classList.remove('active');
                item.classList.add('passive');
            }
        });

        i.classList.add('active');
        i.classList.remove('passive');
        
    });
});

submitBtn.addEventListener('click', () => {
    sendDiv.classList.add('hide');
    sendDiv.classList.remove('show');
    returnDiv.classList.remove('hide');
    returnDiv.classList.add('show');
    document.querySelector('.selected-rating').innerHTML = `${rating}`;
});
