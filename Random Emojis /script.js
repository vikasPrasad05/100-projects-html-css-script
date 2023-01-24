const btn = document.getElementById("btn");
const emojiname = document.getElementById("emoji-name");

const emoji = []

async function getEmoji(){
    let resopnse = await fetch("https://emoji-api.com/emojis?access_key=0e9360ae2e2d63ff1c53c9d6612b6c15b677cf47")

    data = await resopnse.json()

    for (let i=0; i<99; i++){
        emoji.push({
            emojiname: data[i].character,
            emojiCode: data[i].unicodeName
        })
    }
}


getEmoji()

btn.addEventListener("click", ()=>{
    const randomeNum =Math.floor (Math.random()* emoji.length);
    btn.innerText = emoji[randomeNum].emojiname;
    emojiname.innerText = emoji[randomeNum].emojiCode;
})