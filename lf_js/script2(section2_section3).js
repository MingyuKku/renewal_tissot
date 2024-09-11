// ==========================================================

// section2 룩북 슬라이드
let lookBook_slides_wrap = document.querySelector(".lookBook_slides_wrap");
let lookBook_slides = document.querySelector(".lookBook_slides");
let lookBook_slide = document.querySelectorAll(".lookBook_slide");

// 드래그 슬라이드 변수
let lookBook_startX;
let lookBook_endX;
let lookBook_pressed = false;
let lookBook_moved = false;
let scrollLeft;
let lookBook_slide_a =document.querySelectorAll(".lookBook_slide>a");

// ===============
// 드래그
lookBook_slides_wrap.addEventListener("mousedown", lookbookDragStart);
lookBook_slides_wrap.addEventListener("touchstart", lookbookDragStart);
lookBook_slides_wrap.addEventListener("mousemove", lookbookDragMove);
lookBook_slides_wrap.addEventListener("mouseup", lookbookDragEnd);
lookBook_slides_wrap.addEventListener("touchend", lookbookDragEnd);
// lookBook_slides_wrap.removeEventListener("touchstart", lookbookDragStart);

function lookbookDragStart(e){
  // if(e.type == "touchstart"){
  //   lookBook_slides.classList.add("active");
   
  // }
  
  lookBook_pressed = true;
  lookBook_startX = e.pageX - lookBook_slides.offsetLeft;
  scrollLeft = lookBook_slides_wrap.scrollLeft;
  lookBook_slides.classList.add("active");

  // 마우스 커서 효과
  cursor.style.transform = "scale(0.4)"
  cursor.style.borderWidth = "5px";
  cursor.children[0].style.marginLeft = "-50px";
  cursor.children[0].style.fontSize = "46px";
  cursor.children[1].style.marginRight = "-50px";
  cursor.children[1].style.fontSize = "46px";

  document.onmouseup = lookbookDragEnd;
  document.onmousemove = lookbookDragMove;
}

function lookbookDragMove(e){
  lookBook_moved = true;
  if(!lookBook_pressed) return;
  e.preventDefault();
  lookBook_endX = e.pageX - lookBook_slides.offsetLeft;
  lookBook_slides_wrap.scrollLeft = scrollLeft - (lookBook_endX - lookBook_startX)/1.2;

  // lookBook_slides.style.left = lookBook_endX - lookBook_startX + "px";
  // checkboundary();

  // 앵커태그 기능 막기
  if(Math.abs(lookBook_endX - lookBook_startX) > 0){
    lookBook_slide_a.forEach(a=>{
      a.style.pointerEvents = "none";
    })
  }
}

function lookbookDragEnd(){
  // 앵커태그 기능 살리기
  lookBook_slide_a.forEach(a=>{
    a.style.pointerEvents = "auto";
  })

  lookBook_pressed = false;
  lookBook_moved = false;
  lookBook_slides.classList.remove("active");

  // 마우스 커서 효과
  cursor.style.transform = ""
  cursor.style.borderWidth = "";
  cursor.children[0].style.marginLeft = "";
  cursor.children[0].style.fontSize = "";
  cursor.children[1].style.marginRight = "";
  cursor.children[1].style.fontSize = "";

  document.onmouseup = null;
  document.onmousemove = null;
}



// lookBook_slide_a.forEach(a=>{
//   if(lookBook_pressed){
//     if(lookBook_moved){
//       a.style.pointerEvents = "none";
//     } else {
//       a.style.pointerEvents = "none";
//     }
//   }
// })



// =================
// 룩북 마우스 커서
lookBook_slides_wrap.addEventListener("mousemove", moveCursor);
lookBook_slides_wrap.addEventListener("mouseleave", outCursor);

function moveCursor(e){
  cursor.style.display = "flex";
  gsap.to(cursor, { duration: 0, left: e.pageX - cursor.offsetWidth/2, top: e.pageY - cursor.offsetWidth/2 });
}
  
function outCursor(){
  cursor.style.display = "none";
}
// 룩북 마우스 커서 끝
// =================



    // cursor.children[0].style.opacity = "1";
    // cursor.children[0].style.transform = "rotate(-90deg) scale(0.6)";
    // cursor.children[1].style.opacity = "1";
    // cursor.children[1].style.transform = "rotate(90deg) scale(0.6)";


  
    // function checkboundary(){
    //   let outer = lookBook_slides_wrap.getBoundingClientRect();
    //   let inner = lookBook_slides.getBoundingClientRect();
    //   if(parseInt(lookBook_slides.style.left) > 0){
    //     lookBook_slides.style.left = "0px";
    //   } else if (inner.right < outer.right){
    //     lookBook_slides.style.left = -(inner.width - outer.width) + "px";
    //   }
    // }

