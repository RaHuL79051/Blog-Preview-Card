function ChangeAnswer(questionNumber=1) {
    for (let i = 1; i <= 4; i++) {
        let answer = document.getElementById('answer' + i);
        let questionImg = document.querySelector('.faq-item:nth-child(' + i + ') .question img');
    
        answer.style.display = i === questionNumber ? 'block' : 'none';
        questionImg.src = i === questionNumber ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
      }

    let answerToShow = document.getElementById('answer' + questionNumber);
    let questionImgToShow = document.querySelector('.faq-item:nth-child(' + questionNumber + ') .question img');

    answerToShow.style.display = 'block';

    questionImgToShow.src = './assets/images/icon-minus.svg';
}

document.addEventListener('DOMContentLoaded', function () {
    // Show the first answer by default
    ChangeAnswer(1);
  })