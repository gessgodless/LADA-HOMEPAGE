/* text_iife.js */
// 텍스트 작성과 삭제 즉시 실행 함수
(function(){
    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['A B LADDER', 'UI Interface', 'Logging', 'Motion Control', 'Simulation'];
    const IndexbgImageEl = document.querySelector('main');
    const imageArr = ['images/seven.png','images/PLC.png', 'images/ROBOT.jpg', 'images/SENSOR.jpg', 'images/TheSun.jpg' ];
    let index = 0;
    let currentTxt = txtArr[index].split(""); 
    function writeTxt(){
      spanEl.textContent  += currentTxt.shift(); 
      if(currentTxt.length !== 0){ 
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
      }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);

        imageArr.values
        IndexbgImageEl.style.width='100%';
        IndexbgImageEl.style.height='100vh';
        IndexbgImageEl.style.color='white';

        if(index==0){IndexbgImageEl.style.background='linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('+'images/seven.png'+') center center';}
        if(index==1){IndexbgImageEl.style.background='linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('+'images/PLC.png'+') center center';}
        if(index==2){IndexbgImageEl.style.background='linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('+'images/SENSOR.jpg'+') center center';}
        if(index==3){IndexbgImageEl.style.background='linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('+'images/ROBOT.jpg'+') center center';}
        if(index==4){IndexbgImageEl.style.background='linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('+'images/TheSun.jpg'+') center center';}

        IndexbgImageEl.style.backgroundSize='cover';
        IndexbgImageEl.style.display='flex';
        IndexbgImageEl.style.justifycontent='center';
        IndexbgImageEl.style.alignitems='center';
        IndexbgImageEl.style.textAlign='center';

        

      }
    }
    function deleteTxt(){
      currentTxt.pop();
      spanEl.textContent = currentTxt.join("");
      if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100))
      }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
      }
    }
    writeTxt();
  })();
  /* end text_iife.js */
  
  /* scroll_request.js */
  /* 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 */
  const headerEl = document.querySelector("header");
  window.addEventListener('scroll', function(){
    requestAnimationFrame(scrollCheck);
  });
  function scrollCheck(){
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY > 0){
      headerEl.classList.add("active");
    }else{
      headerEl.classList.remove("active");
    }
  }
  /* end scroll_request.js */
  
  /* move.js */
  /* 애니메이션 스크롤 이동 */
  const animationMove = function(selector){
    // ① selector 매개변로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // ② 현재 브라우저의 스크롤 정보(y 값)
    const browserScrollY = window.pageYOffset;
    // ③ 이동할 대상의 위치(y 값)
    const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
    // ④ 스크롤 이동
    window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
  };
  // 스크롤 이벤트 연결하기
  const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']"); 
  for(let i = 0; i < scollMoveEl.length; i++){
    scollMoveEl[i].addEventListener('click', function(e){
      const target = this.dataset.target;
      animationMove(target);
    });
  }
  /* End move.js */