// 룩북 타이틀
let lookBook_tit_right = document.querySelectorAll(".lookBook_tit_right");
lookBook_slide.forEach((slide,idx,all)=>{
  slide.addEventListener("mouseover", function(){
    if(!lookBook_pressed && window.innerWidth > 840){
      lookBook_tit_right.forEach(ul=>{
        ul.style.opacity = "0";
        ul.style.transform = "translate(15%, -50%)";
      })
      lookBook_tit_right[idx].style.opacity = "1";
      lookBook_tit_right[idx].style.transform = "translateY(-50%)";
    } else if (!lookBook_pressed && window.innerWidth <= 840){
      lookBook_tit_right.forEach(ul=>{
        ul.style.opacity = "0";
        ul.style.transform = "translate(-35%, 0)";
      })
      lookBook_tit_right[idx].style.opacity = "1";
      lookBook_tit_right[idx].style.transform = "translate(-50%, 0)";
    }
  })
})

// 위치 바뀔 때 반응형으로 셋팅
window.addEventListener("resize", function(){
  if(window.innerWidth > 840){
    lookBook_tit_right.forEach(ul=>{
      ul.style.transform = "translateY(-50%)";
    })
  } else {
    lookBook_tit_right.forEach(ul=>{
      ul.style.transform = "translate(-50%, 0)";
    })
  }
})

// section2 룩북 슬라이드 끝
// ==========================================================



// ==========================================================
// section3 미디어
let lfon_slides_wrap = document.querySelector(".lfon_slides_wrap");
let lfon_slides = document.querySelector(".lfon_slides");
let lfon_slide = document.querySelectorAll(".lfon_slides>li");
let lfon_slides_a = document.querySelectorAll(".lfon_slides>li>a")
// ==========================================================
// 미디어 슬라이드

// 드래그 슬라이드 변수
let lfon_startX;
let lfon_endX;
let lfon_pressed = false;
let lfon_moved = false;
let lfon_scrollLeft;

// ===============
// 드래그
lfon_slides_wrap.addEventListener("mousedown", lfonDragStart);
lfon_slides_wrap.addEventListener("touchstart", lfonDragStart);
lfon_slides_wrap.addEventListener("mousemove", lfonDragMove);
lfon_slides_wrap.addEventListener("mouseup", lfonDragEnd);
lfon_slides_wrap.addEventListener("touchend", lfonDragEnd);


function lfonDragStart(e){
  lfon_pressed = true;
  lfon_startX = e.pageX - lfon_slides.offsetLeft;
  lfon_scrollLeft = lfon_slides_wrap.scrollLeft;
  lfon_slides.classList.add("active");

  // 마우스 커서 효과
  // cursor.style.transform = "scale(0.4)"
  // cursor.style.borderWidth = "5px";
  // cursor.children[0].style.marginLeft = "-50px";
  // cursor.children[0].style.fontSize = "46px";
  // cursor.children[1].style.marginRight = "-50px";
  // cursor.children[1].style.fontSize = "46px";

  document.onmouseup = lfonDragEnd;
  document.onmousemove = lfonDragMove;
}

function lfonDragMove(e){
  lfon_moved = true;
  if(!lfon_pressed) return;
  e.preventDefault();
  lfon_endX = e.pageX - lfon_slides.offsetLeft;
  lfon_slides_wrap.scrollLeft = lfon_scrollLeft - (lfon_endX - lfon_startX)/1.2; 

  // lfon_slides.style.left = lfon_endX - lfon_startX + "px";
  // checkboundary();

  //앵커태그 기능 막기
  if(Math.abs(lfon_endX - lfon_startX) > 0){
    lfon_slides_a.forEach(a=>{
      a.style.pointerEvents = "none";
    })
  }
}

function lfonDragEnd(){
  // 앵커태그 기능 살리기
  lfon_slides_a.forEach(a=>{
    a.style.pointerEvents = "auto";
  })

  lfon_pressed = false;
  lfon_moved = false;
  lfon_slides.classList.remove("active");

  // 마우스 커서 효과
  // cursor.style.transform = ""
  // cursor.style.borderWidth = "";
  // cursor.children[0].style.marginLeft = "";
  // cursor.children[0].style.fontSize = "";
  // cursor.children[1].style.marginRight = "";
  // cursor.children[1].style.fontSize = "";

  document.onmouseup = null;
  document.onmousemove = null;
}

// ============================
// 자동슬라이드 잠시멈춤
// lfon_slides_wrap.addEventListener("mouseover", function(){

