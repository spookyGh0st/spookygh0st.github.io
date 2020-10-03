setInterval(setTitle, 1000)


var title="spooky (☞ﾟヮﾟ)☞ "
var lastChar=title.charAt(0)
function setTitle() {
    document.title=title
    title += lastChar
    title = title.substring(1)
    lastChar = title[0]
}