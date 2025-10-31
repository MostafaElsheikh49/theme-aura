document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.rb-links__track, .rb-p-slider__track').forEach(track=>{
    const prev=track.parentElement.querySelector('.rb-links__nav--prev, .rb-p-slider__nav--prev');
    const next=track.parentElement.querySelector('.rb-links__nav--next, .rb-p-slider__nav--next');
    if(prev&&next){
      prev.addEventListener('click',()=>track.scrollBy({left:-200,behavior:'smooth'}));
      next.addEventListener('click',()=>track.scrollBy({left:200,behavior:'smooth'}));
    }
  });
});