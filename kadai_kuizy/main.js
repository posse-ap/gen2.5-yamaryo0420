const choiceArray = [
  ['たかなわ', 'たかわ', 'こうわ'],
  ['かめいど', 'かめと', 'かめど'],
  ['こうじまち', 'おかとまち', 'かゆまち'],
  ['おなりもん', 'ごせいもん', 'おかどもん'],
  ['とどろき', 'たたら', 'たたりき'],
  ['しゃくじい', 'いじい', 'せきこうい'],
  ['ぞうしき', 'ざっしょく', 'ざっしき'],
  ['おかちまち', 'ごしろちょう', 'みとちょう'],
  ['ししぼね', 'ろっこつ', 'しこね'],
  ['こぐれ', 'こしゃく', 'こばく']
];
const correctArray = [
  'たかなわ', 'かめいど', 'こうじまち', 'おなりもん', 'とどろき', 'しゃくじい', 'ぞうしき', 'おかちまち', 'ししぼね', 'こぐれ'
];
const explanationArray = [
  '正解は「たかなわ」です!', 
  '正解は「かめいど」です!',
  '正解は「こうじまち」です!',
  '正解は「おなりもん」です!',
  '正解は「とどろき」です!',
  '正解は「しゃくじい」です!',
  '正解は「ぞうしき」です!',
  '正解は「おかちまち」です!',
  '江戸川区にあります。',
  '正解は「こぐれ」です!'
];

for(let i = 0; i < 1; i++){
  document.getElementById(`title${i}`).innerHTML = `${i + 1}. この地名はなんて読む?`;
  for(let j = 0; j < 3; j++){
    let choice = document.getElementById(`choice${i}${j}`); //選択肢
    let choiceCorrect = document.getElementById(`choice${i}${0}`); //正解の選択肢
    let answerBox = document.getElementById(`answer-box${i}`);
    let answer = document.getElementById(`answer${i}`);
    let explanation = document.getElementById(`explanation${i}`);
    choice.innerHTML = choiceArray[i][j]; //選択肢の表示
    choice.addEventListener('click', () => { //クリック時の動作
      if(choice.innerHTML === correctArray[i]){ //正解
        answer.innerHTML = '正解!';
        answer.style.borderBottomColor = 'blue';
      }
      else{ //不正解
        choice.style.color = 'white';
        choice.style.backgroundColor = 'red';
        answer.innerHTML = '不正解!'
        answer.style.borderBottomColor = 'red';
      }
      choiceCorrect.style.color = 'white';
      choiceCorrect.style.backgroundColor = 'blue';
      answerBox.style.display = 'block';
      explanation.innerHTML = explanationArray[i];
      //未実装一覧
      // ボタンを押したらページが動く
      // 一度クリックしたら選べない
    })
  }
}