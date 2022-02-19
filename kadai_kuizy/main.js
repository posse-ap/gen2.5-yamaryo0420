const questionLength = 1;
const choiceLength = 3;
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

for(let i = 0; i < questionLength; i++){
  document.getElementById(`title${i}`).innerHTML = `${i + 1}. この地名はなんて読む?`;
  for(let j = choiceLength - 1; j >= 0; j--){ //選択肢をシャッフル
    let n = Math.floor(Math.random() * (j + 1));
    [choiceArray[i][j], choiceArray[i][n]] = [choiceArray[i][n], choiceArray[i][j]];
    document.getElementById(`choice${i}${j}`).innerHTML =  choiceArray[i][j];
  }
  for(let j = 0; j < choiceLength; j++){
    let choice = document.getElementById(`choice${i}${j}`); //選択肢
    let answerBox = document.getElementById(`answer-box${i}`); //追加BOX
    let answer = document.getElementById(`answer${i}`); //正誤判定
    let explanation = document.getElementById(`explanation${i}`); //解説文
    choice.addEventListener('click', () => { //クリック時の動作
      if(choice.innerHTML === correctArray[i]){ //正解
        choice.style.color = '#fff';
        choice.style.backgroundColor = '#287dff';
        answer.innerHTML = '正解!';
        answer.style.borderBottomColor = '#287dff';
      }
      else{ //不正解
        choice.style.color = '#fff';
        choice.style.backgroundColor = '#ff5128';
        answer.innerHTML = '不正解!'
        answer.style.borderBottomColor = '#ff5128';
      }
      answerBox.style.display = 'block';
      answerBox.style.background = '#f5f5f5';
      answerBox.style.padding ='17px';
      answerBox.style.borderRadius = '3px';
      explanation.innerHTML = explanationArray[i];
      //未実装一覧
      //不正解時に正解の背景色を青、文字色を白にする
      // ボタンを押したらページが動く
      // 一度クリックしたら選べない
    });
  }
}