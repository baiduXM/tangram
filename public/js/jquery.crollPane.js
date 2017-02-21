/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( event.wheelDelta ) { delta = event.wheelDelta/120; }
    if ( event.detail     ) { delta = -event.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return $.event.handle.apply(this, args);
}

})(jQuery);


/*
contentcarousel
 */
(function($) {
    var aux     = {
            // navigates left / right
            navigate    : function( dir, $el, $wrapper, opts, cache ) {
                
                var scroll      = opts.scroll,
                    factor      = 1,
                    idxClicked  = 0;
                    
                if( cache.expanded ) {
                    scroll      = 1; // scroll is always 1 in full mode
                    factor      = 3; // the width of the expanded item will be 3 times bigger than 1 collapsed item 
                    idxClicked  = cache.idxClicked; // the index of the clicked item
                }
                
                // clone the elements on the right / left and append / prepend them according to dir and scroll
                if( dir === 1 ) {
                    $wrapper.find('div.ca-item:lt(' + scroll + ')').each(function(i) {
                        $(this).clone(true).css( 'left', ( cache.totalItems - idxClicked + i ) * cache.itemW * factor + 'px' ).appendTo( $wrapper );
                    });
                }
                else {
                    var $first  = $wrapper.children().eq(0);
                    
                    $wrapper.find('div.ca-item:gt(' + ( cache.totalItems  - 1 - scroll ) + ')').each(function(i) {
                        // insert before $first so they stay in the right order
                        $(this).clone(true).css( 'left', - ( scroll - i + idxClicked ) * cache.itemW * factor + 'px' ).insertBefore( $first );
                    });
                }
                
                // animate the left of each item
                // the calculations are dependent on dir and on the cache.expanded value
                $wrapper.find('div.ca-item').each(function(i) {
                    var $item   = $(this);
                    $item.stop().animate({
                        left    :  ( dir === 1 ) ? '-=' + ( cache.itemW * factor * scroll ) + 'px' : '+=' + ( cache.itemW * factor * scroll ) + 'px'
                    }, opts.sliderSpeed, opts.sliderEasing, function() {
                        if( ( dir === 1 && $item.position().left < - idxClicked * cache.itemW * factor ) || ( dir === -1 && $item.position().left > ( ( cache.totalItems - 1 - idxClicked ) * cache.itemW * factor ) ) ) {
                            // remove the item that was cloned
                            $item.remove();
                        }                       
                        cache.isAnimating   = false;
                    });
                });
                
            },
            // gets the item's position (1, 2, or 3) on the viewport (the visible items)
            // val is the left of the item
            getWinPos   : function( val, cache ) {
                switch( val ) {
                    case 0                  : return 1; break;
                    case cache.itemW        : return 2; break;
                    case cache.itemW * 2    : return 3; break;
                }
            }
        },
        methods = {
            init        : function( options ) {
                
                if( this.length ) {
                    
                    var settings = {
                        sliderSpeed     : 500,          // speed for the sliding animation
                        sliderEasing    : 'easeOutExpo',// easing for the sliding animation
                        itemSpeed       : 100,          // speed for the item animation (open / close)
                        itemEasing      : 'easeOutExpo',// easing for the item animation (open / close)
                        scroll          : 1             // number of items to scroll at a time
                    };
                    
                    return this.each(function() {
                        
                        // if options exist, lets merge them with our default settings
                        if ( options ) {
                            $.extend( settings, options );
                        }
                        
                        var $el             = $(this),
                            $wrapper        = $el.find('div.ca-wrapper'),
                            $items          = $wrapper.children('div.ca-item'),
                            cache           = {};
                        
                        // save the with of one item    
                        cache.itemW         = $items.width();
                        // save the number of total items
                        cache.totalItems    = $items.length;
                        
                        // add navigation buttons
                        if( cache.totalItems > 3 )  
                            $el.prepend('<div class="ca-nav"><span class="ca-nav-prev"><</span><span class="ca-nav-next">></span></div>') 
                        
                        // control the scroll value
                        if( settings.scroll < 1 )
                            settings.scroll = 1;
                        else if( settings.scroll > 3 )
                            settings.scroll = 3;    
                        
                        var $navPrev        = $el.find('span.ca-nav-prev'),
                            $navNext        = $el.find('span.ca-nav-next');
                        
                        // hide the items except the first 3
                        $wrapper.css( 'overflow', 'hidden' );
                        
                        // the items will have position absolute 
                        // calculate the left of each item
                        $items.each(function(i) {
                            $(this).css({
                                position    : 'absolute',
                                left        : i * cache.itemW + 'px'
                            });
                        });

                        $(window).resize(function(){
                            cache.itemW         = $items.width();
                            $items.each(function(i) {
                                $(this).css({
                                    position    : 'absolute',
                                    left        : i * cache.itemW + 'px'
                                });
                            });
                        });
                        
                        // navigate left
                        $navPrev.bind('click.contentcarousel', function( event ) {
                            if( cache.isAnimating ) return false;
                            cache.isAnimating   = true;
                            aux.navigate( -1, $el, $wrapper, settings, cache );
                        });
                        
                        // navigate right
                        $navNext.bind('click.contentcarousel', function( event ) {
                            if( cache.isAnimating ) return false;
                            cache.isAnimating   = true;
                            aux.navigate( 1, $el, $wrapper, settings, cache );
                        });
                        
                        // adds events to the mouse
                        $el.bind('mousewheel.contentcarousel', function(e, delta) {
                            if(delta > 0) {
                                if( cache.isAnimating ) return false;
                                cache.isAnimating   = true;
                                aux.navigate( -1, $el, $wrapper, settings, cache );
                            }   
                            else {
                                if( cache.isAnimating ) return false;
                                cache.isAnimating   = true;
                                aux.navigate( 1, $el, $wrapper, settings, cache );
                            }   
                            return false;
                        });
                        
                    });
                }
            }
        };
    
    $.fn.contentcarousel = function(method) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.contentcarousel' );
        }
    };
    
})(jQuery);