// })

// =================
// 룩북 마우스 커서
// lookBook_slides_wrap.addEventListener("mousemove", moveCursor);
// lookBook_slides_wrap.addEventListener("mouseleave", outCursor);  

// function moveCursor(e){
//   cursor.style.display = "flex";
//   cursor.style.left = e.pageX -cursor.offsetWidth/2 + "px";
//   cursor.style.top = e.pageY -cursor.offsetHeight/2 + "px";
// }

// function outCursor(){
//   cursor.style.display = "";
// }
// 룩북 마우스 커서 끝
// =================


// function checkboundary(){
//   let outer = lfon_slides_wrap.getBoundingClientRect();
//   let inner = lfon_slides.getBoundingClientRect();
//   if(parseInt(lfon_slides.style.left) > 0){
//     lfon_slides.style.left = "0px";
//   } else if (inner.right < outer.right){
//     lfon_slides.style.left = -(inner.width - outer.width) + "px";
//   }
// }


// 미디어 타이틀 효과
let lfon_wrap = document.querySelector('.lfon_wrap');
let lfon_tit_slides_wrap_ul = document.querySelector('.lfon_tit_slides_wrap>ul');
let lfon_tit_slides_wrap_li = document.querySelectorAll(".lfon_tit_slides_wrap>ul>li");

// 마우스 올리고~
lfon_tit_slides_wrap_li.forEach(li=>{
  li.addEventListener("mouseover", function(){
    lfon_tit_slides_wrap_li.forEach(all=>{
      all.style.opacity = "0.2";
    })
    li.style.opacity = "1";
  })
})

// 내리고~
lfon_tit_slides_wrap_ul.addEventListener("mouseleave", function(){
  lfon_tit_slides_wrap_li.forEach(all=>{
    all.style.opacity = "1";
  })
})


// ==========================
// 미디어 백그라운드 반응형
window.addEventListener("load", function(){
  if(window.innerWidth > 480){
    // 타이틀 및 백그라운드기본값 설정
    lfon_tit_slides_wrap_li.forEach(all=>{
      all.style.display = "block";   
    })
    // lfon_wrap.style.background = "url(..//lfon_mediaBg1.png) no-repeat";
    lfon_wrap.style.background = "url(../lf_images/lfon_mediaBg1.png) no-repeat";
    lfon_wrap.style.backgroundSize = "cover";
    lfon_wrap.style.backgroundAttachment = "fixed";

    // 타이틀 마우스 올리고~
    let lfon_tit_slides_wrap_li_span = document.querySelectorAll('.lfon_tit_slides_wrap>ul>li>span');
    lfon_tit_slides_wrap_li.forEach((li,idx)=>{
      li.addEventListener("mouseover", function(){
        lfon_tit_slides_wrap_li_span.forEach(all=>{
          all.style.animation = "none";
        })
        lfon_tit_slides_wrap_li_span[idx].style.animation = "shootLeft 0.4s ease-in-out";
      })
    })

    // 슬라이드 호버 효과
    lfon_slide.forEach((slide,idx,parent)=>{
      slide.addEventListener("mouseover", function(){
        if(!lfon_pressed){
          // 타이틀 효과 올리고~
          lfon_tit_slides_wrap_li.forEach(all=>{
            all.style.display = "block";
            all.style.opacity = "0.2";
          })
          lfon_tit_slides_wrap_li[idx].style.opacity = "1";

          // 타이틀 슛 효과
          lfon_tit_slides_wrap_li_span.forEach(span=>{
            span.style.animation = "none";
          })
          lfon_tit_slides_wrap_li_span[idx].style.animation = "shootLeft 0.4s ease-in-out";

          // 백그라운드 효과
          lfon_wrap.style.background = "url(../lf_images/lfon_mediaBg" + (idx + 1) + ".png) no-repeat";
          lfon_wrap.style.backgroundSize = "cover";
          lfon_wrap.style.backgroundAttachment = "fixed";
         }
      })
    })

    // 타이틀 효과 내리고~
    lfon_slides.addEventListener("mouseleave", function(){
      lfon_tit_slides_wrap_li.forEach(all=>{
        all.style.opacity = "1";
      })
    })

  } else {
     // 초기값 설정
     lfon_tit_slides_wrap_li.forEach((li,idx,all)=>{
      li.style.display = "none";
      all[1].style.display = "block";
    })
 
    lfon_wrap.style.background = "#445560";
    lfon_wrap.style.backgroundSize = "auto";
    lfon_wrap.style.backgroundAttachment = "scroll";

    // 호버시 타이틀 및 백그라운드 효과
    lfon_slide.forEach((slide,idx,parent)=>{
      slide.addEventListener("mouseover", function(){
        if(!lfon_pressed){
          // 타이틀 효과 올리고~
          lfon_tit_slides_wrap_li.forEach(all=>{
            all.style.display = "none";
          })
          lfon_tit_slides_wrap_li[idx].style.display = "block";

          // 타이틀 슛 효과 제거
          let lfon_tit_slides_wrap_li_span = document.querySelectorAll('.lfon_tit_slides_wrap>ul>li>span');
          lfon_tit_slides_wrap_li_span.forEach(span=>{
            span.style.animation = "none";
          })

          // 백그라운드 효과
          lfon_wrap.style.background = "#445560";
          lfon_wrap.style.backgroundSize = "auto";
          lfon_wrap.style.backgroundAttachment = "scroll";
         }
      })
    })
  }
});

