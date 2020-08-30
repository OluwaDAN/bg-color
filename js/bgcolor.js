let button = document.getElementById(`btn`);
let body = document.getElementById(`bodybee`);
let random = Math.floor(Math.random()*11)+0;
let colors = [`blue`,`green`,`yellow`,`red`,`pink`,`grey`,`orange`,`aqua`,
`brown`,`navy`,`black`];


button.addEventListener(`click`, show);
function show(){
    console.log(random +`=`+ colors[random]);
    body.style.backgroundColor = colors[random];
    random = Math.floor(Math.random()*11)+0;
}