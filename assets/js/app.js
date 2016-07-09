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

jQuery(document).ready(function ($) {
  'use strict'

  // var wph = $('main')
  // var aside = $('aside')
  // var wph_h = wph.height()
  // var wph_w = wph.width()
  // var gray = 'rgba(204, 202, 202, 1)'
  // var is_svg = true

  // $.ajax({
  //   url: 'https://sliders.space/api/',
  //   type: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json; charset=utf-8'
  //   }
  // })
  //   .done(function (data, textStatus, jqXHR) {
  //     console.log('HTTP Request Succeeded: ' + jqXHR.status)

  //     var items = data.hierarchy_items
  //     var stable = data.stable
  //     var stable_link = data.stable_link

  //     $('.version').text('WordPress ' + stable)
  //     $('.version').attr('href', stable_link)

  //     $('svg g').each(function () {
  //       for ( var i in items) {
  //         var object_id = items[ i ].object_id
  //         var icon_type = items[ i ].classification
  //         var name = items[ i ].name
  //         var link = items[ i ].link
  //         var child = items[ i ].child
  //         var tip = items[ i ].tip

  //         // match node data attribute aginst key in array
  //         if ($(this).data('position') === object_id) {
  //         }
  //       }
  //     })

  //     $('.embeds a').each(function () {
  //       for ( var i in items) {
  //         var object_id = items[ i ].object_id
  //         var icon_type = items[ i ].classification
  //         var name = items[ i ].name
  //         var link = items[ i ].link
  //         var child = items[ i ].child
  //         var tip = items[ i ].tip

//         // match node data attribute aginst key in array
//         if ($(this).data('position') === object_id) {
//           $(this).text(name)
//           $(this).attr('href', link)
//           $(this).data('tip', tip)
//         }
//       }
//     })
//   })
//   .fail(function (jqXHR, textStatus, errorThrown) {
//     console.log('HTTP Request Failed :(')
//   })
//   .always(function () {})
})
