const sceneEl = document.querySelector("a-scene")
const fishEl = document.querySelector("#fish-model")
const scoreEl = document.querySelector('#score-element');

function randomPosition() {
  return {
    x: (Math.random() - 0.5) * 20,
    y: 1.5,
    z: (Math.random() - 0.5) * 20
  };
}

let score = 0;

function displayScore() {
  scoreEl.setAttribute('value', `Score: ${score}`);
}

function createFish(){
  const clone = fishEl.cloneNode()
  clone.setAttribute("position", randomPosition())
  clone.addEventListener('mousedown', () => {
    score++;
    clone.dispatchEvent(new Event('collected'));
    displayScore();
  })
  clone.addEventListener('animationcomplete', () => {
    clone.setAttribute("position", randomPosition());
    clone.setAttribute('scale', '0.1 0.1 0.1');
  });
  sceneEl.appendChild(clone)
}

for(let i=0 ; i<3; i++){
  createFish()
}
displayScore()