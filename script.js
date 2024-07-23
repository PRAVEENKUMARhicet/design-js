let cnt=0;
var container=document.getElementsByClassName('container');
var colour=document.getElementsByTagName('span');
var text=document.getElementsByTagName('h2');
var btn=document.getElementsByTagName('button')

function changeColor(){
    let arr=['green','red','yellow','blue','pink'];
    container[0].style.backgroundColor=arr[cnt];
    btn[0].style.backgroundColor=arr[cnt];
    text[0].style.color=arr[cnt];
    colour[0].innerHTML=arr[cnt];
    cnt++;
    if(cnt>4){
        cnt=0;
    }
}