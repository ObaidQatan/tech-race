var fl1 = 0;
var fl2 = 0;
var fl3 = 0;
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');

const l1 = document.querySelector('#s1 li');
const l2 = document.querySelector('#s2 li');
const l3 = document.querySelector('#s3 li');

const tv1 = document.querySelector('article #s1 article');
const tv2 = document.querySelector('article #s2 article');
const tv3 = document.querySelector('article #s3 article');

const dot1 = document.querySelector('article #s1 div');
const dot2 = document.querySelector('article #s2 div');
const dot3 = document.querySelector('article #s3 div');

//=============onClick============================
s1.onclick = ()=>{
    fl1++;
    if(fl1 %2 == 0){
        setTimeout(()=>{
            s1.style.transform = 'scaleX(1)'
            l1.style.content = "url('../website_symbol.svg')";

            tv1.style.opacity = '0%';

            dot1.style.opacity = '70%';
        }, 300);
        
    }else{
        setTimeout(()=>{
            s1.style.background = '#6C5CE7';
            s1.style.transform = 'scaleX(1)'

            l1.style.content = "url('../web_icon.svg')";

            tv1.style.opacity = '100%';

            dot1.style.opacity = '0%';
        }, 300);
    }  
s1.style.transform = 'scaleX(-0.5)'

}

s2.onclick = ()=>{
    fl2++;
    if(fl2 %2 == 0){
        setTimeout(()=>{
            s2.style.transform = 'scaleX(1)'
            l2.style.content = "url('../phone_symbol.svg')";

            tv2.style.opacity = '0%';

            dot2.style.opacity = '70%';
        }, 300);
        
    }else{
        setTimeout(()=>{
            s2.style.background = '#6C5CE7';
            s2.style.transform = 'scaleX(1)'

            l2.style.content = "url('../phone_icon.svg')";

            tv2.style.opacity = '100%';

            dot2.style.opacity = '0%';
        }, 300);
    }  
    s2.style.transform = 'scaleX(-0.5)'

}

s3.onclick = ()=>{
    fl3++;
    if(fl3 %2 == 0){
        setTimeout(()=>{
            s3.style.transform = 'scaleX(1)'
            l3.style.content = "url('../android_symbol.svg')";

            tv3.style.opacity = '0%';

            dot3.style.opacity = '70%';
        }, 300);
        
    }else{
        setTimeout(()=>{
            s3.style.background = '#6C5CE7';
            s3.style.transform = 'scaleX(1)'
            
            l3.style.content = "url('../android_icon.svg')";

            tv3.style.opacity = '100%';

            dot3.style.opacity = '0%';
        }, 300);
    }  
    s3.style.transform = 'scaleX(-0.5)'

}
//======================END=======================
//=============onMouseOver=====================

    s1.onmouseover = ()=>{
        if(fl1 %2 == 0)
        {s1.style.background = 'rgb(219, 33, 0)'};
    }
    s2.onmouseover = ()=>{
        if(fl2 %2 == 0)
        {s2.style.background = 'rgb(0, 126, 175)'};
    }
    s3.onmouseover = ()=>{
        if(fl3 %2 == 0)
        {s3.style.background = 'rgb(0, 129, 116)'};
    }
    //---------------------------
    s1.onmouseleave = ()=>{
        if(fl1 %2 == 0)
        {s1.style.background = 'rgba(255, 255, 255, 0.356)'};
    }
    
    s2.onmouseleave  = ()=>{
        if(fl2 %2 == 0)
        {s2.style.background = 'rgba(255, 255, 255, 0.356)'};
    }
    s3.onmouseleave  = ()=>{
        if(fl3 %2 == 0)
        {s3.style.background = 'rgba(255, 255, 255, 0.356)'};
    }

//=============END=============================*/
document.getElementById('bbb').onclick = ()=>{console.log(fl1)}
