$(document).ready(function () {

  // anime({
  //   targets: '.hex',
  //   scale: .2,
  //   delay: 500,
  //   loop: true,
  //   // translateX: 250,
  //   // rotate: '1turn',
  //   // backgroundColor: '#000',
  //   duration: 1000,
  //   easing: 'linear',
  //   direction: 'alternate'
  // });

  var container = $('<div>')
  container.attr('class', 'container')

  for (var i = 0; i < 1320; i++) {
    var wrapper = $('<div>')
    var cube = $('<div>')
    cube.attr('class', 'grad')
    wrapper.attr('id', i.toString())
    wrapper.attr('class', 'wrapper')
    wrapper.append(cube)
    container.append(wrapper)
  }

  $('body').append(container)

  $('.wrapper').on('click', function () {
    console.log(this.id)
    ripple(this.id)

  })

  function ripple(id) {
    anime({
      targets: '.container .grad',
      scale: [
        { value: 2.5, easing: 'easeOutSine', duration: 100 },
        { value: 1, easing: 'easeInOutQuad', duration: 150 },
        { value: .5, easing: 'easeInOutQuad', duration: 100 },
        { value: 1.5, easing: 'easeInOutQuad', duration: 150 },
        { value: .5, easing: 'easeInOutQuad', duration: 130 },
        { value: 1, easing: 'easeInOutQuad', duration: 130 }
      ],
      color: '#fff',
      delay: anime.stagger(40, { grid: [44, 24], from: id })
    });
  }



  // Create hex array
  var hex = $('<div>')




  // Penners rectangles
  // var demoContentEl = document.querySelector('#two');
  // var fragment = document.createDocumentFragment();

  // function createEasingDemo(easing) {
  //   var demoEl = document.createElement('div');
  //   demoEl.classList.add('stretched', 'square', 'el');

  //   anime({
  //     targets: demoEl,
  //     translateX: 800,
  //     direction: 'alternate',
  //     loop: true,
  //     duration: 1800,
  //     delay: 200,
  //     endDelay: 200,
  //     easing: easing,
  //     backgroundColor: '#661ec4',
  //     rotate: '.5turn',
  //     opacity: 100
  //   });
  //   fragment.appendChild(demoEl);
  // }

  // for (var easeName in anime.penner) {
  //   if (Array.isArray(anime.penner[easeName])) {
  //     console.log(easeName)
  //     createEasingDemo(easeName);
  //   }
  // }


  // demoContentEl.innerHTML = '';
  // demoContentEl.appendChild(fragment);


})