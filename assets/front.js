let bSidebar = false;
let loc = document.location.href.split('#')[1];

$(document).ready(function () {
  $(".main").css("overflow", "hidden")
  $(".cont").css("visibility", "hidden")
  $("." + loc).css("transition", "0s")
  $("." + loc).css("transform", "scale(6.0)")

  setTimeout(() => {
    $("." + loc).css("visibility", "visible")
    $("." + loc).css("opacity", "1.0")
    $("." + loc).css("transition", ".8s")
    $("." + loc).css("transform", "scale(1.0)")
    setTimeout(() => {
      $(".main").css("overflow", "auto")
    }, 810)
  }, 10)
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

    $(".main").css("overflow", "hidden")
    $("." + newLocation).css("transition", "0s")
    $("." + newLocation).css("transform", "scale(6.0)")

    setTimeout(() => {
      $("." + newLocation).css("transition", "0.8s")
      $("." + newLocation).css("visibility", "visible")
      $("." + newLocation).css("opacity", "1.0")
      $("." + newLocation).css("transform", "scale(1.0)")
      setTimeout(() => {
        $(".main").css("overflow", "auto")
      }, 810)
    }, 10)

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
  if (window.innerWidth <= 992)
    hideNav();
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