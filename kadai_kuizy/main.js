let array = [
  ['たかなわ', 'こうわ', 'たかわ']
];

for(let i = 0; i < 1; i++){
  for(let j = 0; j < 3; j++){
    document.getElementById(`choice${i}-${j}`).addEventListener('click', () => {
      console.log('ok')
    })
  }
}