let bSidebar = false;
let loc = document.location.href.split('#')[1];

$(document).ready(function () {
  $(".cont").css("visibility", "hidden")
  $("." + loc).css("visibility", "visible")
  $("." + loc).css("opacity", "1.0")
  $("." + loc).css("transform", "scale(1.0)")
  $("#" + loc).attr("class", "n-link active")
});

sizeChecker = setInterval(() => {
  if ((window.innerWidth > 992) && !bSidebar) showNav()
}, 250)

locationChecker = setInterval(() => {
  const newLocation = document.location.href.split('#')[1];
  if (loc !== newLocation) {
    // switches revealed section
    $("." + loc).css("transform", "scale(0.1)")
    $("." + loc).css("opacity", "0")
    $(".cont").css("visibility", "hidden")

    let oldLoc = loc;
    setTimeout(() => {
      $("." + oldLoc).css("transform", "scale(6.0)")
    }, 800)

    $("." + newLocation).css("visibility", "visible")
    $("." + newLocation).css("opacity", "1.0")
    $("." + newLocation).css("transform", "scale(1.0)")

    // clear active link class
    $(".n-link").attr("class", "n-link");
    $("#" + newLocation).attr("class", "n-link active")

    loc = newLocation;
  }
}, 100)

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
 console.log("hi")
 let id = $("." + loc).attr("id");
 id = 1 + id;
 id > 3 ? id = 0 : null;
 let nextPage = $("#" + id).attr("class").split(" ")[0];
 console.log(`nextPage: ${nextPage}`)
 // advance page to next ID
 let url = document.location.href.split('#')[0];
 window.location = url + "#" + nextPage;
}

$("#next").click(function(){
  console.log("boo")
})

$(document).on("click", "#next", function(event){
  console.log("wut")
  nextNav();
})

const navClick = (link) => {
  // hides sidebar if nav link is clicked
  if (window.innerWidth <= 992)
    hideNav();
}

const showNav = () => {
  // console.log("show nav")
  $(".sidebar").css("transform", "translateX(0px)")
  bSidebar = true;
}

const hideNav = () => {
  // console.log("hide nav")
  $(".sidebar").css("transform", "translateX(-300px)")
  bSidebar = false;
}

// onclick for the navlinks
$(".n-link").click(() => {
  // console.log(this.id())
  if (this.id() === "active")
    null
})