let bSidebar = false;

// shows and hides sidebar when in mobile mode
$(document).on("click", ".icon", function (event) {
  if (!bSidebar) {
    showNav();
  } else {
    hideNav();
  }
})

// hides sidebar if nav link is clicked
$(document).on("click", ".n-link", () => {
  hideNav();
})

const showNav = () => {
  console.log("show nav")
  $(".sidebar").css("transform", "translateX(0px)")
  $(".icon").css("transform", "translateX(300px) scale(1.8,1.8)")
  bSidebar = true;
}

const hideNav = () => {
  console.log("hide nav")
  $(".sidebar").css("transform", "translateX(-300px)")
  $(".icon").css("transform", "translateX(0px) scale(1.8,1.8)")
  bSidebar = false;

}