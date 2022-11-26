const fs = require("fs");
const path = require("path");


let regStyle = /<style>[\s\S]*<\/style>/
let regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './index.html'), 'utf8', (err, dataStr) => {
    if (err) {
        return console.log('读取HTML文件失败！' + err.message)
    }
    console.log(typeof dataStr + '---------------this is type')
    console.log(dataStr + 'wssssssssssssssssssssssssssssssss')
    resolveCSS(dataStr)
    resolveScript(dataStr)
    resolveHTML(dataStr)

})

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
        //r1是一个数组
    console.log(typeof r1 + "----------------------this is r1 type")
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './index.css'), newCSS, err => {
        if (err) {
            return console.log('写入失败' + err.message)

        }
        console.log('写入css样式成功！')
    })
}

function resolveScript(htmlStr) {
    const r1 = regScript.exec(htmlStr)
    const newCSS = r1[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './index.js'), newCSS, function(err) {
        if (err) {
            return console.log(err.message)
        } else {
            console.log('写入script样式成功！')
        }
    })
}


function resolveHTML(htmlStr) {
    const r1 = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './index.html'), r1, function(err) {
        if (err) {
            return console.log(err.message)
        } else {
            console.log('写入html样式成功！')
        }
    })
}