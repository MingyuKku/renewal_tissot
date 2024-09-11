// ==========================================================
// header

// 마우스 커서
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
let cursor2_follow = document.querySelector(".cursor2_follow");




// ======================
// 해더 내비게이션 왼쪽
let nav_highlight_left = document.querySelector(".highlight_left");
let nav_left_li = document.querySelectorAll(".nav_left>ul>li");
let nav_left = document.querySelector(".nav_left");
let nav_bg = document.querySelector(".nav_bg");
let desktop_brand_menu = document.querySelector(".desktop_brand_menu");

nav_highlight_left.style.width = nav_left_li[0].offsetWidth + "px";
// nav_highlight_left.style.height = nav_left_li[0].offsetHeight + "px";
nav_highlight_left.style.opacity = "0";
nav_bg.style.height = "0";

nav_left_li.forEach((li, Idx, left)=>{
  li.addEventListener("mouseover", function(){
    nav_highlight_left.style.opacity = "1";
    nav_highlight_left.style.width = li.offsetWidth + "px";
    nav_highlight_left.style.left = li.offsetLeft + "px";
    li.children[0].style.color = "#fff";
  })
  li.addEventListener("mouseout", function(){
    li.children[0].style.color = "";
  })

  // 내비게이션 배경
  left[0].addEventListener("mouseover", function(){
    nav_bg.style.height = "62px";
    nav_bg.style.borderColor = "#BCC3C7";
  })
  left[0].addEventListener("mouseout", function(){
    nav_bg.style.height = "";
    nav_bg.style.borderColor = "";
  })
  left[2].addEventListener("mouseover", function(){
    nav_bg.style.height = "62px";
    nav_bg.style.borderColor = "#BCC3C7";
  })
  left[2].addEventListener("mouseout", function(){
    nav_bg.style.height = "";
    nav_bg.style.borderColor = "";
  })

  // LF Brand 2차 & 3차 메뉴
  left[1].addEventListener("click", function(){
    desktop_brand_menu.classList.toggle("active");
    this.classList.toggle("active");
    if(desktop_brand_menu.classList.contains("active")){
      nav_left_li.forEach((li,idx,left)=>{
        left[0].style.pointerEvents = "none";
        left[2].style.pointerEvents = "none";
      })
      this.style.background = "#EE3023"
    } else {
      nav_left_li.forEach((li,idx,left)=>{
        left[0].style.pointerEvents = "";
        left[2].style.pointerEvents = "";
      })
      this.style.background = "";
    }
  });
})  //nav_left_li - forEach 끝

nav_left.addEventListener("mouseout", function(){
  nav_highlight_left.style.opacity = "0";
})


// ======================
// 해너 내비게이션 오른쪽
let nav_highlight_right = document.querySelector(".highlight_right");
let nav_right_li = document.querySelectorAll(".nav_right>ul>li");
let nav_right = document.querySelector(".nav_right");

nav_highlight_right.style.width = nav_right_li[0].offsetWidth + "px";
// nav_highlight_right.style.height = nav_right_li[0].offsetHeight + "px";
nav_highlight_right.style.opacity = "0";

nav_right_li.forEach(li=>{
  li.addEventListener("mouseover", function(){
    nav_highlight_right.style.opacity = "1";
    nav_highlight_right.style.width = li.offsetWidth + "px";
    nav_highlight_right.style.left = li.offsetLeft + "px";
    li.children[0].style.color = "#fff";
  })
  li.addEventListener("mouseout", function(){
    li.children[0].style.color = "";
  })
})

nav_right.addEventListener("mouseout", function(){
  nav_highlight_right.style.opacity = "0";
})


// ======================
// 모바일 메뉴
// -------------------------
// 메뉴아이콘 클릭
let mobile_icon_menu = document.querySelector(".mobile_icon_menu");
let mobile_menu_area = document.querySelector(".mobile_menu_area");
let mobile_menu_wrap = document.querySelector(".mobile_menu_wrap");

mobile_icon_menu.addEventListener("click", function(){
  this.classList.toggle("active");

  if(this.classList.contains("active")){
    document.getElementsByTagName("body")[0].classList.add("not_scroll");

    mobile_menu_area.style.display = "block";
    setTimeout(function(){
      mobile_menu_area.style.opacity = "1";
    },50)
    setTimeout(function(){
      mobile_menu_wrap.style.right = "0";
    },100)
  } else {
    document.getElementsByTagName("body")[0].classList.remove("not_scroll");

    setTimeout(function(){
      mobile_menu_wrap.style.right = "";
    },100)
    setTimeout(function(){
      mobile_menu_area.style.opacity = "";
    },400)
    setTimeout(function(){
      mobile_menu_area.style.display = "";
    },820)
  } 
})

