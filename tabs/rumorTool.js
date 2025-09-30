const array = [0, 3, 2, 0, 0, 2, 0, 0]
function generateRumorTool() {
    let HTMLContent = '';
    // array.reverse()
    array.forEach((num, index) => {
        HTMLContent += `<div class='container' style='gap:70px;padding-bottom:15px'>`
        // if (index == 0) {
        //     HTMLContent += `<img src='images/rumor.png' style='position:absolute;right:31%;top:245px;height:250px;opacity:0.5'>`
        // }
        const numPlatforms = index % 2 == 0 ? 4 : 3
        for (let i = 0; i < numPlatforms; i++) {
            HTMLContent += `<div class='grow' style='z-index:1;${num == i ? 'opacity:0.2' : ''}' onclick="changeArray(${index},${i})"><img src='images/platform.png' style='width:80px'></div>`
        }
        HTMLContent += `</div>`
    })
    document.getElementById('content').innerHTML = HTMLContent
}
function changeArray(index, value) {
    array[index] = value
    playSound('move')
    action()
}