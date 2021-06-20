var fl1 = 0;
const s1 = document.getElementById('s1');
const check = document.getElementById('check');
const services = document.getElementById('services');
const tv1 = document.querySelector('article #s1 article');
const li = document.querySelector('#s1 li');
const clickme = document.querySelector('#s1 h4');
const embed = document.querySelector('article embed');
//var created = document.createElement("<embed src='./card.html'/>");


s1.onclick = ()=>{
    fl1++;
    if(fl1 %2 == 0){
        setTimeout(()=>{
            s1.style.transform = 'scaleX(1)'

            tv1.style.opacity = '100%';

            li.style.opacity = '100%';

            clickme.style.opacity = '100%';

            s1.style.width = '30%';

            services.style.right = '0%';

            embed.style.display = 'none';

        }, 300);
    }else{
    setTimeout(()=>{
            s1.style.transform = 'scaleX(1)'

            tv1.style.opacity = '0%';

            li.style.opacity = '0%';

            clickme.style.opacity = '0%';

            s1.style.width = '90%';

            services.style.right = '20%';

            embed.style.display = 'initial';

            setTimeout(()=>{s1.click()
            
                setTimeout(()=>{location.reload()},400)
            }, 7000);

        }, 300);
    }
s1.style.transform = 'scaleX(-0.5)'
    
}
check.onclick = ()=>{
    window.open("https://obekasdono.webstarts.com/designation_and_illustration.html");
}