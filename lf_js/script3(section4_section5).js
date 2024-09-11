// ==========================================================
// section5 sns 슬라이드

let social_board_slide_wrap = document.querySelector(".social_board_slide_wrap");
let social_board_slides = document.querySelector(".social_board_slider");
let social_board_slide = document.querySelectorAll(".social_board_slider>li");
let social_board_slide_a = document.querySelectorAll(".social_board_slide>li>a")


// 드래그 슬라이드 변수
let social_startX;
let social_endX;
let social_pressed = false;
let social_moved = false;
let social_scrollLeft;

// ===============
// 드래그
social_board_slide_wrap.addEventListener("mousedown", socialDragStart);
social_board_slide_wrap.addEventListener("mousemove", socialDragMove);
social_board_slide_wrap.addEventListener("mouseup", socialDragEnd);

function socialDragStart(e){
  social_pressed = true;
  social_startX = e.pageX - social_board_slides.offsetLeft;
  social_scrollLeft = social_board_slide_wrap.scrollLeft;
  // social_board_slides.classList.add("active");

  // 마우스 커서 효과
  // cursor2.style.width = "140px";
  // cursor2.style.height = "30px";
  cursor2.style.transform = "scaleX(1.5) scaleY(0.4)"

  document.onmouseup = socialDragEnd;
  document.onmousemove = socialDragMove;
}

function socialDragMove(e){
  social_moved = true;
  if(!social_pressed) return;
  e.preventDefault();
  social_endX = e.pageX - social_board_slides.offsetLeft;
  social_board_slide_wrap.scrollLeft = social_scrollLeft - (social_endX - social_startX)/1.2; 

  // lfon_slides.style.left = lfon_endX - lfon_startX + "px";
  // checkboundary();

  //앵커태그 기능 막기
  if(Math.abs(social_endX - social_startX) > 0){
    social_board_slide_a.forEach(a=>{
      a.style.pointerEvents = "none";
    })
  }

  // console.log("스크롤레프트값", social_board_slide_wrap.scrollLeft)
  // console.log("특정요소값", social_board_slide[social_board_slide.length-4].offsetLeft)
  

}


function socialDragEnd(){
  // 앵커태그 기능 살리기
  social_board_slide_a.forEach(a=>{
    a.style.pointerEvents = "auto";
  })

  social_pressed = false;
  social_moved = false;
  // social_board_slides.classList.remove("active");

  // 마우스 커서 효과
  // cursor2.style.width = "";
  // cursor2.style.height = "";
  cursor2.style.transform = ""

  document.onmouseup = null;
  document.onmousemove = null;
}

// =================
// sns 마우스 커서
social_board_slide_wrap.addEventListener("mousemove", moveSocial_Cursor);
social_board_slide_wrap.addEventListener("mouseleave", outSocial_Cursor);

function moveSocial_Cursor(e){
  cursor2.style.display = "block";
  cursor2_follow.style.display = "flex";
  gsap.to(cursor2, { duration: 0, left: e.pageX - cursor2.offsetWidth/2, top: e.pageY - cursor2.offsetWidth/2 });
  gsap.to(cursor2_follow, { duration: 0.3, left: e.pageX - cursor2_follow.offsetWidth/2, top: e.pageY - cursor2_follow.offsetWidth/2 });
}

function outSocial_Cursor(){
  cursor2.style.display = "none";
  cursor2_follow.style.display = "none";
}
// sns 마우스 커서 끝
// =================




// ==============================================
// ==============================================
// 로딩시 실행될 스크립트
// 해더 및 section1 비주얼 슬라이드
let loading_wrap = document.querySelector(".loading_wrap");
let nav = document.querySelector("#nav");

window.addEventListener("load", function(){
  setTimeout(function(){
    loading_wrap.style.display = "none";
    nav.classList.add("show");
    visual_slides.classList.add("show");
    document.getElementsByTagName("body")[0].classList.remove("stick");
  }, 4000)
  // setTimeout(function(){
  //   new_visual_slide.forEach(slide=>{
  //     slide.style.transitionDelay = "initial";
  //   })
  // }, 3400)
})


let lookBook_wrap = document.querySelector(".lookBook_wrap");
let lfmall_go = document.querySelector(".lfmall_go");
let lfon_tit_wrap = document.querySelector(".lfon_tit_wrap");
let typography_area = document.querySelector(".typography_area");
let social_board_wrap = document.querySelector(".social_board_wrap");

