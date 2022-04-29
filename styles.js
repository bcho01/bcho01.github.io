

function resUpdate(){

    document.body.style["background-image"]=`url("https://picsum.photos/id/236/`+window.innerWidth+`/`+window.innerHeight+`")`;
    document.body.style["background-repeat"]=`no-repeat`;
    document.body.style["background-attachment"]=`fixed`;
    // stajls.backgroundImage =                "url(\"https://picsum.photos/id/237/700/310\")"
// return 'body{background-image: url("https://picsum.photos/id/237/500/310")}'

};
resUpdate();
window.onresize = function(){
resUpdate();

}