window.addEventListener("resize", function(){
  if(window.innerWidth > 1280){
    mobile_menu_area.style.display = "";
    mobile_menu_area.style.opacity = "";
    mobile_menu_wrap.style.right = "";
    mobile_icon_menu.classList.remove("active");
  }
})

// 모바일 메뉴리스트 스타일
let mobile_menu_center_li = document.querySelectorAll(".mobile_menu_center>ul>li");
let mobile_menu_center_li_ul = document.querySelectorAll(".mobile_menu_center>ul>li>ul");
let menu_more_icon = document.querySelectorAll(".menu_more_icon");

mobile_menu_center_li.forEach((li,idx,lipar)=>{
  li.addEventListener("click", function(){
    if(li.children[2].offsetHeight == 0){
      mobile_menu_center_li_ul.forEach(ul=>{
        ul.style.height = "0";
      })
      li.children[2].style.height = li.children[2].scrollHeight + "px";

      menu_more_icon.forEach(icon=>{
        icon.classList.remove("active");
      })
      menu_more_icon[idx].classList.add("active");

    } else if(li.children[2].offsetHeight > 0) {
      li.children[2].style.height = "0";
      menu_more_icon[idx].classList.remove("active");
    }
  });
});

// ======================
// 해더 고정
let window_Height = window.innerHeight; //현재 브라우저 창의 높이
let docum_Height = document.documentElement.scrollHeight; //현재 문서(스크롤 포함)의 높이
let header_Height = document.querySelector("#header").offsetHeight; //#header의 높이값
let lastScrollTop = 0;
let moveScroll;

// 사용자가 스크롤을 했는지 감지하는 역할
window.addEventListener("scroll", function(){
  moveScroll = true;
});
// 0.1초마다 스크롤을 감지해 스크롤이 일어났을 시 hasScroll 함수를 실행시킨다
setInterval(function(){
  if(moveScroll){
    hasScroll();
    moveScroll = false;
  }
}, 100)

function hasScroll(){
  let window_Scroll = window.pageYOffset; //브라우저의 스크롤 값을 구하는 방법2
  if(window_Scroll > lastScrollTop && window_Scroll > header_Height && !mobile_icon_menu.classList.contains("active")){
    // document.querySelector("#header").classList.add("on");
    document.querySelector("#header").style.top = "-75px"
  } else {
    // document.querySelector("#header").classList.remove("on");
    document.querySelector("#header").style.top = "0";
  }
  lastScrollTop = window_Scroll;

  // 해더에 그림자 생기기
  if(window_Scroll > header_Height){
    document.querySelector("#header").style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.15)";
  } else {
    document.querySelector("#header").style.boxShadow = "";
  }
}

// header 끝
// ==========================================================


// ==========================================================
// section1 메인 비주얼 슬라이드
let visual_slide_wrap = document.querySelector(".visual_slide_wrap"),
    visual_slides  = document.querySelector(".visual_slides"),
    visual_slide = document.querySelectorAll(".visual_slide"),
    visual_slideIdx = 0,
    visual_setSlide = "",
    visual_setSlideControl = true;

// 드래그 슬라이드 변수
let visual_startX;
let visual_endX;
let visual_pressed = false;
let visual_moved = false;
// let visual_scrollLeft = '';

//슬라이드 복제   
makeCloneSlide();
function makeCloneSlide(){
  for(let i = 0; i < 4; ++i){
    let cloneSlide = visual_slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    visual_slides.appendChild(cloneSlide);
  } 
  for(let i = visual_slide.length-1; i > visual_slide.length-5; --i){
    let cloneSlide = visual_slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    visual_slides.prepend(cloneSlide);
  }
}
//슬라이드 복제  끝  

// ===================
// 반응형으로 슬라이드 크기 및 위치 조절
let new_visual_slides = document.querySelector(".visual_slides"),
    new_visual_slide = document.querySelectorAll(".visual_slides>li"),
    visual_slide_width;

window.addEventListener("load", visualResponsive);
window.addEventListener("resize", visualResponsive);

