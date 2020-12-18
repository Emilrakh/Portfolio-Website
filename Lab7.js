function openChat() {
    document.getElementById("chatView").style.visibility = "visible";
}

function closeChat() {
    document.getElementById("chatView").style.visibility = "hidden";
}

function sendMessage() {
    let date = new Date();
    let message = document.getElementById("inputLine").value;
    if (message === "") {
        return;
    }
    document.getElementById("inputLine").value = "";

    let tag = document.createElement("div");
    let closeButton = document.createElement("button");
    let a = document.createElement("a");
    let text = document.createTextNode(message);
    a.appendChild(text);

    let timeTag = document.createElement("a");
    let time = document.createTextNode(((date.getHours() < 10) ? "0" + date.getHours() : date.getHours()) + ":" + ((date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()));
    timeTag.appendChild(time);

    closeButton.textContent = "✕";

    tag.style.width = "45%";
    tag.style.padding = "1%";
    tag.style.height = "auto";
    tag.style.backgroundColor = "#df7976";
    tag.style.color = "#efe9e2";
    tag.style.borderRadius = "15px";
    tag.style.display = "flex";
    tag.style.alignSelf = "flex-end";
    tag.style.border = "solid 2px #df5976";
    tag.style.flexDirection = "column";

    closeButton.style.alignSelf = "flex-end";
    closeButton.style.width = "15px";
    closeButton.style.height = "15px";
    closeButton.style.display = "flex";
    closeButton.style.alignItems = "center";
    closeButton.style.justifyContent = "center";
    closeButton.style.fontSize = "15px";
    closeButton.style.border = "none";
    closeButton.style.backgroundColor = "#df5976";
    closeButton.style.borderRadius = "7.5px";
    closeButton.style.color = "#efe9e2"

    a.style.fontFamily = "Helvetica Neue";
    a.style.fontSize = "15px";

    timeTag.style.fontFamily = "Helvetica Neue";
    timeTag.style.fontSize = "15px";
    timeTag.style.alignSelf = "flex-end";

    closeButton.onclick = () => {
        document.getElementById("chatWindow").removeChild(tag)
    };

    tag.appendChild(closeButton);
    tag.appendChild(a);
    tag.appendChild(timeTag);
    let element = document.getElementById("chatWindow");
    element.appendChild(tag);
    if (message.includes("calculate")) {
        setTimeout(answer(expression = message.replace(/calculate /gi, "")), 1000);
        element.scrollTop = element.scrollHeight;
        return;
    }
    setTimeout(answer, 1000);
    element.scrollTop = element.scrollHeight;
}

let input = document.getElementById("inputLine");

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        sendMessage();
    }
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const adjectives = ["Useful", "Illogical", "Impossible", "Blue-eyed", "Alcohol-free ", "Dangerous", "Religious"];
const nouns = ["a sunflower", "a haircut", "a day off", "full moon", "a telltale", "a go-between"];
const verbs = ["was wrote", " has vanished", "was ended", "has been deleted", "was created", "was crashed"];

function answer(expression = null) {
    let date = new Date();

    let x = Math.round(getRandomIntInclusive(0, 7));
    let y = Math.round(getRandomIntInclusive(0, 6));
    let z = Math.round(getRandomIntInclusive(0, 6));
    let reply;

    if (expression === null) { reply = adjectives[x] + " " + nouns[y] + " " + verbs[z];} else { reply = eval(expression) }

    let tag = document.createElement("div");
    let closeButton = document.createElement("button");
    let a = document.createElement("a");
    let text = document.createTextNode(reply);
    a.appendChild(text);

    let timeTag = document.createElement("a");
    let time = document.createTextNode(((date.getHours() < 10) ? "0" + date.getHours() : date.getHours()) + ":" + ((date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()));
    timeTag.appendChild(time);

    closeButton.textContent = "✕";

    tag.style.width = "45%";
    tag.style.padding = "1%";
    tag.style.height = "auto";
    tag.style.backgroundColor = "#df5976";
    tag.style.color = "#efe9e2";
    tag.style.borderRadius = "15px";
    tag.style.display = "flex";
    tag.style.border = "solid 2px #df4976";
    tag.style.justifyContent = "space-between";
    tag.style.flexDirection = "column";

    closeButton.style.alignSelf = "flex-end";
    closeButton.style.width = "15px";
    closeButton.style.height = "15px";
    closeButton.style.display = "flex";
    closeButton.style.alignItems = "center";
    closeButton.style.justifyContent = "center";
    closeButton.style.fontSize = "15px";
    closeButton.style.border = "none";
    closeButton.style.backgroundColor = "#df5976";
    closeButton.style.borderRadius = "7.5px";
    closeButton.style.color = "#efe9e2"

    a.style.fontFamily = "Helvetica Neue";
    a.style.fontSize = "15px";

    timeTag.style.fontFamily = "Helvetica Neue";
    timeTag.style.fontSize = "15px";
    timeTag.style.alignSelf = "flex-end";

    closeButton.onclick = () => {
        document.getElementById("chatWindow").removeChild(tag)
    };

    tag.appendChild(closeButton);
    tag.appendChild(a);
    tag.appendChild(timeTag);

    let element = document.getElementById("chatWindow");
    element.appendChild(tag);
    element.scrollTop = element.scrollHeight;
}
