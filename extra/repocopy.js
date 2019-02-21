function hello() {
    console.log('pissu');
    var copyText = 'hello';
    console.log('metr'+copyText);
    copyText.select();
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

function copy(id){
    var range, selection, worked,element;
    element = document.getElementsByClassName(id)[0];
    console.log(element)
    if (document.body.createTextRange) {
        range = document.body.createTextRange();
       range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    try {
        document.execCommand('copy');
        //alert('Repo copied');
    }
    catch (err) {
        alert('unable to copy repo');
    }
}
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    //tooltip.innerHTML = "Copy to clipboard";
}