function visualResponsive(){
  if(window.innerWidth > 1920){

    document.querySelectorAll('.clone').forEach(cl=>{
      cl.style.display = 'block';
    })

    visual_slide_width = 100/4;
    new_visual_slide.forEach(li=>{
      li.style.width = visual_slide_width + "%";
      li.children[0].style.opacity = "0.7";
    })
    new_visual_slides.style.width = visual_slide_width * new_visual_slide.length + "%"; 

    // 슬라이드 이미지에 마우스 올리면 커지기
    new_visual_slide.forEach(li=>{
      li.addEventListener("mouseover", function(){
        if(!visual_pressed){
          li.style.width = visual_slide_width*1.5 + "%"
          li.children[0].style.opacity = "0";
        }
      })

      li.addEventListener("mouseout", function(){
        if(!visual_pressed){
          li.style.width = visual_slide_width + "%"  
          li.children[0].style.opacity = "0.7";
        }
      })
    }) 

    new_visual_slides.style.transform = "translateX(" + -(100/new_visual_slide.length)*4 + "%)";
  }  // *1920 이상*----------------------

  else if(window.innerWidth <= 1920 && window.innerWidth > 1400){
    document.querySelectorAll('.clone').forEach(cl=>{
      cl.style.display = 'block';
    })

    visual_slide_width = 100/4;
    new_visual_slide.forEach(li=>{
      li.style.width = visual_slide_width + "%"; 
      li.children[0].style.opacity = "0.7";
    })
    new_visual_slides.style.width = visual_slide_width * new_visual_slide.length + "%"; 


    // 슬라이드 이미지에 마우스 올리면 커지기
    new_visual_slide.forEach(li=>{
      li.addEventListener("mouseover", function(){
        if(!visual_pressed){  
          li.children[0].style.opacity = "0";
          li.style.width = visual_slide_width*1.8 + "%"
        }
        
      })

      li.addEventListener("mouseout", function(){
        if(!visual_pressed){
          new_visual_slide.forEach(li=>{
            li.style.width = visual_slide_width + "%";
            li.children[0].style.opacity = "0.7";
          })
        }
      })
    }) 

    new_visual_slides.style.transform = "translateX(" + -(100/new_visual_slide.length)*4 + "%)";

  }   //*1400 이상 1920 이하*----------------------
  
  else if (window.innerWidth <= 1400 && window.innerWidth >= 840){

    document.querySelectorAll('.clone').forEach(cl=>{
      cl.style.display = 'none';
    })

    visual_slide_width = 100/3;
    new_visual_slide.forEach(li=>{
      li.style.width = visual_slide_width + "%"; 
      li.children[0].style.opacity = "0.7";
    })
    new_visual_slides.style.width = visual_slide_width * (new_visual_slide.length - document.querySelectorAll('.clone').length) + "%"; 

    //  슬라이드 이미지에 마우스 올리면 커지기
    new_visual_slide.forEach(li=>{
      li.addEventListener("mouseover", function(){
        if(!visual_pressed){
          li.style.width = visual_slide_width*2 + "%"
          li.children[0].style.opacity = "0";
        }
      })

      li.addEventListener("mouseout", function(){
          li.style.width = visual_slide_width + "%"
          li.children[0].style.opacity = "0.7";
      })
    }) 

    new_visual_slides.style.transform = "translateX(0)";

  } //*840 이상 1400 이하*----------------------

  else if(window.innerWidth < 840 && window.innerWidth > 480){
    document.querySelectorAll('.clone').forEach(cl=>{
      cl.style.display = 'none';
    })

    visual_slide_width = 100/2;
    new_visual_slide.forEach(li=>{
      li.style.width = visual_slide_width + "%"; 
      li.children[0].style.opacity = "0.7";
    })
    new_visual_slides.style.width = visual_slide_width * (new_visual_slide.length - document.querySelectorAll('.clone').length) + "%"; 

    // 슬라이드 이미지에 마우스 올리면 커지기
    new_visual_slide.forEach(li=>{
      li.addEventListener("mouseover", function(){
        if(!visual_pressed){
          li.style.width = visual_slide_width*1.5 + "%"
          li.children[0].style.opacity = "0";
        }
      })

      li.addEventListener("mouseout", function(){
          li.style.width = visual_slide_width + "%"
          li.children[0].style.opacity = "0.7";
      })
    }) 

    new_visual_slides.style.transform = "translateX(0)";

  }   //*480 이상 840 이하*----------------------

  else if(window.innerWidth <= 480){
    document.querySelectorAll('.clone').forEach(cl=>{
      cl.style.display = 'none';
    })

    visual_slide_width = 100/1;
    new_visual_slide.forEach(li=>{
      li.style.width = visual_slide_width + "%"; 
      li.children[0].style.opacity = "0";
    })
    new_visual_slides.style.width = visual_slide_width * (new_visual_slide.length - document.querySelectorAll('.clone').length) + "%";

    // 슬라이드 이미지에 마우스 올려도 그대로
    new_visual_slide.forEach(li=>{
      li.addEventListener("mouseover", function(){
          li.style.width = visual_slide_width + "%"
      })
      li.addEventListener("mouseout", function(){   
          li.style.width = visual_slide_width + "%"
      })
    }) 
    new_visual_slides.style.transform = "translateX(0)";

  }   //*480 이하*----------------------
}


