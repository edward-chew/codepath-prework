// global constants
const clueHoldTimeInitial = 1000; //how long to hold each clue's light/sound for round 1
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// global variables
var pattern = [];
var gameLength = 4; //how many steps there are to the game (length of pattern)
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var livesLeft = 3;
var clueHoldTime = clueHoldTimeInitial;

function generatePattern() {
  pattern = [];
  for (let i = 0; i < gameLength; i++) {
    pattern.push(Math.floor(Math.random() * gameLength) + 1)
  }
}

function startGame() {
  //initialize game variables
  gamePlaying = true;
  progress = 0;
  livesLeft = 3;
  document.getElementById("lives").textContent = livesLeft;
  clueHoldTime = clueHoldTimeInitial;
  generatePattern();
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence()
}

function stopGame() {
  gamePlaying = false;
  
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You win! :)");
}

function guess(btn){
  if(!gamePlaying){
    return;
  }
  if (btn == pattern[guessCounter]) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    wrongButton(btn);
    setTimeout(clearButton,clueHoldTimeInitial,btn);
    if (livesLeft == 1) {
      setTimeout(loseGame,clueHoldTimeInitial);
    }
    livesLeft--;
    document.getElementById("lives").textContent = livesLeft;
  }
}

function wrongButton(btn){
  document.getElementById("button"+btn).classList.add("wrong");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
  document.getElementById("button"+btn).classList.remove("wrong");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= clueHoldTimeInitial / pattern.length / 1.5
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 600
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)