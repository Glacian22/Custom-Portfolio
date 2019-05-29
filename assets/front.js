let bSidebar = false;

sizeChecker = setInterval(() => {
  if ((window.innerWidth > 992) && !bSidebar) showNav()
}, 250)

// shows and hides sidebar when in mobile mode
$(document).on("click", ".icon", function (event) {
  if (!bSidebar) {
    showNav();
  } else {
    hideNav();
  }
})

// hides sidebar if nav link is clicked
const navClick = (link) => {
  if (window.innerWidth <= 992)
    hideNav();

  if (link.id !== "active"){
    $(".n-link").attr("id", "");
    link.id = "active";
  }
}

const showNav = () => {
  console.log("show nav")
  $(".sidebar").css("transform", "translateX(0px)")
  bSidebar = true;
}

const hideNav = () => {
  console.log("hide nav")
  $(".sidebar").css("transform", "translateX(-300px)")
  bSidebar = false;
}

// onclick for the navlinks
$(".n-link").click(() => {
  console.log(this.id())
  if (this.id() === "active")
    null
})






// let Abram = (project)=>{
//   let newBrainings = learnAllTheThings(project)
//   return doAllTheThings(newBrainings, project)
// }
