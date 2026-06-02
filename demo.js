/* ── CURSOR LOGIC ── */
const dot=document.getElementById('cur-dot'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
(function animR(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animR);})();

/* ── PRELOADER ── */
const ldf=document.getElementById('ldf'),ldp=document.getElementById('ldp'),loader=document.getElementById('loader');
let prog=0;
const iv=setInterval(()=>{
  prog=Math.min(prog+Math.random()*14,100);
  ldf.style.width=prog+'%';ldp.textContent=Math.floor(prog)+'%';
  if(prog>=100){clearInterval(iv);setTimeout(()=>{loader.classList.add('gone');},400);}
},70);

/* ── PHOTO PREVIEW ── */
document.getElementById('photo-input').addEventListener('change',function(e){
  const f=e.target.files[0]; if(!f)return;
  const reader=new FileReader();
  reader.onload=ev=>{
      const img=document.getElementById('pimg');
      img.src=ev.target.result;
      img.classList.add('loaded');
      document.getElementById('pp').style.display='none';
  };
  reader.readAsDataURL(f);
});

// Update Year
document.getElementById('yr').textContent=new Date().getFullYear();

/* ... Paste your remaining JS functions (initCanvas, typeLoop, etc.) here ... */