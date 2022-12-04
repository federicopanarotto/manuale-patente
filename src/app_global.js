let img_dir = "img/";
let img_ext = ".png";

function ifMine10(num) {
    let string = "";
    if(num < 10) {
        string = "0" + num;
        return string
    }
    string = "" + num;
    return string;
}

export { img_dir, img_ext, ifMine10 };