function Flexible (designWidth, maxWidth) {
    var doc = document,
    win = window,
    docEl = doc.documentElement,
    remStyle = document.createElement("style"),
    tid;
//通过 js 生成 style 添加至 文档
    function refreshRem() {
        
        var width = docEl.getBoundingClientRect().width;
        if(maxWidth){
            //最大宽度
            width>maxWidth && (width=maxWidth);
        }
        // 当前 设备宽度 处于 设计稿 宽度 
        var rem = width / designWidth;
        remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
    }

    if (docEl.firstElementChild) {
        // style 添加至 文档
        docEl.firstElementChild.appendChild(remStyle);
    } else {
        var wrap = doc.createElement("div");
        wrap.appendChild(remStyle);
        doc.write(wrap.innerHTML);
        wrap = null;
    }
    //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
    refreshRem();

    win.addEventListener("resize", function() {
        clearTimeout(tid); //防止执行两次
        //函数节流，避免有用 一直拖动是一直渲染
        tid = setTimeout(refreshRem, 300);
    }, false);
//每次加载页面时触发
    win.addEventListener("pageshow", function(e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    // if (doc.readyState === "complete") {  // 等待 dom树 渲染完（rem 转化为 px ） 页面载入完成 ，重新给body设置默认字体大小
    //     doc.body.style.fontSize = "16px";
    // } else {
    //     // 当初始的HTML文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发
    //     doc.addEventListener("DOMContentLoaded", function() {
    //         doc.body.style.fontSize = "16px";
    //     }, false);
    // }
}
export {Flexible}