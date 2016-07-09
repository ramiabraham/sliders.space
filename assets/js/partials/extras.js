// What if you could slide to thousand different worlds?
jQuery(document).ready(function ($) {
  'use strict'

  if (! Modernizr.canvas) {
    return
  }

  var sliders = {
    slide: true,
    debug: false
  }

  // key sequence listeners
  var sequences = {
    slide: 's l i d e'
  }

  cheet(sequences.slide)

  cheet.done(function (seq) {
    if (seq === sequences.slide) {
      console.log('Sliding initiated...')
      slide()
      sliders.slide = !sliders.slide
    }
  })

  /**
   * Sliding time
   *
   * @since  1.0
   *
   */
  function slide () {
    if (! sliders.slide) {
      $('body').removeClass('slide')
      if ($('canvas').length) {
        $('canvas').remove()
      }
      return
    }
  }
})