window.addEventListener('scroll', function(){
  let wScroll = document.documentElement.scrollTop;

  // section2 룩북 페럴렉스
  if(wScroll >= lookBook_wrap.offsetTop - window.innerHeight / 1.5){
    lookBook_wrap.classList.add("show");
    setTimeout(function(){
      lookBook_slide.forEach(slide=>{
        slide.style.transitionDelay = "0s";
      })
    }, 2000)
  } else {
    lookBook_wrap.classList.remove("show");
    lookBook_slide[0].style.transitionDelay = "0.6s";
    lookBook_slide[1].style.transitionDelay = "0.8s";
    lookBook_slide[2].style.transitionDelay = "1s";
    lookBook_slide[3].style.transitionDelay = "1.2s";
    lookBook_slide[4].style.transitionDelay = "1.4s";
    lookBook_slide[5].style.transitionDelay = "1.6s";
    lookBook_slide[6].style.transitionDelay = "1.8s";
    lookBook_slide[7].style.transitionDelay = "2s";
  }

  // section2 LF몰 버튼 페럴렉스
  if(wScroll >= lfmall_go.offsetTop - window.innerHeight / 1.3){
    lfmall_go.classList.add("show");
  } else {
    lfmall_go.classList.remove("show");
  }


// section3 미디어 타이틀 페럴렉스
if(wScroll >= lfon_wrap.offsetTop - window.innerHeight / 1.5){
  lfon_tit_wrap.classList.add("show");
} else {
  lfon_tit_wrap.classList.remove("show");
}
// section3 미디어 슬라이드 페럴렉스
if(wScroll >= (document.documentElement.scrollTop + lfon_slides_wrap.getBoundingClientRect().top) - window.innerHeight / 1.7){
  lfon_slides_wrap.classList.add("show");
  setTimeout(function(){
    lfon_slide.forEach(slide=>{
      slide.style.transitionDelay = "0s";
    })
  }, 1200)
} else {
  lfon_slides_wrap.classList.remove("show");
  lfon_slide[0].style.transitionDelay = "0.1s";
  lfon_slide[1].style.transitionDelay = "0.3s";
  lfon_slide[2].style.transitionDelay = "0.5s";
  lfon_slide[3].style.transitionDelay = "0.7s";
  lfon_slide[4].style.transitionDelay = "0.9s";
  lfon_slide[5].style.transitionDelay = "1.1s";
  lfon_slide[6].style.transitionDelay = "1.3s";
  lfon_slide[7].style.transitionDelay = "1.5s";
}

  // section4 타이포그래피 페럴렉스
if(wScroll < typography_area.offsetTop - window.innerHeight / 3.1 && wScroll >= typography_area.offsetTop - window.innerHeight){
  typography_area.classList.add("show");
} else{
  typography_area.classList.remove("show");
}


// section5 sns 타이틀 페럴렉스
if(wScroll >= social_board_wrap.offsetTop - window.innerHeight / 2.5){
  social_board_wrap.classList.add("show");
} else {
  social_board_wrap.classList.remove("show");
}
// section5 sns 슬라이드 페럴렉스
if(wScroll >= social_board_slide_wrap.offsetTop - window.innerHeight / 2.5){
  social_board_slide_wrap.classList.add("show");
  setTimeout(function(){
    social_board_slide.forEach(slide=>{
      slide.style.transitionDelay = "0s";
    })
  }, 2000)
} else {
  social_board_slide_wrap.classList.remove("show");
  social_board_slide[0].style.transitionDelay = "0.1s";
  social_board_slide[1].style.transitionDelay = "0.3s";
  social_board_slide[2].style.transitionDelay = "0.5s";
  social_board_slide[3].style.transitionDelay = "0.7s";
  social_board_slide[4].style.transitionDelay = "0.9s";
  social_board_slide[5].style.transitionDelay = "1.1s";
  social_board_slide[6].style.transitionDelay = "1.3s";
  social_board_slide[7].style.transitionDelay = "1.5s";
  social_board_slide[8].style.transitionDelay = "1.7s";
  social_board_slide[9].style.transitionDelay = "1.9s";
  social_board_slide[10].style.transitionDelay = "2.1s";
  social_board_slide[11].style.transitionDelay = "2.3s";
}







})  //window 스크롤 이벤트












// ==============================================
// ==============================================
//   $(window).scroll(function(){
//     let wScroll = $(this).scrollTop();

    
//     if(wScroll >= new_arrivals.offset().top - $(window).height() / 1.5){
//       new_arrivals.addClass("show");
//     }


//   if(wScroll >= best_pdt_wrap.offset().top - $(window).height() / 1.2){
//      best_pdt_wrap.addClass("show");
//   }


//   if(wScroll >= $(".pic_wrap").offset().top - $(window).height() / 1.5){
//     $(".pic_wrap").addClass("show");
//   }
  

//   if(wScroll >= $(".newsRoom_wrap").offset().top - $(window).height() / 1.5){
//     $(".newsRoom_wrap").addClass("show");
//   }


//   if(wScroll >= $(".mediate_wrap").offset().top - $(window).height() / 1.5){
//     $(".mediate_wrap").addClass("show");
//   }

//   });

// });



