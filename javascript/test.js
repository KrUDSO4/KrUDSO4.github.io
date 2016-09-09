if (window.addEventListener) {
  window.addEventListener("scroll", function () {fix_sidemenu(); });
  window.addEventListener("resize", function () {fix_sidemenu(); });  
  window.addEventListener("touchmove", function () {fix_sidemenu(); });  
  window.addEventListener("load", function () {fix_sidemenu(); });
} else if (window.attachEvent) {
  window.attachEvent("onscroll", function () {fix_sidemenu(); });
  window.attachEvent("onresize", function () {fix_sidemenu(); });  
  window.attachEvent("ontouchmove", function () {fix_sidemenu(); });
  window.attachEvent("onload", function () {fix_sidemenu(); });
}
function fix_sidemenu() {
  if (document.getElementById("leftmenu")) {
    fix_sidemenu_old();
  } else {
    fix_sidemenu_new();
  }
}

function fix_sidemenu_old() {
  var w, top;
  w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  top = scrolltop()    
  if (w < 993 && w > 600) {
    if (top == 0) {
      document.getElementById("leftmenu").style.paddingTop = "147px";      
    }
    if (top > 0 && top < 100) {
      document.getElementById("leftmenu").style.paddingTop = (147 - top) + "px";      
    }
    if (top > 100) {
      document.getElementById("leftmenu").style.paddingTop = document.getElementById("topnav").offsetHeight + "px";
      document.getElementById("belowtopnav").style.paddingTop = "44px";    
      document.getElementById("topnav").style.position = "fixed";    
      document.getElementById("topnav").style.top = "0";        
    } else {
      document.getElementById("belowtopnav").style.paddingTop = "0";
      document.getElementById("topnav").style.position = "relative";
    }
    document.getElementById("leftmenuinner").style.paddingTop = "0"; //SCROLLNYTT
  } else {
    if (top == 0) {
      if (w < 600) {
        document.getElementById("leftmenu").style.paddingTop = "109px";
      } else {
        document.getElementById("leftmenu").style.paddingTop = "0";
      }
    }
    if (top > 0 && top < 63) {
      document.getElementById("leftmenu").style.paddingTop = (109 - top) + "px";      
    }
    if (top > 63) {
      document.getElementById("leftmenu").style.paddingTop = "44px";      
      if (w > 992) {document.getElementById("leftmenuinner").style.paddingTop = "44px";} //SCROLLNYTT
      document.getElementById("belowtopnav").style.paddingTop = "44px";    
      document.getElementById("topnav").style.position = "fixed";    
      document.getElementById("topnav").style.top = "0";        
    } else {
      if (w > 992) { document.getElementById("leftmenuinner").style.paddingTop = (112 - top) + "px";} //SCROLLNYTT
      document.getElementById("belowtopnav").style.paddingTop = "0";
      document.getElementById("topnav").style.position = "relative";
    }
  }
}
function fix_sidemenu_new() {
  var w, top;
  w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  top = scrolltop()    
  if (w < 993 && w > 600) {
    if (top == 0) {
      document.getElementById("sidenav").style.top = "144px";
    }
    if (top > 0 && top < 100) {
      document.getElementById("sidenav").style.top = (144 - top) + "px";      
    }
    if (top > 100) {
      document.getElementById("sidenav").style.top = document.getElementById("topnav").offsetHeight + "px";
      document.getElementById("belowtopnav").style.paddingTop = "44px";    
      document.getElementById("topnav").style.position = "fixed";    
      document.getElementById("topnav").style.top = "0";        
    } else {
      document.getElementById("belowtopnav").style.paddingTop = "0";
      document.getElementById("topnav").style.position = "relative";
    }
    document.getElementById("leftmenuinner").style.paddingTop = "0"; //SCROLLNYTT
  } else {
    if (top == 0) {
      document.getElementById("sidenav").style.top = "112px";      
    }
    if (top > 0 && top < 66) {
      document.getElementById("sidenav").style.top = (112 - top) + "px";      
    }
    if (top > 66) {
      document.getElementById("sidenav").style.top = "44px";
      if (w > 992) {document.getElementById("leftmenuinner").style.paddingTop = "44px";} //SCROLLNYTT
      document.getElementById("belowtopnav").style.paddingTop = "44px";    
      document.getElementById("topnav").style.position = "fixed";    
      document.getElementById("topnav").style.top = "0";        
    } else {
      if (w > 992) { document.getElementById("leftmenuinner").style.paddingTop = (112 - top) + "px";} //SCROLLNYTT
      document.getElementById("belowtopnav").style.paddingTop = "0";
      document.getElementById("topnav").style.position = "relative";
    }
  }
}
function scrolltop() {
  var top = 0;
  if (typeof(window.pageYOffset) == "number") {
    top = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    top = document.body.scrollTop;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
  }
  return top;
}
function close_menu() {
  var m;
  m = (document.getElementById("leftmenu") || document.getElementById("sidenav"));
  m.style.display = "none";  
  if (document.getElementsByClassName) {
    x = document.getElementsByClassName("chapter")
    for (i = 0; i < x.length; i++) {
      x[i].style.visibility = "visible";
    }
    x = document.getElementsByClassName("nav")
    for (i = 0; i < x.length; i++) {
      x[i].style.visibility = "visible";
    }
    x = document.getElementsByClassName("sharethis")
    for (i = 0; i < x.length; i++) {
      x[i].style.visibility = "visible";
    }            
  }
}