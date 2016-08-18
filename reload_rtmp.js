var skip = 0;
function dump(obj) {
    var out = "";
    if(obj && typeof(obj) == "object"){
        for (var i in obj) {
            out += i + ": " + obj[i] + "\n";
                if(obj[i] == "playback_play"){
                        if(window.skip == 2){
                                window.skip = 0;
                                var iframe = document.getElementById('camera');
                                iframe.src = iframe.src;
                                } else { window.skip += 1; }
                        }
        }
    } else {
        out = obj;
    }
}
function listener(event) {
  dump(event.data);
}

if (window.addEventListener) {
  window.addEventListener("message", listener);
} else {
  // IE8
  window.attachEvent("onmessage", listener);
}
