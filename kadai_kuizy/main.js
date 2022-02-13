const choiceArray = [
  ['たかなわ', 'こうわ', 'たかわ']
];
const explanationArray = [
  '正解は「たかなわ」です!', 
  '正解は「」です!',
  '正解は「」です!',
  '正解は「」です!',
  '正解は「」です!',
  '正解は「」です!',
  '正解は「」です!',
  '正解は「」です!',
  '江戸川区にあります。',
  '正解は「」です!'];
for(let i = 0; i < 1; i++){
  for(let j = 0; j < 3; j++){
    let choice = document.getElementById(`choice${i}-${j}`);
    let choiceCorrect = document.getElementById(`choice${i}-${0}`);
    let answerBox = document.getElementById(`answer-box${i}`);
    let answer = document.getElementById(`answer${i}`);
    let explanation = document.getElementById(`explanation${i}`);
    choice.addEventListener('click', () => {
      if(choice.innerHTML === choiceArray[i][0]){
        answer.innerHTML = '正解!';
        answer.style.borderBottomColor = 'blue';
      }
      else{
        choice.style.color = 'white';
        choice.style.backgroundColor = 'red';
        document.getElementById(`answer${i}`).innerHTML = '不正解!'
        answer.style.borderBottomColor = 'red';
      }
      choiceCorrect.style.color = 'white';
      choiceCorrect.style.backgroundColor = 'blue';
      answerBox.style.display = 'block';
      explanation.innerHTML = explanationArray[i];

      // 正解は「たかなわ」です！
      // ボタンを押したらページが動く
      // 正解は背景色が青、不正解は赤 正解と選んだ不正解の文字色が白
      // 回答BOXが出現
      // 正解は青の下線 不正解は赤の下線
      // 一度クリックしたら選べない
    })
  }
}