export default {
	init() {
    // JavaScript to be fired on all pages
  },
  finalize() {
    $( '.mini-cart' ).mouseover( function() {
      $( this ).children( '.topCartContent' ).fadeIn( 200 )
      return false
    } ).mouseleave( function() {
      $( this ).children( '.topCartContent' ).fadeOut( 200 )
      return false
    } )

    const header = $( '.header-warpper' )
    $( window ).scroll( function() {    
      var scroll = $( window ).scrollTop()
      header.toggleClass("sticky-deactive", scroll > 10)
      header.toggleClass("sticky-active", scroll > 60)
    } )
  },
}
