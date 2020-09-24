document.querySelector('#b1').addEventListener('click',submit);
var str="user";


mainprint();



function mainprint(){
    if(window.localStorage.getItem('count')){
        let cc=window.localStorage.getItem('count');
        for(let i=1;i<=cc;i++){
            let str1=str+i;
            printe(str1);
        }
    }
}
function printe(str11){
    let file1=JSON.parse(window.localStorage.getItem(str11));
    let main=document.getElementById('container3');
    let newdiv=document.createElement('div');
    let p1=document.createElement('p');
    let p2=document.createElement('p');
    p1.textContent=file1.name;
    p2.textContent=file1.url;
    newdiv.appendChild(p1);
    newdiv.appendChild(p2);
    main.appendChild(newdiv);
}


function submit(){
    let val1=document.getElementById('i1').value;
    let val2=document.getElementById('i2').value;
    if(val1=="" || val2==""){
        alert("enter both values");
    }
    if(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(val2)){
        add1(val1,val2);
        mainprint();
    }
    else{
        alert("enter correct url");
    }


}
function add1(val1,val2){
    let person = {
        name: val1,
        url: val2,
    }
    if(!window.localStorage.getItem('count'))
    {
        

        window.localStorage.setItem('count', 1);
        let str1=str+1;
        window.localStorage.setItem(str1,JSON.stringify(person) );
    }
    else{
        let xy=window.localStorage.getItem('count');
        xy++;
        let str1=str+xy;
        window.localStorage.setItem('count', xy)
        window.localStorage.setItem(str1,JSON.stringify(person));

    }
    
   

}


