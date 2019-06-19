let bSidebar = false;
let loc = document.location.href.split('#')[1];

$(document).ready(function () {
  $("#next").css("top", $(document).height() - 100)

  // hide all main content, and reveal only the one we're on
  let url = document.location

  // if loading base domain, redirect to home
  if (!loc) {
    window.location = url + "#home"
  }
  // $(".cont").css("display", "none")
  $("." + loc).css("display", "block")
  $("#" + loc).attr("class", "n-link active")
});

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

const nextNav = () => {
  // get the ID of whatever page we're on
  let id = parseInt($("." + loc).attr("id"));
  id += 1;
  id > 3 ? id = 0 : null;
  let nextPage = $("#" + id).attr("class").split(" ")[0];
  // advance page to next ID
  let url = document.location.href.split('#')[0];
  window.location = url + "#" + nextPage;
}

const navClick = (link) => {
  // hides sidebar if nav link is clicked
  if (window.innerWidth <= 992) {
    hideNav();
  }

  let newLoc = $(link).attr("id");

  if (loc !== newLoc) {
    $(".cont").css("display", "none");
    $("." + newLoc).css("display", "block")
    loc = newLoc;

    $(".n-link").attr("class", "n-link");
    $("#" + newLoc).attr("class", "n-link active")

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
  // console.log(this.id())
  if (this.id() === "active")
    null
})