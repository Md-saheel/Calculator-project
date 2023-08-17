var result = document.querySelector('#js-btn1').classList.contains('js-btn');
    console.log(result)

    function blackbtn(num){
      const button = document.querySelector('.js-button-'+num);
      if (!button.classList.contains('is-toggled')) {
        turnOffPreviousButton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}