new_visual_slides.classList.add("transition");
new_visual_slides.style.left = "0";



// -----------------------------------------------
// 자동 슬라이드
// autoSlide()
// function autoSlide(){
//   setSlide = setInterval(function(){
//     visualSlide(slideIdx + 1);
//   }, 3000)
// }



// =============================================
// 메인 비주얼 드래그 슬라이드
window.addEventListener('load', visualSlideResponse);
window.addEventListener('resize', visualSlideResponse);

function visualSlideResponse(){
  if(window.innerWidth > 1400){
    // new_visual_slides.addEventListener("mousedown", dragStart);
    // new_visual_slides.addEventListener("mousemove", dragMove);
    // new_visual_slides.addEventListener("mouseup", dragEnd);
    visual_slide_wrap.addEventListener("mousedown", dragStart);
    visual_slide_wrap.addEventListener("mousemove", dragMove);
    visual_slide_wrap.addEventListener("mouseup", dragEnd);
    // new_visual_slides.addEventListener("touchstart", dragStart);
    // new_visual_slides.addEventListener("touchmove", dragMove);
    // new_visual_slides.addEventListener("touchend", dragEnd);

    visual_slide_wrap.removeEventListener("mousedown", tabletDragStart);
    visual_slide_wrap.removeEventListener("mousemove", tabletDragMove);
    visual_slide_wrap.removeEventListener("mouseup", tabletDragEnd);

    // 클론살리기
    document.querySelectorAll('.clone').forEach(cl=>{
      cl.style.display = 'block';
    })

  }else if (window.innerWidth <= 1400){
    new_visual_slides.removeEventListener("mousedown", dragStart);
    new_visual_slides.removeEventListener("mousemove", dragMove);
    new_visual_slides.removeEventListener("mouseup", dragEnd);
    new_visual_slides.removeEventListener("touchstart", dragStart);
    new_visual_slides.removeEventListener("touchmove", dragMove);
    new_visual_slides.removeEventListener("touchend", dragEnd);


    // visual_slide_wrap.addEventListener("mousedown", dragStart);
    // visual_slide_wrap.addEventListener("mousemove", dragMove);
    // visual_slide_wrap.addEventListener("mouseup", dragEnd);

    visual_slide_wrap.addEventListener("mousedown", tabletDragStart);
    visual_slide_wrap.addEventListener("mousemove", tabletDragMove);
    visual_slide_wrap.addEventListener("mouseup", tabletDragEnd);

  }
}


// ========================================
// 데스크탑용 드래그 슬라이드
function dragStart(e){
  // visual_startX = e.pageX - new_visual_slides.offsetLeft;
  // if(e.type == "touchstart"){
  //   visual_startX = e.touches[0].pageX - new_visual_slides.offsetLeft;
  // }

  // visual_pressed = true;

  visual_startX = e.pageX - new_visual_slides.offsetLeft;
  // visual_scrollLeft = visual_slide_wrap.scrollLeft;
  visual_pressed = true;
  

  document.onmouseup = dragEnd;
  document.onmousemove = dragMove;
}

function dragMove(e){

  // if(visual_pressed){
  //   visual_moved = true;
  //   e.preventDefault();  
  //   visual_endX = e.pageX - new_visual_slides.offsetLeft; 
  //   if(e.type == "touchmove"){
  //     visual_endX = e.touches[0].pageX - new_visual_slides.offsetLeft;
  //   }
  // }   

  if(!visual_pressed) return;
  visual_moved = true;
  e.preventDefault();
  visual_endX = e.pageX - new_visual_slides.offsetLeft;
  // visual_slide_wrap.scrollLeft = visual_scrollLeft - (visual_endX - visual_startX)/1.2;

  // 앵커태그 기능 막기
  // if(Math.abs(lookBook_endX - lookBook_startX) > 0){
  //   lookBook_slide_a.forEach(a=>{
  //     a.style.pointerEvents = "none";
  //   })
  // }


}

