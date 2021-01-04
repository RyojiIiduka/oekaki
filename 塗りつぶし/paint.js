function alertName(e) {
    var radioList = document.getElementsByName("color");
    var str = "選択されていません";
    for(var i=0; i<radioList.length; i++){
        if (radioList[i].checked) {
            str = radioList[i].value;
            break;
        }
    }
    //alert(str + 'を返却');
    str;
    e.target.setAttribute('fill',str);
};
function downLoad(e) {
    var svg = document.querySelector("svg");
    var svgData = new XMLSerializer().serializeToString(svg);
    var canvas = document.createElement("canvas");
    canvas.width = svg.width.baseVal.value;
    canvas.height = svg.height.baseVal.value;
    
    var ctx = canvas.getContext("2d");
    var image = new Image;
    image.onload = function(){
        ctx.drawImage( image, 0, 0 );
        var a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.setAttribute("download", "image.png");
        
        //クリック
        a.dispatchEvent(new MouseEvent("click"));

        //タップ
        //a.dispatchEvent(new MouseEvent("touchstart"));
    }
    image.src = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgData)));
};
window.onload = function() {
    paths = window.document.querySelectorAll('path');
    for (i = 0; i < paths.length; ++i) {
        paths[i].onclick = alertName;
    }
    aaa = window.document.querySelectorAll('#download');
    aaa[0].onclick = downLoad;
};
/*セッションに保存*/
document.getElementById("ses").onclick = (event) => {
    // Canvasからbase64エンコーディングされた画像データを取得する
    var canvas = document.getElementById("wapuu");

    // LocalStorageに保存する
    window.localStorage.setItem("save", canvas);
}
document.body.addEventListener("touchstart", function(e){
    e.preventDefault();
  }, {passive: false});
  document.body.addEventListener("touchmove", function(e){
    e.preventDefault();
  }, {passive: false});