var erement;

function starts(){
    document.querySelector("#alert_a").textContent = "利用規約に同意しますか？";
    document.querySelector("#alert_b").textContent = "規約を読んでいない場合はキャンセルを押してください。";
    erement = document.getElementById("alertbord");
    console.log(erement);
    erement.style.opacity = "1";
    erement.style.zIndex = 100;
    erement.style.position = "relative";
}

function cancel(){
    erement = document.getElementById("alertbord");
    erement.style.opacity = 0;
    erement.style.zIndex = -10;
    erement.style.position = "relative";
}

function does(){
    window.location.href = "main.html";
}
