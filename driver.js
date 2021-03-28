var skin;
var output;

function set(img) {
    skin = img
}

function get(url) {
    output = url;
}

function driver() {
    let imgInput = document.getElementById('imageInput');
    imgInput.addEventListener('change', function(e) {
        if (e.target.files) {
            let imageFile = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onloadend = function(e) {
                var image = new Image();
                image.src = e.target.result;
                image.onload = function(ev) {
                    if (this.width + this.height === 0) {
                        alert("Corrupt Image");
                        return;
                    } else if (this.width != 64 || this.height != 64) {
                        alert("Not a valid minecraft skin,If you are sure contact the maintainer")
                    } else {
                        set(image);
                        document.querySelector("#uploadS").style.display = "none";
                        document.querySelector("#chooseS").style.display = "block";
                    }
                }
            }
        }
    });
}

function runNoob(skin) {
    var origamy = new NoobOrigamy(skin, 100);
    console.log(skin);
    get(origamy.merge());
    done();
}

function runGlue(skin) {
    var origamy = new GlueOrigamy(skin, 180);
    console.log(skin);
    get(origamy.merge());
    done();
}


function ImagetoPrint(source) {
    return "<html><head><script>function step1(){\n" +
        "setTimeout('step2()', 10);}\n" +
        "function step2(){window.print();window.close()}\n" +
        "</scri" + "pt></head><body onload='step1()'>\n" +
        "<img src='" + source + "' /></body></html>";
}

function PrintImage(source) {
    Pagelink = "about:blank";
    var pwa = window.open(Pagelink, "_new");
    pwa.document.open();
    pwa.document.write(ImagetoPrint(source));
    pwa.document.close();
}

function done() {
    document.querySelector("#chooseS").style.display = 'none';
    document.querySelector("#down").href = output;
    document.querySelector("#doneS").style.display = 'block';
}