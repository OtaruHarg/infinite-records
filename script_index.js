var result;


function starts() {
    result = ['利用規約に同意しますか？', '規約を読んでいない場合はキャンセルを押してください'];
    if(!window.confirm(result.join('\n'))){
        return false;
    }
    if(result){
        window.location.href = "main.html";
    }
}

function starts(){
    document.querySelector("#alert_a").textContent = "利用規約に同意しますか？";
    document.querySelector("#alert_b").textContent = "規約を読んでいない場合はキャンセルを押してください。";
    erement = document.getElementById("alertbord");
    erement.style.opacity = 1;
    erement.style.zIndex = 100;
    erement.style.position = "relative";
}