window.addEventListener("resize", function(){
  if(window.innerWidth > 480){
    // 타이틀 및 백그라운드기본값 설정
    lfon_tit_slides_wrap_li.forEach(all=>{
      all.style.display = "block";   
    })
    lfon_wrap.style.background = "url(../lf_images/lfon_mediaBg1.png) no-repeat";
    lfon_wrap.style.backgroundSize = "cover";
    lfon_wrap.style.backgroundAttachment = "fixed";

    // 타이틀 마우스 올리고~
    let lfon_tit_slides_wrap_li_span = document.querySelectorAll('.lfon_tit_slides_wrap>ul>li>span');
    lfon_tit_slides_wrap_li.forEach((li,idx)=>{
      li.addEventListener("mouseover", function(){
        lfon_tit_slides_wrap_li_span.forEach(all=>{
          all.style.animation = "none";
        })
        lfon_tit_slides_wrap_li_span[idx].style.animation = "shootLeft 0.4s ease-in-out";
      })
    })

    // 슬라이드 호버 효과
    lfon_slide.forEach((slide,idx,parent)=>{
      slide.addEventListener("mouseover", function(){
        if(!lfon_pressed){
          // 타이틀 효과 올리고~
          lfon_tit_slides_wrap_li.forEach(all=>{
            all.style.display = "block";
            all.style.opacity = "0.2";
          })
          lfon_tit_slides_wrap_li[idx].style.opacity = "1";

          // 타이틀 슛 효과
          let lfon_tit_slides_wrap_li_span = document.querySelectorAll('.lfon_tit_slides_wrap>ul>li>span');
          lfon_tit_slides_wrap_li_span.forEach(span=>{
            span.style.animation = "none";
          })
          lfon_tit_slides_wrap_li_span[idx].style.animation = "shootLeft 0.4s ease-in-out";

          // 백그라운드 효과
          lfon_wrap.style.background = "url(../lf_images/lfon_mediaBg" + (idx + 1) + ".png) no-repeat";
          lfon_wrap.style.backgroundSize = "cover";
          lfon_wrap.style.backgroundAttachment = "fixed";
         }
      })
      // 타이틀 효과 내리고~
      lfon_slides.addEventListener("mouseleave", function(){
        lfon_tit_slides_wrap_li.forEach(all=>{
          all.style.opacity = "1";
        })
      })

    })
  } else {
    // 초기값 설정
    lfon_tit_slides_wrap_li.forEach((li,idx,all)=>{
      li.style.display = "none";
      all[1].style.display = "block";
    })

    lfon_wrap.style.background = "#445560";
    lfon_wrap.style.backgroundSize = "auto";
    lfon_wrap.style.backgroundAttachment = "scroll";

    // 호버시 타이틀 및 백그라운드 효과
    lfon_slide.forEach((slide,idx,parent)=>{
      slide.addEventListener("mouseover", function(){
        if(!lfon_pressed){
           // 타이틀 효과 올리고~
           lfon_tit_slides_wrap_li.forEach(all=>{
            all.style.display = "none";
          })
          lfon_tit_slides_wrap_li[idx].style.display = "block";

          // 타이틀 슛 효과 제거
          let lfon_tit_slides_wrap_li_span = document.querySelectorAll('.lfon_tit_slides_wrap>ul>li>span');
          lfon_tit_slides_wrap_li_span.forEach(span=>{
            span.style.animation = "none";
          })

          // 백그라운드 효과
          lfon_wrap.style.background = "#445560";
          lfon_wrap.style.backgroundSize = "auto";
          lfon_wrap.style.backgroundAttachment = "scroll";
         }
      })
    })
  }
});
// 미디어 백그라운드 반응형 끝
// ==========================


// section3 미디어 슬라이드 끝
// ==========================================================