function dragEnd(e){

  // if(visual_moved){

  //   if(visual_startX - visual_endX > new_visual_slide[0].offsetWidth/2){
  //     visualSlide(visual_slideIdx + 1);     
  //   } else if (visual_endX - visual_startX > new_visual_slide[0].offsetWidth/2){
  //     visualSlide(visual_slideIdx - 1);     
  //   }

  //   visual_pressed = false;
  //   visual_moved = false;
  // }
  if(visual_moved){
    if(visual_startX - visual_endX > new_visual_slide[0].offsetWidth){
      visualSlide(visual_slideIdx + 1);
    } else if (visual_endX - visual_startX > new_visual_slide[0].offsetWidth){
      visualSlide(visual_slideIdx - 1);
    }
  }
  


  visual_pressed = false;
  visual_moved = false;

  document.onmouseup = null;
  document.onmousemove = null; 
}
// 데스크탑 드래그 슬라이드 끝
// ================================================


// ===============================================
// 테블릿 및 모바일용 드래그 슬라이드
function tabletDragStart(e){ 
  // if(e.type == "touchstart"){
  //   visual_startX = e.touches[0].pageX - new_visual_slides.offsetLeft;

  // }
  
  
  visual_pressed = true;
  visual_startX = e.pageX - new_visual_slides.offsetLeft;
  visual_scrollLeft = visual_slide_wrap.scrollLeft;
  

  document.onmouseup = tabletDragEnd;
  document.onmousemove = tabletDragMove;
}

function tabletDragMove(e){
  visual_moved = true;
  if(!visual_pressed) return;
  e.preventDefault();
  visual_endX = e.pageX - new_visual_slides.offsetLeft;
  visual_slide_wrap.scrollLeft = visual_scrollLeft - (visual_endX - visual_startX)/1.2;
  // 앵커태그 기능 막기
  // if(Math.abs(lookBook_endX - lookBook_startX) > 0){
  //   lookBook_slide_a.forEach(a=>{
  //     a.style.pointerEvents = "none";
  //   })
  // }
}

function tabletDragEnd(){
  // 앵커태그 기능 살리기
  // lookBook_slide_a.forEach(a=>{
  //   a.style.pointerEvents = "auto";
  // })

  visual_pressed = false;
  visual_moved = false;

  document.onmouseup = null;
  document.onmousemove = null;
}

// 테블릿 및 모바일용 드래그 슬라이드 끝
// ===============================================


// prev, next 버튼으로 슬라이드 조정
let visual_prev = document.querySelector(".visual_prev");
let visual_next = document.querySelector(".visual_next");
let set_control_flag = true;

visual_prev.addEventListener("click", function(){
  if(set_control_flag){
    visualSlide(visual_slideIdx - 1);
    set_control_flag = false;
    setTimeout(function(){
      set_control_flag = true;
    },430)
  }
})

visual_next.addEventListener("click", function(){
  if(set_control_flag){
    visualSlide(visual_slideIdx + 1);
    set_control_flag = false;
    setTimeout(function(){
      set_control_flag = true;
    }, 430)
    
  }
})



// -----------------------------------------------
// 수동슬라이드
function visualSlide(n){
  visual_slideIdx = n;

  if(visual_slideIdx == 8){
    setTimeout(function(){
      new_visual_slides.classList.remove("transition");
      visual_slideIdx = 0;
      new_visual_slides.style.left = "0";
    }, 410)
    setTimeout(function(){
      new_visual_slides.classList.add("transition")
    }, 430)
  }

  if(visual_slideIdx == -1){
    setTimeout(function(){
      new_visual_slides.classList.remove("transition");
      visual_slideIdx = 7;
      new_visual_slides.style.left =  -(7 * visual_slide_width) + "%";
    }, 410)
    setTimeout(function(){
      new_visual_slides.classList.add("transition")
    }, 430)
  }

  new_visual_slides.style.left = -(visual_slideIdx * visual_slide_width) + "%";
}
// section1 메인 비주얼 슬라이드 끝
// ==========================================================



