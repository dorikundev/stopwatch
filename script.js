let timer;
let startTime ;
let elapsedTime = 0;
let isRunning = false;

// ボタンid取得
startButton = document.getElementById("start")
stopButton = document.getElementById("stop")
resetButton = document.getElementById("reset")

//ストップウォッチid取得
timerElement = document.getElementById("timer")

//ストップウォッチ設定
function updateTime() {
    const currentTime = Date.now();
    elapsedTime = (currentTime-startTime)/1000;

    //タイマー表示
    const sec = Math.floor(elapsedTime  % 60);
    const msec = Math.floor((elapsedTime * 10) % 10)
    const min = Math.floor(elapsedTime / 60) % 60;
    const hour = Math.floor(elapsedTime / 3600);
    const conversionTime = `${hour}:${min}:${sec}:${msec}`
    timerElement.textContent = conversionTime;
}

//スタートボタン実行
function startTimer(){
    if(isRunning == false){
        timer = setInterval(updateTime, 10);
        startTime = Date.now() - elapsedTime * 1000;
        isRunning = true;
    }
}

//ストップボタン実行
function stopTimer(){
    if(isRunning == true){
        clearInterval(timer);
        isRunning = false;
    }
}

//リセットボタン実行
function resetTimer(){
    //ストップと同じ動作
    clearInterval(timer);
    isRunning = false;
    //リセット実行
    elapsedTime = 0;
    timerElement.textContent = "0:0:0:0"
}

startButton.addEventListener ("click",startTimer);
stopButton.addEventListener ("click",stopTimer);
resetButton.addEventListener ("click",resetTimer);