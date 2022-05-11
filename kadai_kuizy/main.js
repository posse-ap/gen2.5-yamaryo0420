const questionLength = 10;
const choiceLength = 3;
const imageArray = [
  'images/takanawa.png',
  'images/kameido.png',
  'images/kouzimachi.png',
  'images/onarimon.png',
  'images/todoroki.png',
  'images/syakuzi.png',
  'images/zoushiki.png',
  'images/okachimachi.png',
  'images/shishibone.png',
  'images/kogure.png'
];
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

let contents = '';
for(let i = 0; i < questionLength; i++){
  contents += `<div class="box-container">`
  + `<div class="titles">`
  + `<h2 class="titles">${i + 1}. この地名はなんて読む？</h2>`
  + `</div>`
  + `<img class="image" src="${imageArray[i]}">`
  + `</div>`;
  for(let j = choiceLength - 1; j >= 0; j--){ 
    let n = Math.floor(Math.random() * (j + 1));
    [choiceArray[i][j], choiceArray[i][n]] = [choiceArray[i][n], choiceArray[i][j]];//選択肢をシャッフル
    contents += `<div>`
    + `<div class="choice" id="choice${i}${j}">${choiceArray[i][j]}</div>`
    + `</div>`;
  }
  contents += `<div id="answer-box${i}">`
    + `<div id="answer${i}" class="answer"></div>`
    + `<div id="explanation${i}"></div>`
    + `</div>`;
  
    // contentsという変数にHTMLを入れている
}
document.getElementById('main').innerHTML = contents; // htmlとして出力する


for(let i = 0; i < questionLength; i++){
  for(let j = 0; j < choiceLength; j++){
    let choices = document.getElementById(`choice${i}${j}`); //選択肢
    let answerBox = document.getElementById(`answer-box${i}`); //追加BOX
    let answer = document.getElementById(`answer${i}`); //正誤判定
    let explanation = document.getElementById(`explanation${i}`); //解説文

    choices.addEventListener('click', () => { //クリック時の動作
      for (let k = 0; k < choiceLength; k++) {
        let choice = document.getElementById(`choice${i}${k}`);
        choice.style.pointerEvents = "none";
        if(choice.innerHTML === correctArray[i]){
          choice.style.color = '#fff';
          choice.style.backgroundColor = '#287dff';
        }
      }
      if(choices.innerHTML === correctArray[i]){ //正解
        answer.innerHTML = '正解!';
        answer.style.borderBottomColor = '#287dff';
      }
      else{ //不正解
        choices.style.color = '#fff';
        choices.style.backgroundColor = '#ff5128';
        answer.innerHTML = '不正解!'
        answer.style.borderBottomColor = '#ff5128';
      }
      answerBox.style.display = 'block';
      answerBox.style.background = '#f5f5f5';
      answerBox.style.padding ='17px';
      answerBox.style.borderRadius = '3px';
      explanation.innerHTML = explanationArray[i];

      //未実装一覧
      // ボタンを押したらページが動く
    });
  }
}