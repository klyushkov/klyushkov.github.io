var skip = "false";
function dump(obj) {
    var out = "";
    if(obj && typeof(obj) == "object"){
        for (var i in obj) {
            out += i + ": " + obj[i] + "\n";
                if(obj[i] == "playback_play"){
                        if(window.skip == "true"){
                                window.skip = "false";
                                var iframe = document.getElementById('camera');
                                iframe.src = iframe.src;
                                } else { window.skip = "true"; }
                        }
        }
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
