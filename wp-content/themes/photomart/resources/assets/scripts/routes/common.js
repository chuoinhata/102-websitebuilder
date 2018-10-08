export default {
	init() {
    // JavaScript to be fired on all pages
  },
  finalize() {
    const mini_cart = $( '.mybag-link' )
    const content_cart = $( '.mini-cart' )
    const close_cart = $( '.close-cart' )
    mini_cart.click(function() {
      content_cart.toggleClass('open-cart'); 
    })
    close_cart.click(function() {
      content_cart.removeClass('open-cart'); 
    });

    const header = $( '.header-warpper' )
    $( window ).scroll( function() {    
      var scroll = $( window ).scrollTop()
      header.toggleClass("sticky-deactive", scroll > 10)
      header.toggleClass("sticky-active", scroll > 60)
    } )
  },
}
