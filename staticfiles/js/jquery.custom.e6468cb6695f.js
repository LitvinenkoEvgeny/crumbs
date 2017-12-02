/**
 * ********************************************************
 *
 * @author		NWN-Themes
 * @copyright	Copyright (c) NWN-Themes
 * @link		http://themeforest.net/user/NWN-Themes
 * @link		http://netwp.net/
 * @since		1.0.0
 *
 * @package		Comely
 * @subpackage	Frontend JS
 *
 * ********************************************************
 */

jQuery(document).ready( function($) {

	"use strict";

	var scriptFrontend = {

		init : function() {
			scriptFrontend.initParallaxify();
			scriptFrontend.initOddEvenClass();
			scriptFrontend.initCurrentClass();
			scriptFrontend.initSizeElasticSlider();
			scriptFrontend.initTooltip();
			scriptFrontend.initParallax();
			scriptFrontend.backToTop();
			scriptFrontend.goToContent();
			scriptFrontend.goToComments();
			scriptFrontend.initStickyIcon();
			scriptFrontend.initMegaMenu();
			scriptFrontend.initSiteOverlay();
			scriptFrontend.initSiteOverlaySection();
			scriptFrontend.initBlockScroll();
			scriptFrontend.initRolloverImages();
			scriptFrontend.initRolloverOverlay();
			scriptFrontend.initRSSWidget();
			scriptFrontend.initQuickviewDialog();
			scriptFrontend.initAjaxContact();
			scriptFrontend.initMatchHeight();
			scriptFrontend.initWidgetsAutoequal();
			scriptFrontend.initPlaceholder();
			scriptFrontend.initFancyBox();
			scriptFrontend.initResizeVideo();
			scriptFrontend.initMediaElement();
			scriptFrontend.initInfiniteScroll();
			scriptFrontend.initViewportChecker();
			scriptFrontend.initSVGViewportChecker();
			scriptFrontend.initBXSlider();
			scriptFrontend.initBXCarousel();
			//scriptFrontend.rightClick();
			scriptFrontend.initTabs();
			scriptFrontend.initToggle();
			scriptFrontend.initInfoAnimations();
			scriptFrontend.initAnimsition();
			scriptFrontend.initClassAdminbar();
		},

		initParallaxify : function() {
			$.parallaxify({
				positionProperty	: 'transform',
				responsive			: true,
				motionType			: 'natural',
				mouseMotionType		: 'gaussian',
				motionAngleX		: 80,
				motionAngleY		: 80,
				alphaFilter			: 0.5,
				adjustBasePosition	: true,
				alphaPosition		: 0.025
			});
		},

		initOddEvenClass : function() {
			/* Posts */
			$( '.article-post' ).filter( ':odd' ).addClass( 'even' );
			$( '.article-post' ).filter( ':even' ).addClass( 'odd' );
			/* Portfolios */
			$( '.grid-portfolio-chaotic' ).filter( ':odd' ).addClass( 'even' );
			$( '.grid-portfolio-chaotic' ).filter( ':even' ).addClass( 'odd' );
			/* Team */
			$( '.grid-team-chaotic' ).filter( ':odd' ).addClass( 'even' );
			$( '.grid-team-chaotic' ).filter( ':even' ).addClass( 'odd' );
			/* Products */
			$( '.shop-product-chaotic' ).filter( ':odd' ).addClass( 'even' );
			$( '.shop-product-chaotic' ).filter( ':even' ).addClass( 'odd' );
		},

		initCurrentClass : function() {
			$( '.page-links' ).find( 'span' ).not( 'a span' ).addClass( 'current' );
		},

		initSizeElasticSlider : function() {
			var windowWidth		= $(window).width(),
				windowHeight	= $(window).height(),
				headerHeight	= $( '#site-header' ).height(),
				sliderHeight	= windowHeight - headerHeight;
			if ( ! $( 'html' ).hasClass( 'mobile' ) ) {
				if ( $( 'body' ).hasClass( 'slider-fullscreen' ) ) {
					$( '.ei-slider' ).css({
						'width'		: windowWidth - 100,
						'height'	: windowHeight
					});
					$(window).on( 'resize', function() {
						var windowWidth		= $(window).width(),
							windowHeight	= $(window).height();
						$( '.ei-slider' ).css({
							'width'		: windowWidth - 100,
							'height'	: windowHeight
						});
					});
				}
				if ( $( 'body' ).hasClass( 'slider-fullwidth' ) || $( 'body' ).hasClass( 'slider-boxed' ) ) {
					$( '.ei-slider' ).css({
						'width'		: windowWidth - 100
					});
					$(window).on( 'resize', function() {
						var windowWidth		= $(window).width(),
							windowHeight	= $(window).height(),
							headerHeight	= $( '#site-header' ).height(),
							sliderHeight	= windowHeight - headerHeight;
						$( '.ei-slider' ).css({
							'width'		: windowWidth - 100
						});
					});
				}
			}
			else {
				if ( $( 'body' ).hasClass( 'slider-fullscreen' ) ) {
					$( '.ei-slider' ).css({
						'width'		: windowWidth,
						'height'	: windowHeight
					});
					$(window).on( 'resize', function() {
						var windowWidth		= $(window).width(),
							windowHeight	= $(window).height();
						$( '.ei-slider' ).css({
							'width'		: windowWidth,
							'height'	: windowHeight
						});
					});
				}
				if ( $( 'body' ).hasClass( 'slider-fullwidth' ) || $( 'body' ).hasClass( 'slider-boxed' ) ) {
					$( '.ei-slider' ).css({
						'width'		: windowWidth
					});
					$(window).on( 'resize', function() {
						var windowWidth		= $(window).width(),
							windowHeight	= $(window).height(),
							headerHeight	= $( '#site-header' ).height(),
							sliderHeight	= windowHeight - headerHeight;
						$( '.ei-slider' ).css({
							'width'		: windowWidth - 100
						});
					});
				}
			}
		},

		initTooltip : function() {
			$( '[data-toggle="tooltip"]' ).tooltip({
			//	delay		: {
			//		show	: 0,
			//		hide	: 1000
			//	},
				container	: 'body',
				trigger		: 'hover' //'click' 'hover'
			});
		},

		initParallax : function() {
			$( '[class^="header-bgimage"]' ).parallax();
		},

		backToTop : function() {
			$( '.button-right-backtop' ).hide();
			if ( $(window).scrollTop() >= '250' ) {
				$( '.button-right-backtop' ).fadeIn( 'slow' );
			}
			$(window).on( 'scroll', function() {
				if ( $(window).scrollTop() <= '250' ) {
					$( '.button-right-backtop' ).fadeOut( 'slow' );
				} else {
					$( '.button-right-backtop' ).fadeIn( 'slow' );
				}
			});
			$( '.button-right-backtop' ).on( 'click', function(e) {
				$( 'html, body' ).animate({
					scrollTop: 0
				}, 700, 'linear' );
				e.preventDefault();
			});
		},
		
		goToContent : function() {
			var $window	= $(window),
				$scroll	= $( '#scroll-down' );
			$( '#scroll-down' ).hide();
			if ( $window.scrollTop() <= '100' ) {
				$( '#scroll-down' ).fadeIn( 'slow' );
			}
			$window.on( 'scroll', function() {
				if ( $window.scrollTop() >= '100' ) {
					$( $scroll ).fadeOut( 'slow' );
				} else {
					$( $scroll ).fadeIn( 'slow' );
				}
			});
			$( '#scroll-down' ).on( 'click', function( event ) {
				var $anchor = $( '#site-content' );
				$( 'html, body' ).stop().animate({
					scrollTop : $( $anchor ).offset().top
				}, 1000, 'easeInOutExpo' );
				event.preventDefault();
			});
			$( function() {
				var s = $( '.scroll-down-icon' );
				function a() {
					s.css({
						'top'     : '-20px',
						'opacity' : 0
					}).animate({
						'top'     : 0,
						'opacity' : 1
					}, 1000, b );
				}
				function b() {
					s.animate({
						'top'     : 20,
						'opacity' : 0
					}, 1000, a );
				}
				a();
			});
		},

		goToComments : function() {
			$( 'a.comments-link' ).on( 'click', function( event ) {
				var $anchor = $( '#comments' );
				$( 'html, body' ).stop().animate({
					scrollTop : $( $anchor ).offset().top
				}, 1500, 'easeInOutExpo' );
				event.preventDefault();
			});
		},

		initStickyIcon : function() {
			$( '.article-post.sticky' ).find( '.grid-container > .post-content' ).prepend( '<i class="theme-icon sticky-icon"></i>' );
		},

		initMegaMenu : function() {
			/* Mega Menu */
			setTimeout( function() {
				var idMenu     = [
					'#menu-megamenu-primary',
					'[id^="menu-megamenu-languages"]'
				];
				$.each( idMenu, function( indx, element ) {
					$( element ).dcMegaMenu({
						rowItems	: nwn_custom_menu_l10n.mega_menu_row,
						speed		: nwn_custom_menu_l10n.menu_speed,
						effect		: nwn_custom_menu_l10n.mega_menu_open
					//	,trigger	: 'click'
					});
				});
				$( window ).on( 'resize', function() {
					$( '.row >' ).unwrap();
					$.each( idMenu, function( indx, element ) {
						$( element ).dcMegaMenu({
							rowItems	: nwn_custom_menu_l10n.mega_menu_row,
							speed		: nwn_custom_menu_l10n.menu_speed,
							effect		: nwn_custom_menu_l10n.mega_menu_open
						//	,trigger	: 'click'
						});
					});
				});
			}, 1000 );
			/* If Primary Menu No Set */
			setTimeout( function() {
				var idMenu = ['#menu-megamenu-primary-menunoset'];
				$.each( idMenu, function( indx, element ) {
					$( element ).dcMegaMenu({
						rowItems	: 1,
						speed		: nwn_custom_menu_l10n.menu_speed,
						effect		: nwn_custom_menu_l10n.mega_menu_open,
						fullWidth	: false
					});
				});
			}, 1000 );
		},

		initSiteOverlay : function() {
			if ( $(window).width() <= 736 ) {
				var windowHeight	= $(window).height(),
					innerHeight		= Math.round( windowHeight - 217 );
			} else {
				var windowHeight	= $(window).height(),
					innerHeight		= Math.round( windowHeight - 399 );
			}
			$( '.open-overlay, .close-overlay' ).on( 'click', function(e) {
				if ( ! $( '.open-menu, .wrap-site-overlay' ).hasClass( 'opened' ) ) {
					$( '.open-overlay, .wrap-site-overlay' ).addClass( 'opened' );
					$( '#site-header, #site-slider, #site-content, #site-footer, [class*="post-navigation-"]' ).addClass( 'blur' );
					$( '#site-overlay' )
						.stop()
						.animate({
							'opacity' : '1'
					}, 'fast' );
					$( '#site-overlay' ).css({
						'z-index' : '10001'
					});
					$( '.wrap-site-overlay' )
						.stop()
						.animate({
							'opacity' : '1'
					}, 'fast' );
					$( '.site-overlay-inner-container' ).css({
						'height' : innerHeight + 'px'
					});
					$( '#site-overlay-sidebars' ).removeClass( 'closed' ).addClass( 'opened' );
				}
				else {
					$( '.open-overlay, .wrap-site-overlay' ).removeClass( 'opened' );
					$( '#site-header, #site-slider, #site-content, #site-footer, [class*="post-navigation-"]' ).removeClass( 'blur' );
					$( '#site-overlay' )
						.stop()
						.animate({
							'opacity' : '0'
					}, 'fast' );
					$( '#site-overlay' ).css({
						'z-index' : '-1'
					});
					$( '.wrap-site-overlay' )
						.stop()
						.animate({
							'opacity' : '0'
					}, 'fast' );
					$( '.site-overlay-inner-container' ).css({
						'height' : innerHeight + 'px'
					});
					$( '#site-overlay-sidebars' ).removeClass( 'closed' ).addClass( 'opened' );
					$( '#site-overlay-menu' ).removeClass( 'opened' ).addClass( 'closed' );
					$( '#site-overlay-cart' ).removeClass( 'opened' ).addClass( 'closed' );
					$( '#site-overlay-search' ).removeClass( 'opened' ).addClass( 'closed' );
					$( '#site-overlay-search .search-field' ).blur();
				}
				e.preventDefault();
			});
		},

		initSiteOverlaySection : function() {
			if ( $(window).width() <= 736 ) {
				var windowHeight	= $(window).height(),
					innerHeight		= Math.round( windowHeight - 217 );
			} else {
				var windowHeight	= $(window).height(),
					innerHeight		= Math.round( windowHeight - 399 );
			}
			$( '#site-overlay' ).css({ 'height' : windowHeight + 'px' });
			$( '#site-overlay-sidebars, #site-overlay-menu, #site-overlay-cart, #site-overlay-search' ).css({ 'height' : innerHeight + 'px' });
			$(window).on( 'resize', function() {
				if ( $(window).width() <= 736 ) {
					var windowHeight	= $(window).height(),
						innerHeight		= Math.round( windowHeight - 217 );
				} else {
					var windowHeight	= $(window).height(),
						innerHeight		= Math.round( windowHeight - 399 );
				}
				$( '#site-overlay' ).css({ 'height' : windowHeight + 'px' });
				$( '#site-overlay-sidebars, #site-overlay-menu, #site-overlay-cart, #site-overlay-search' ).css({ 'height' : innerHeight + 'px' });
			});
			$( '#site-overlay-sidebars' ).removeClass( 'closed' ).addClass( 'opened' );
			$( '#site-overlay-menu' ).removeClass( 'opened' ).addClass( 'closed' );
			$( '#site-overlay-cart' ).removeClass( 'opened' ).addClass( 'closed' );
			$( '#site-overlay-search' ).removeClass( 'opened' ).addClass( 'closed' );
			$( '#site-overlay-search .search-field' ).blur();
			$( '.overlay-item-sidebars' ).on( 'click', function(e) {
				if ( $( '#site-overlay-menu' ).hasClass( 'opened' ) ) {
					$( '#site-overlay-menu' ).removeClass( 'opened' ).addClass( 'closed' );
				}
				if ( $( '#site-overlay-cart' ).hasClass( 'opened' ) ) {
					$( '#site-overlay-cart' ).removeClass( 'opened' ).addClass( 'closed' );
				}
				if ( $( '#site-overlay-search' ).hasClass( 'opened' ) ) {
					$( '#site-overlay-search' ).removeClass( 'opened' ).addClass( 'closed' );
					$( '#site-overlay-search .search-field' ).blur();
				}
				if ( $( '#site-overlay-sidebars' ).hasClass( 'closed' ) ) {
					$( '#site-overlay-sidebars' ).removeClass( 'closed' ).addClass( 'opened' );
				}
				e.preventDefault();
			});
			$( '.overlay-item-menu' ).on( 'click', function(e) {
				if ( $( '#site-overlay-sidebars' ).hasClass( 'opened' ) ) {
					$( '#site-overlay-sidebars' ).removeClass( 'opened' ).addClass( 'closed' );
				}
				if ( $( '#site-overlay-cart' ).hasClass( 'opened' ) ) {
					$( '#site-overlay-cart' ).removeClass( 'opened' ).addClass( 'closed' );
				}
				if ( $( '#site-overlay-search' ).hasClass( 'opened' ) ) {
					$( '#site-overlay-search' ).removeClass( 'opened' ).addClass( 'closed' );
					$( '#site-overlay-search .search-field' ).blur();
				}
				if ( $( '#site-overlay-menu' ).hasClass( 'closed' ) ) {
					$( '#site-overlay-menu' ).removeClass( 'closed' ).addClass( 'opened' );
				}
				e.preventDefault();
			});
			$( '.overlay-item-cart' ).on( 'click', function(e) {
				if ( $( '#site-overlay-sidebars' ).hasClass( 'opened' ) ) {
					$( '#site-overlay-sidebars' ).removeClass( 'opened' ).addClass( 'closed' );
				}
				if ( $( '#site-overlay-menu' ).hasClass( 'opened' ) ) {
					$( '#site-overlay-menu' ).removeClass( 'opened' ).addClass( 'closed' );
				}
				if ( $( '#site-overlay-search' ).hasClass( 'opened' ) ) {
					$( '#site-overlay-search' ).removeClass( 'opened' ).addClass( 'closed' );
					$( '#site-overlay-search .search-field' ).blur();
				}
				if ( $( '#site-overlay-cart' ).hasClass( 'closed' ) ) {
					$( '#site-overlay-cart' ).removeClass( 'closed' ).addClass( 'opened' );
				}
				e.preventDefault();
			});
			$( '.overlay-item-search' ).on( 'click', function(e) {
				if ( $( '#site-overlay-sidebars' ).hasClass( 'opened' ) ) {
					$( '#site-overlay-sidebars' ).removeClass( 'opened' ).addClass( 'closed' );
				}
				if ( $( '#site-overlay-menu' ).hasClass( 'opened' ) ) {
					$( '#site-overlay-menu' ).removeClass( 'opened' ).addClass( 'closed' );
				}
				if ( $( '#site-overlay-cart' ).hasClass( 'opened' ) ) {
					$( '#site-overlay-cart' ).removeClass( 'opened' ).addClass( 'closed' );
				}
				if ( $( '#site-overlay-search' ).hasClass( 'closed' ) ) {
					$( '#site-overlay-search' ).removeClass( 'closed' ).addClass( 'opened' );
					$( '#site-overlay-search .search-field' ).focus();
				}
				e.preventDefault();
			});
			$(window).on( 'resize', function() {
				if ( $( '#site-overlay-sidebars' ).hasClass( 'closed' ) ) {
					$( '#site-overlay-sidebars' ).removeClass( 'closed' ).addClass( 'opened' );
				}
				$( '#site-overlay-menu' ).removeClass( 'opened' ).addClass( 'closed' );
				$( '#site-overlay-cart' ).removeClass( 'opened' ).addClass( 'closed' );
				$( '#site-overlay-search' ).removeClass( 'opened' ).addClass( 'closed' );
				$( '#site-overlay-search .search-field' ).blur();
			});

		},

		initBlockScroll : function() {
			if ( $(window).width() <= 736 ) {
				var windowHeight	= $(window).height(),
					innerHeight		= Math.round( windowHeight - 247 );
			} else {
				var windowHeight	= $(window).height(),
					innerHeight		= Math.round( windowHeight - 439 );
			}
			$( '#site-overlay' ).css({ 'height' : windowHeight + 'px' });
			$( '#site-overlay [id^="content-scroll-"]' ).css({ 'height' : innerHeight + 'px' });
			$(window).on( 'resize', function() {
				if ( $(window).width() <= 736 ) {
					var windowHeight	= $(window).height(),
						innerHeight		= Math.round( windowHeight - 247 );
				} else {
					var windowHeight	= $(window).height(),
						innerHeight		= Math.round( windowHeight - 439 );
				}
				$( '#site-overlay' ).css({ 'height' : windowHeight + 'px' });
				$( '#site-overlay [id^="content-scroll-"]' ).css({ 'height' : innerHeight + 'px' });
			});
		},

		initRolloverImages : function() {
			var caption_center	= $( 'body' ).find( '.wp-caption.aligncenter' ),
				rollover_a		= $( 'figure.frame, div.frame, div.wp-caption, [id*="gallery-"] .gallery-icon' ).find( 'a' ),
				rollover_flickr	= $( '.flickr_badge_image' ).find( 'a' );
			caption_center.wrap( '<div class="container-frame-center clearboth"></div>' );
			$( 'figure.wp-caption > a' ).addClass( 'rollover-link' ).append( '\
				<div class="rollover-overlay overlay-container">\
					<div class="rollover-block">\
						<div class="rollover-button-inner clearboth">\
							<div class="button-rollover">\
								<i class="rollover-icon zoom-icon"></i>\
							</div>\
						</div>\
					</div>\
				</div>'
			);
			rollover_a.addClass( 'rollover-link' ).append( '\
				<div class="rollover-overlay overlay-container">\
					<div class="rollover-block">\
						<div class="rollover-button-inner clearboth">\
							<div class="button-rollover">\
								<i class="rollover-icon zoom-icon"></i>\
							</div>\
						</div>\
					</div>\
				</div>'
			);
			rollover_flickr.addClass( 'rollover-link' ).append( '\
				<div class="rollover-overlay overlay-container">\
					<div class="rollover-block">\
						<div class="rollover-button-inner clearboth">\
							<div class="button-rollover">\
								<i class="rollover-icon external-icon"></i>\
							</div>\
						</div>\
					</div>\
				</div>'
			);
		},

		initRolloverOverlay : function() {
			$( '.rollover-overlay' ).hover(
				function() {
					$(this)
						.stop()
						.animate({
							'opacity' : '1'
					}, 200 );
					$(this)
						.closest( '.shoppage-item' )
						.find( '.category-title' )
						.stop()
						.animate({
							'opacity' : '0'
					}, 200 );
					$(this)
						.closest( '.chaotic-thumbnail, .product-container' )
						.find( '.product-onsale, .product-outofstock, .woocommerce-product-rating, .product-title-price.hide-hover' )
						.stop()
						.animate({
							'opacity' : '0'
					}, 200 );
					$(this)
						.find( '.button-rollover' )
						.stop()
						.each( function( indx, element ) {
							$(this)
								.delay( 100 + indx * 100 )
								.animate({
									'opacity' : '1',
									'top'     : '0'
							}, 150 );
						}
					);
				},
				function() {
					$(this)
						.stop()
						.animate({
							'opacity' : '0'
					}, 400 );
					$(this)
						.closest( '.shoppage-item' )
						.find( '.category-title' )
						.stop()
						.animate({
							'opacity' : '1'
					}, 200 );
					$(this)
						.closest( '.chaotic-thumbnail, .product-container' )
						.find( '.product-onsale, .product-outofstock, .woocommerce-product-rating, .product-title-price.hide-hover' )
						.stop()
						.animate({
							'opacity' : '1'
					}, 200 );
					$(this)
						.find( '.button-rollover' )
						.stop()
						.each( function( indx, element ) {
							$(this)
								.delay( 100 + indx * 100 )
								.animate({
									'opacity' : '0',
									'top'     : '50px'
							}, 250 );
						}
					);
				}
			);
		},

		initRSSWidget : function() {
			$( '.widget.widget_rss .widgettitle a:first-child' )
				.addClass( 'widget-rss-icon' )
				.find( 'img' )
				.replaceWith( '<i class="rss-icon"></i>' )
				.parent()
				.addClass( 'widget-rss-icon' );
		},

		initQuickviewDialog : function() {
			function calcWidth() {
				var browser = $(window).width();
				if ( browser >= 960 ) {
					var dialogWidth = 1200;
				} else if ( browser <= 959 ) {
					var dialogWidth = Math.round( browser - 40 );
				}
				$(window).on( 'resize', function() {
					var browser = $(window).width();
					if ( browser >= 960 ) {
						var dialogWidth = 1200;
					} else if ( browser <= 959 ) {
						var dialogWidth = Math.round( browser - 40 );
					}
				});
				return dialogWidth;
			};
			$( '#modal-quickview-form' ).dialog({
				dialogClass	: 'modal-quickview-form',
				width		: calcWidth(),
				minHeight	: 600,
				draggable	: false,
				resizable	: false,
				autoOpen	: false,
				modal		: true,
				closeText	: '',
				show		: {
					effect		: 'fadeIn',
					delay		: 200,
					duration	: 200
				},
				hide		: {
					effect		: 'fadeOut',
					duration	: 200
				}
			});
			$( '[id^="quickview-"]' ).on( 'click', function() {
				$(this).each( function() {
					var data_title			= $(this).data( 'title' ),
						data_group			= $( '[id^="quickview-gallery-"]' ).data( 'id' ),
						quickview_content	= $(this).closest( 'article, li' ).find( '.modal-quickview-content' ),
						quickview_clone		= $( quickview_content ).clone();
					$( '#modal-quickview-form' ).dialog( 'open' );
					$( '.modal-quickview-header' ).html( '<h2>' + data_title + '</h2>' );
					$( '#modal-quickview-form' ).find( '.modal-quickview-content' ).replaceWith( quickview_clone );
					$( '#modal-quickview-form [id^="quickview-gallery-"] li a' ).attr( 'data-fancybox-group', 'quickview-' + data_group );
					$( '#modal-quickview-form' ).find( '.modal-quickview-content' ).show( 'fast' );
					$( '.rollover-overlay' ).hover(
						function() {
							$(this)
								.stop()
								.animate({
									'opacity' : '1'
							}, 200 );
							$(this)
								.closest( '.category-title' )
								.stop()
								.animate({
									'opacity' : '0'
							}, 200 );
							$(this)
								.closest( '.product-container' )
								.find( '.product-onsale, .product-outofstock, .woocommerce-product-rating, .product-title-price.hide-hover' )
								.stop()
								.animate({
									'opacity' : '0'
							}, 200 );
							$(this)
								.find( '.button-rollover' )
								.stop()
								.each( function( indx, element ) {
									$(this)
										.delay( 100 + indx * 100 )
										.animate({
											'opacity' : '1',
											'top'     : '0'
									}, 150 );
								}
							);
						},
						function() {
							$(this)
								.stop()
								.animate({
									'opacity' : '0'
							}, 400 );
							$(this)
								.closest( '.category-title' )
								.stop()
								.animate({
									'opacity' : '1'
							}, 200 );
							$(this)
								.closest( '.product-container' )
								.find( '.product-onsale, .product-outofstock, .woocommerce-product-rating, .product-title-price.hide-hover' )
								.stop()
								.animate({
									'opacity' : '1'
							}, 200 );
							$(this)
								.find( '.button-rollover' )
								.stop()
								.each( function( indx, element ) {
									$(this)
										.delay( 100 + indx * 100 )
										.animate({
											'opacity' : '0',
											'top'     : '50px'
									}, 250 );
								}
							);
						}
					);
				});
			});
			$( 'body' ).on( 'click', '.ui-widget-overlay', function() {
				var data_group = $( '[id^="quickview-gallery-"]' ).data( 'id' );
				$( '#modal-quickview-form' ).dialog( 'close' );
				$( '#modal-quickview-form [id^="quickview-gallery-"] li a' ).attr( 'data-fancybox-group', data_group );
			});
		},

		initAjaxContact : function() {
			$( '#contact-form-submit' ).on( 'click', function() {
				var check_email		= /^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i,
					error_icon		= '<span class="field-error"><i class="theme-icon error-icon"></i></span>',
					form_name		= $( '#contact-form-name' ),
					form_email		= $( '#contact-form-email' ),
					form_message	= $( '#contact-form-message' );
				$( form_name ).focus( function() {
					form_name.removeClass( 'contacterror' );
					form_name.parent().find( '.field-error' ).remove();
				});
				$( form_email ).focus( function() {
					form_email.removeClass( 'contacterror' );
					form_email.parent().find( '.field-error' ).remove();
				});
				$( form_message ).focus( function() {
					form_message.removeClass( 'contacterror' );
					form_message.parent().find( '.field-error' ).remove();
				});
				if ( form_name.val().length < 2 || form_name.val().length >= 257 ) {
					form_name.addClass( 'contacterror' );
					form_name.parent().append( error_icon );
				};
				if ( ( check_email.test( form_email.val() ) == false ) || form_email.val().length >= 257 ) {
					form_email.addClass( 'contacterror' );
					form_email.parent().append( error_icon );
				};
				if ( form_message.val().length < 2 ) {
					form_message.addClass( 'contacterror' );
					form_message.parent().append( error_icon );
				};
			});
			$( '#contact-form-submit' ).on( 'click', function() {
				var check_email		= /^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i,
					form_name		= $( '#contact-form-name' ).val(),
					form_email		= $( '#contact-form-email' ).val(),
					form_subject	= $( '#contact-form-subject' ).val(),
					form_message	= $( '#contact-form-message' ).val();
				if ( ( form_name.length > 1 || form_name.length >= 257 ) && ( ( check_email.test( form_email ) == true ) || form_email.length >= 257 ) && form_message.length > 1 ) {
					$( '#contact-form-form' ).block({ overlayCSS : { backgroundColor : '#fff' }, message : null });
					$.ajax({
						type	: 'POST',
						url		: nwn_custom_l10n.ajax,
						data	: {
							action	: 'ajax_contact',
							name	: form_name,
							email	: form_email,
							subject	: form_subject,
							mgs		: form_message
						},
						success	: function() {
							$( '.contact-form-content' ).stop().animate({ 'opacity' : 0 });
							$( '.contact-form-success' ).stop().animate({ 'opacity' : 1 });
							setTimeout( function() {
								$( '.contact-form-success' ).stop().animate({ 'opacity' : 0 });
								$( '.contact-form-content' ).stop().animate({ 'opacity' : 1 });
								$( '#contact-form-form input, #contact-form-form textarea' ).val( '' );
							}, 2000 );
							
						},
						complete: function() {
							$( '#contact-form-form' ).unblock();
						}
					})
				}
			});
		},

		initMatchHeight : function() {
			/* block Autoequal */
			$( '.section-container' ).each( function() {
				$(this).find( '[class*="block-autoequal"] .inner-block' ).matchHeight({
					byRow    : false,
					property : 'height'
				});
			});
			/* Block Workflow */
			$( '.section-container' ).each( function() {
				$(this).find( '[class*="workflow-block-"] .workflow-equal' ).matchHeight({
				//	byRow : true
					byRow    : false,
					property : 'height'
				});
			});
			
		},

		initWidgetsAutoequal : function() {
			$( '#footer-woo-sidebars' ).each( function() {
				$(this).find( '.widget-autoequal' ).matchHeight({
					property : 'height'
				});
			});
		},

		initPlaceholder : function() {
			$( 'input, textarea' ).placeholder();
		},

		initFancyBox : function() {
			$.fn.getTitle = function() {
				var arr = $( '.fancybox' );
				$.each( arr, function() {
					var title = $(this).children( 'img' ).attr( 'title' );
					$(this).attr( 'title', title );
				})
			}
			var imageFancybox = ['.image-frame a img','.gallery-item a img'];
			$.each( imageFancybox, function( indx, element ) {
				$( element )
					.parent()
					.addClass( 'fancybox no-animsition' );
			});
			var idFancybox = ['.frame a img','.grid-gallery a img','.wp-caption a img','.image-frame a img','.gallery-item a img'];
			var fb_id = Math.floor( Math.random( ) * ( 99999 - 999 + 1 ) ) + 999;
			$.each( idFancybox, function( indx, element ) {
				$( element )
					.parent()
					.addClass( 'fancybox no-animsition' )
					.data({
						'fancybox-group' : 'gallery-' + fb_id
					})
					.getTitle();
			});
			var button_play		= '',
				button_zoom		= '',
				button_close	= '\
					<a class="fancybox-button fancybox-close no-animsition" title="' + nwn_fancybox_l10n.fancybox_close + '" href="javascript:void(0);">\
						<i class="fancybox-icon close-icon"></i>\
					</a>',
				button_next		= '\
					<a class="fancybox-button fancybox-button-next no-animsition" title="' + nwn_fancybox_l10n.fancybox_next + '" href="javascript:void(0);">\
						<i class="fancybox-navi next-icon"></i>\
					</a>',
				button_prev		= '\
					<a class="fancybox-button fancybox-button-prev no-animsition" title="' + nwn_fancybox_l10n.fancybox_prev + '" href="javascript:void(0);">\
						<i class="fancybox-navi prev-icon"></i>\
					</a>',
				title_params	= null,
				thumb_params	= null;
			if ( nwn_fancybox_l10n.fancybox_slideshow == 'true' ) {
				button_play = '\
					<a class="fancybox-button fancybox-play no-animsition" title="' + nwn_fancybox_l10n.fancybox_play + '" href="javascript:void(0);">\
						<i class="fancybox-icon slideshow-icon"></i>\
					</a>';
			}
			if ( nwn_fancybox_l10n.fancybox_zoom == 'true' ) {
				button_zoom = '\
					<a class="fancybox-button fancybox-zoomin no-animsition" title="' + nwn_fancybox_l10n.fancybox_zoomin + '" href="javascript:void(0);">\
						<i class="fancybox-icon expand-icon"></i>\
					</a>';
			}
			if ( nwn_fancybox_l10n.fancybox_title != 'disable' ) {
				title_params = { type : nwn_fancybox_l10n.fancybox_title };
			} else {
				title_params = null;
			}
			if ( nwn_fancybox_l10n.fancybox_thumb == 'true' ) {
				thumb_params = { width : 50, height : 50 };
			} else {
				thumb_params = null;
			}
			$( '.fancybox' ).fancybox({
				padding		: 0,
				margin		: 40,
				mouseWheel	: false,	// true, false
				closeBtn	: false,	// true, false
				// HTML templates
				tpl : {
					error		: '<p class="fancybox-error">' + nwn_fancybox_l10n.fancybox_error + '</p>',
					closeBtn	: '\
						<div class="fancybox-buttons-top">\
							<a class="fancybox-button fancybox-close no-animsition" title="' + nwn_fancybox_l10n.fancybox_close + '" href="javascript:void(0);">\
								<i class="fancybox-icon close-icon"></i>\
							</a>\
						</div>',
					next		: '<a class="fancybox-nav fancybox-next no-animsition" title="' + nwn_fancybox_l10n.fancybox_next + '" href="javascript:void(0);"></a>',
					prev		: '<a class="fancybox-nav fancybox-prev no-animsition" title="' + nwn_fancybox_l10n.fancybox_prev + '" href="javascript:void(0);"></a>'
				},
				// The time it takes to complete transition
				openSpeed	: nwn_fancybox_l10n.fancybox_speed,
				closeSpeed	: nwn_fancybox_l10n.fancybox_speed,
				nextSpeed	: nwn_fancybox_l10n.fancybox_speed,
				prevSpeed	: nwn_fancybox_l10n.fancybox_speed,
				// Animation effect for opening image
				openEffect	: nwn_fancybox_l10n.fancybox_opening,
				closeEffect	: nwn_fancybox_l10n.fancybox_opening,
				// Animation effect for turning images
				nextEffect	: nwn_fancybox_l10n.fancybox_turning,
				prevEffect	: nwn_fancybox_l10n.fancybox_turning,
				// Helper options
				helpers 	: {
					count	: true,
					overlay : { css : { 'background' : 'rgba(0,0,0,0.8)' } },
					title	: title_params,
					buttons	: { tpl : '<div class="fancybox-buttons-top">' + button_play + button_zoom + button_close + '</div>' + button_next + button_prev },
					thumbs	: thumb_params,
					media	: true
				},
				afterLoad : function() {
					this.count = ( this.index + 1 ) + ' / ' + this.group.length + ( this.count ? ' - ' + this.count : '' );
				}
			});
		},
		
		initResizeVideo : function() {
			var frameWidth  = $( '.video-frame' ).width(),
				videoWidth  = Math.round( frameWidth ),
				videoHeight = Math.round( videoWidth / 1.77 );
			$( '.video-frame' )
				.find( 'iframe' )
				.removeAttr( 'width' )
				.attr( 'width', videoWidth );
			$( '.video-frame' )
				.find( 'iframe' )
				.removeAttr( 'height' )
				.attr( 'height', videoHeight );
			$(window).on( 'resize', function() {
				var videoWidth = $( '.video-frame' ).width(),
					videoHeight = Math.round( videoWidth / 1.77 );
				$( '.video-frame' )
					.find( 'iframe' )
					.removeAttr( 'width' )
					.attr( 'width', videoWidth );
				$( '.video-frame' )
					.find( 'iframe' )
					.removeAttr( 'height' )
					.attr( 'height', videoHeight );
			});
		},

		initMediaElement : function() {
			$( '.wp-video' ).addClass( 'video-frame' );
			var frameWidth  = $( '.video-frame' ).width(),
				videoWidth  = Math.round( frameWidth ),
				videoHeight = Math.round( videoWidth / 1.77 );
			$( '.video-frame' )
				.find( 'video' )
				.removeAttr( 'width' )
				.attr( 'width', videoWidth );
			$( '.video-frame' )
				.find( '.mejs-video, .mejs-layer' )
				.css( 'width', videoWidth );
			$( '.video-frame' )
				.find( 'video' )
				.removeAttr( 'height' )
				.attr( 'height', videoHeight );
			$( '.video-frame' )
				.find( '.mejs-video, .mejs-layer' )
				.css( 'height', videoHeight );
			$( '.audio-frame audio, .video-frame video' ).mediaelementplayer({
				defaultVideoWidth	: videoWidth,
				defaultVideoHeight	: videoHeight,
				startVolume			: 1,
				audioHeight			: 40
			});
			var loadingClass = $( '.video-frame .mejs-overlay-loading' ).find( 'span' ).addClass( 'fa-spinner fa-pulse' );
			$(window).on( 'resize', function() {
				var videoWidth = $( '.video-frame' ).width(),
					videoHeight = Math.round( videoWidth / 1.77 );
				$( '.video-frame' )
					.find( 'video' )
					.removeAttr( 'width' )
					.attr( 'width', videoWidth );
				$( '.video-frame' )
					.find( '.mejs-video, .mejs-layer' )
					.css( 'width', videoWidth );
				$( '.video-frame' )
					.find( 'video' )
					.removeAttr( 'height' )
					.attr( 'height', videoHeight );
				$( '.video-frame' )
					.find( '.mejs-video, .mejs-layer' )
					.css( 'height', videoHeight );
			});
		},

		initViewportChecker : function() {
			$( '.viewport-item' ).viewportChecker({
				classToAdd       : 'viewport-animated',
				offset           : 150,
				repeat           : false
			});
		},

		initSVGViewportChecker : function() {
			/* Animate svg line for main site decoration */
			$( 'svg line' ).each( function( index, element ) {
				var x2 = $( element ).attr( 'x1' ),
					y2 = $( element ).attr( 'y1' ),
					from = {
						x2 : x2,
						y2 : y2
					};
				x2 = $( element ).attr( 'x2' ),
				y2 = $( element ).attr( 'y2' );
				var to = {
					x2 : x2,
					y2 : y2
				};
				var pause		= 1000,
					duration	= 600,
					del			= ( duration + pause ) / index;
				$( element ).on( 'animeLine', function() {
					$( element ).attr( from );
					$( from ).delay( pause ).animate( to, {
						duration	: duration,
						step		: function( now, fx ) {
							$( element ).attr( fx.prop, now )
						}
					})
				}).attr( from )
			});
			setTimeout( function() {
				$( '.svg-decor-header line' ).trigger( 'animeLine' );
			}, 800 );
			$( '.drawsvg-decor-top' ).viewportChecker({
				classToAdd       : 'visible',
				offset           : 0,
				repeat           : false,
				callbackFunction : function( elem, action ) {
					$( 'svg line', elem ).trigger( 'animeLine' );
				}
			});
			$( '.drawsvg-decor-bottom' ).viewportChecker({
				classToAdd       : 'visible',
				offset           : 0,
				repeat           : false,
				callbackFunction : function( elem, action ) {
					$( 'svg line', elem ).trigger( 'animeLine' );
				}
			});
			/* Animate svg path for workflow */
			$( '.line-even .svg-line-even, .line-odd .svg-line-odd' ).drawsvg();
			$( '.line-odd' ).viewportChecker({
				classToAdd       : 'visible',
				offset           : 100,
				repeat           : false,
				callbackFunction : function( elem, action ) {
					var $svg = $( '.svg-line-odd', elem ).drawsvg({ reverse : false });
					$svg.drawsvg( 'animate' );
				}
			});
			$( '.line-even' ).viewportChecker({
				classToAdd       : 'visible',
				offset           : 100,
				repeat           : false,
				callbackFunction : function( elem, action ) {
					var $svg = $( '.svg-line-even', elem ).drawsvg({ reverse : true });
					$svg.drawsvg( 'animate' );
				}
			});
		},

		initInfiniteScroll : function() {
			/* Navigation */
			if ( ! $( 'body' ).hasClass( 'search' ) ) {
				$( '.navigation.pagination' ).css({
					'opacity' : '0'
				});
			}
			/* Posts */
			$( '.page-blog #primary' ).infinitescroll({
				loading			: {
					finishedMsg	: 'No more posts.',
					msgText		: 'Loading the next...',
					img			: '<div class="infinite-loading"><div class="infinite-loader"></div></div>',
					speed		: 'normal'
				},
				nextSelector	: '.next',
				navSelector		: '.navigation',
				contentSelector	: '#primary',
				itemSelector	: '.post'
			},
			function( newElements, data, url ) {
				$( newElements ).addClass( 'loading-post' );
				$( function() {
					var frameWidth  = $( '.video-frame' ).width(),
						videoWidth  = Math.round( frameWidth ),
						videoHeight = Math.round( videoWidth / 1.77 );
					$( '.video-frame' )
						.find( 'iframe' )
						.removeAttr( 'width' )
						.attr( 'width', videoWidth );
					$( '.video-frame' )
						.find( 'iframe' )
						.removeAttr( 'height' )
						.attr( 'height', videoHeight );
				});
				$( '.loading-post' ).find( '[id^="post-gallery-"]' ).bxSlider({
					wrapperClass	: 'bx-wrapper-gallery',
					mode			: 'fade',
					adaptiveHeight	: false,
					auto			: false,
					pause			: 7000,
					autoStart		: true,
					autoControls	: false,
					controls		: false,
					pager			: true
				});
				$( '.loading-post' ).find( '.rollover-overlay' ).hover(
					function() {
						$(this)
							.stop()
							.animate({
								'opacity' : '1'
						}, 200 );
						$(this)
							.closest( '.shoppage-item' )
							.find( '.category-title' )
							.stop()
							.animate({
								'opacity' : '0'
						}, 200 );
						$(this)
							.closest( '.chaotic-thumbnail' )
							.find( '.product-onsale, .product-outofstock, .woocommerce-product-rating, .product-title-price.hide-hover' )
							.stop()
							.animate({
								'opacity' : '0'
						}, 200 );
						$(this)
							.find( '.button-rollover' )
							.stop()
							.each( function( indx, element ) {
								$(this)
									.delay( 100 + indx * 100 )
									.animate({
										'opacity' : '1',
										'top'     : '0'
								}, 150 );
							}
						);
					},
					function() {
						$(this)
							.stop()
							.animate({
								'opacity' : '0'
						}, 400 );
						$(this)
							.closest( '.shoppage-item' )
							.find( '.category-title' )
							.stop()
							.animate({
								'opacity' : '1'
						}, 200 );
						$(this)
							.closest( '.chaotic-thumbnail' )
							.find( '.product-onsale, .product-outofstock, .woocommerce-product-rating, .product-title-price.hide-hover' )
							.stop()
							.animate({
								'opacity' : '1'
						}, 200 );
						$(this)
							.find( '.button-rollover' )
							.stop()
							.each( function( indx, element ) {
								$(this)
									.delay( 100 + indx * 100 )
									.animate({
										'opacity' : '0',
										'top'     : '50px'
								}, 250 );
							}
						);
					}
				);
				$( '.viewport-item' ).viewportChecker({
					classToAdd       : 'viewport-animated',
					offset           : 150,
					repeat           : false
				});
			});
			/* Portfolios */
			$( '.page-portfolio #primary' ).infinitescroll({
				loading			: {
					finishedMsg	: 'No more portfolio.',
					msgText		: 'Loading the next...',
					img			: '<div class="infinite-loading"><div class="infinite-loader"></div></div>',
					speed		: 'normal'
				},
				nextSelector	: '.next',
				navSelector		: '.navigation',
				contentSelector	: '#primary',
				itemSelector	: '.portfolio'
			},
			function( newElements, data, url ) {
				$( newElements ).addClass( 'loading-post' );
				$( '.loading-post' ).find( '[data-toggle="tooltip"]' ).tooltip({
					container	: 'body',
					trigger		: 'hover'
				});
				$( '.loading-post' ).find( '[id^="portfolio-gallery-"]' ).bxSlider({
					mode			: 'fade',
					adaptiveHeight	: false,
					pager			: true,
					controls		: false
				});
				$( '.loading-post' ).find( '.rollover-overlay' ).hover(
					function() {
						$(this)
							.stop()
							.animate({
								'opacity' : '1'
						}, 200 );
						$(this)
							.closest( '.shoppage-item' )
							.find( '.category-title' )
							.stop()
							.animate({
								'opacity' : '0'
						}, 200 );
						$(this)
							.closest( '.chaotic-thumbnail' )
							.find( '.product-onsale, .product-outofstock, .woocommerce-product-rating, .product-title-price.hide-hover' )
							.stop()
							.animate({
								'opacity' : '0'
						}, 200 );
						$(this)
							.find( '.button-rollover' )
							.stop()
							.each( function( indx, element ) {
								$(this)
									.delay( 100 + indx * 100 )
									.animate({
										'opacity' : '1',
										'top'     : '0'
								}, 150 );
							}
						);
					},
					function() {
						$(this)
							.stop()
							.animate({
								'opacity' : '0'
						}, 400 );
						$(this)
							.closest( '.shoppage-item' )
							.find( '.category-title' )
							.stop()
							.animate({
								'opacity' : '1'
						}, 200 );
						$(this)
							.closest( '.chaotic-thumbnail' )
							.find( '.product-onsale, .product-outofstock, .woocommerce-product-rating, .product-title-price.hide-hover' )
							.stop()
							.animate({
								'opacity' : '1'
						}, 200 );
						$(this)
							.find( '.button-rollover' )
							.stop()
							.each( function( indx, element ) {
								$(this)
									.delay( 100 + indx * 100 )
									.animate({
										'opacity' : '0',
										'top'     : '50px'
								}, 250 );
							}
						);
					}
				);
				$( '.viewport-item' ).viewportChecker({
					classToAdd       : 'viewport-animated',
					offset           : 150,
					repeat           : false
				});
			});
			/* Products */
			$( '.woocommerce #primary' ).infinitescroll({
				loading			: {
					finishedMsg	: 'No more products.',
					msgText		: 'Loading the next...',
					img			: '<div class="infinite-loading"><div class="infinite-loader"></div></div>',
					speed		: 'normal'
				},
				nextSelector	: '.next',
				navSelector		: '.navigation',
				contentSelector	: '#primary',
				itemSelector	: '.shop-product'
			},
			function( newElements, data, url ) {
				$( newElements ).addClass( 'loading-post' );
				$( '.loading-post' ).find( '.rollover-overlay' ).hover(
					function() {
						$(this)
							.stop()
							.animate({
								'opacity' : '1'
						}, 200 );
						$(this)
							.closest( '.shoppage-item' )
							.find( '.category-title' )
							.stop()
							.animate({
								'opacity' : '0'
						}, 200 );
						$(this)
							.closest( '.chaotic-thumbnail' )
							.find( '.product-onsale, .product-outofstock, .woocommerce-product-rating, .product-title-price.hide-hover' )
							.stop()
							.animate({
								'opacity' : '0'
						}, 200 );
						$(this)
							.find( '.button-rollover' )
							.stop()
							.each( function( indx, element ) {
								$(this)
									.delay( 100 + indx * 100 )
									.animate({
										'opacity' : '1',
										'top'     : '0'
								}, 150 );
							}
						);
					},
					function() {
						$(this)
							.stop()
							.animate({
								'opacity' : '0'
						}, 400 );
						$(this)
							.closest( '.shoppage-item' )
							.find( '.category-title' )
							.stop()
							.animate({
								'opacity' : '1'
						}, 200 );
						$(this)
							.closest( '.chaotic-thumbnail' )
							.find( '.product-onsale, .product-outofstock, .woocommerce-product-rating, .product-title-price.hide-hover' )
							.stop()
							.animate({
								'opacity' : '1'
						}, 200 );
						$(this)
							.find( '.button-rollover' )
							.stop()
							.each( function( indx, element ) {
								$(this)
									.delay( 100 + indx * 100 )
									.animate({
										'opacity' : '0',
										'top'     : '50px'
								}, 250 );
							}
						);
					}
				);
				$( '.loading-post' ).find( '[id^="quickview-"]' ).on( 'click', function() {
					$(this).each( function() {
						var data_title			= $(this).data( 'title' ),
							data_group			= $( '[id^="quickview-gallery-"]' ).data( 'id' ),
							quickview_content	= $(this).closest( 'article, li' ).find( '.modal-quickview-content' ),
							quickview_clone		= $( quickview_content ).clone();
						$( '#modal-quickview-form' ).dialog( 'open' );
						$( '.modal-quickview-header' ).html( '<h2>' + data_title + '</h2>' );
						$( '#modal-quickview-form' ).find( '.modal-quickview-content' ).replaceWith( quickview_clone );
						$( '#modal-quickview-form [id^="quickview-gallery-"] li a' ).attr( 'data-fancybox-group', 'quickview-' + data_group );
						$( '#modal-quickview-form' ).find( '.modal-quickview-content' ).show( 'fast' );
						$( '.rollover-overlay' ).hover(
							function() {
								$(this)
									.stop()
									.animate({
										'opacity' : '1'
								}, 200 );
								$(this)
									.closest( '.shoppage-item' )
									.find( '.category-title' )
									.stop()
									.animate({
										'opacity' : '0'
								}, 200 );
								$(this)
									.closest( '.product-container' )
									.find( '.product-onsale, .product-outofstock, .woocommerce-product-rating, .product-title-price.hide-hover' )
									.stop()
									.animate({
										'opacity' : '0'
								}, 200 );
								$(this)
									.find( '.button-rollover' )
									.stop()
									.each( function( indx, element ) {
										$(this)
											.delay( 100 + indx * 100 )
											.animate({
												'opacity' : '1',
												'top'     : '0'
										}, 150 );
									}
								);
							},
							function() {
								$(this)
									.stop()
									.animate({
										'opacity' : '0'
								}, 400 );
								$(this)
									.closest( '.shoppage-item' )
									.find( '.category-title' )
									.stop()
									.animate({
										'opacity' : '1'
								}, 200 );
								$(this)
									.closest( '.product-container' )
									.find( '.product-onsale, .product-outofstock, .woocommerce-product-rating, .product-title-price.hide-hover' )
									.stop()
									.animate({
										'opacity' : '1'
								}, 200 );
								$(this)
									.find( '.button-rollover' )
									.stop()
									.each( function( indx, element ) {
										$(this)
											.delay( 100 + indx * 100 )
											.animate({
												'opacity' : '0',
												'top'     : '50px'
										}, 250 );
									}
								);
							}
						);
					});
				});
				$( '.loading-post' ).find( '.button-rollover a' ).tooltip({
					container	: 'body',
					trigger		: 'hover'
				});
				$( '.viewport-item' ).viewportChecker({
					classToAdd       : 'viewport-animated',
					offset           : 150,
					repeat           : false
				});
			});
		},

		initBXSlider : function() {
			/* Post gallery */
			$( '[id^="post-gallery-"]' ).bxSlider({
				wrapperClass	: 'bx-wrapper-gallery',
				mode			: 'fade',
				adaptiveHeight	: false,
				auto			: false,
				pause			: 7000,
				autoStart		: true,
				autoControls	: false,
				controls		: false,
				pager			: true
			});
			/* Portfolio gallery */
			$( '[id^="portfolio-gallery-"]' ).bxSlider({
				mode			: 'fade',
				adaptiveHeight	: false,
				pager			: true,
				controls		: false
			});
			/* Product single gallery */
			$( '[id^="product-gallery-"].product-single-gallery' ).bxSlider({
				mode			: 'fade',
				adaptiveHeight	: false,
				controls		: false,
				pager			: true,
				pagerCustom		: '#bx-product-pager'
			});
			/* Shortcode reviews */
			$( '[id^="reviews-carousel-"]' ).bxSlider({
				wrapperClass	: 'bx-wrapper-review',
				mode			: 'fade',
				adaptiveHeight	: true,
				auto			: true,
				controls		: false,
				pager			: true
			});
			$( '[id*="product-rated-"]' ).bxSlider({
				mode				: 'vertical',
				wrapperClass		: 'bx-wrapper-frontpage',
				slideMargin			: 20,
				infiniteLoop		: false,
				touchEnabled		: false,
				hideControlOnEnd	: true,
				adaptiveHeight		: false,
				pager				: true,
				nextText			: '<i class="nav-next"></i>',
				prevText			: '<i class="nav-prev"></i>'
			});
		},

		initBXCarousel : function() {
			/* Shortcode posts */
			setTimeout( function() {
				function posts_num() {
					var c_w = $( '.blank-posts .grid-container.main-width' ).width();
					for ( var i = 2; i; i-- ) {
						if ( c_w / i > 237 ) break
					};
					return i > 0 ? i : 1
				}
				var g_w = $( '.blank-posts .grid-container.main-width' ).width() / posts_num(),
					$article_post = $( '[id^="posts-carousel-"] .carousel-item' );
				$article_post.css({ 'width' : g_w });
				var carousel_posts = $( '[id^="posts-carousel-"]' ).bxSlider({
					wrapperClass		: 'bx-wrapper-carousel',
					minSlides			: 1,
					maxSlides			: posts_num(),
					moveSlides			: 1,
					slideWidth			: g_w,
					slideMargin			: 0,
					infiniteLoop		: false,
					hideControlOnEnd	: true,
					controls			: false,
					pager				: true
				});
				$(window).on( 'resize', function() {
					var g_w = $( '.blank-posts .grid-container.main-width' ).width() / posts_num(),
						$article_post = $( '[id^="posts-carousel-"] .carousel-item' );
					$article_post.css({ 'width' : g_w });
					carousel_posts.reloadSlider && carousel_posts.reloadSlider({
						wrapperClass		: 'bx-wrapper-carousel',
						minSlides			: 1,
						maxSlides			: posts_num(),
						moveSlides			: 1,
						slideWidth			: g_w,
						slideMargin			: 0,
						infiniteLoop		: false,
						hideControlOnEnd	: true,
						controls			: false,
						pager				: true
					});
				});
			}, 400 );
			/* Shortcode carousel images */
			setTimeout( function() {
				function carousel_num() {
					var c_w = $( '.grid-container.bx-container' ).width();
					for ( var i = 5; i; i-- ) {
						if ( c_w / i > 166 ) break
					};
					return i > 0 ? i : 1
				}
				var p_w = $( '.grid-container.bx-container' ).width() / carousel_num(),
					$article_carousel = $( '[id^="blank-images-carousel-"] .blank-carousel-item' );
				$article_carousel.css({ 'width' : p_w });
				var slider_carousel = $( '[id^="blank-images-carousel-"]' ).bxSlider({
					wrapperClass		: 'bx-wrapper-blank',
					minSlides			: 1,
					maxSlides			: carousel_num(),
					moveSlides			: 1,
					slideWidth			: p_w,
					slideMargin			: 0,
					auto				: true,
					pause				: 5000,
					autoStart			: true,
					autoControls		: false,
					controls			: false
				});
				$(window).on( 'resize', function() {
					var p_w = $( '.grid-container.bx-container' ).width() / carousel_num(),
						$article_carousel = $( '[id^="blank-images-carousel-"] .blank-carousel-item' );
					$article_carousel.css({ 'width' : p_w });
					slider_carousel.reloadSlider && slider_carousel.reloadSlider({
						wrapperClass		: 'bx-wrapper-blank',
						minSlides			: 1,
						maxSlides			: carousel_num(),
						moveSlides			: 1,
						slideWidth			: p_w,
						slideMargin			: 0,
						auto				: true,
						pause				: 5000,
						autoStart			: true,
						autoControls		: false,
						controls			: false
					});
				});
			}, 400 );
			/* Carousel product categories */
			setTimeout( function() {
				function categories_num() {
					var c_w = $( '#shoppage-categories .grid-container' ).width();
					for ( var i = 2; i; i-- ) {
						if ( c_w / i > 269 ) break
					};
					return i > 0 ? i : 1
				}
				var g_w = $( '#shoppage-categories .grid-container' ).width() / categories_num(),
					$article_categories = $( '[id^="carousel-categories"] .shoppage-item' );
				$article_categories.css({ 'width' : g_w });
				var carousel_categories = $( '[id^="carousel-categories"]' ).bxSlider({
					wrapperClass		: 'bx-wrapper-category',
					minSlides			: 1,
					maxSlides			: categories_num(),
					moveSlides			: 1,
					slideWidth			: g_w,
					slideMargin			: 0,
					infiniteLoop		: false,
					hideControlOnEnd	: true,
					controls			: false,
					pager				: true
				});
				$(window).on( 'resize', function() {
					var g_w = $( '#shoppage-categories .grid-container' ).width() / categories_num(),
						$article_categories = $( '[id^="carousel-categories"] .shoppage-item' );
					$article_categories.css({ 'width' : g_w });
					carousel_categories.reloadSlider && carousel_categories.reloadSlider({
						wrapperClass		: 'bx-wrapper-category',
						minSlides			: 1,
						maxSlides			: categories_num(),
						moveSlides			: 1,
						slideWidth			: g_w,
						slideMargin			: 0,
						infiniteLoop		: false,
						hideControlOnEnd	: true,
						controls			: false,
						pager				: true
					});
				});
			}, 400 );
			/* Shortcode carousel product categories */
			setTimeout( function() {
				function categories_num() {
					var c_w = $( '[id^="blank-shoppage-categories"] .grid-container.medium-width' ).width();
					for ( var i = 2; i; i-- ) {
						if ( c_w / i > 269 ) break
					};
					return i > 0 ? i : 1
				}
				var g_w = $( '[id^="blank-shoppage-categories"] .grid-container.medium-width' ).width() / categories_num(),
					$article_categories = $( '[id^="blank-carousel-categories"] .shoppage-item' );
				$article_categories.css({ 'width' : g_w });
				var carousel_categories = $( '[id^="blank-carousel-categories"]' ).bxSlider({
					wrapperClass		: 'bx-wrapper-category',
					minSlides			: 1,
					maxSlides			: categories_num(),
					moveSlides			: 1,
					slideWidth			: g_w,
					slideMargin			: 0,
					infiniteLoop		: false,
					hideControlOnEnd	: true,
					controls			: false,
					pager				: true
				});
				$(window).on( 'resize', function() {
					var g_w = $( '[id^="blank-shoppage-categories"] .grid-container.medium-width' ).width() / categories_num(),
						$article_categories = $( '[id^="blank-carousel-categories"] .shoppage-item' );
					$article_categories.css({ 'width' : g_w });
					carousel_categories.reloadSlider && carousel_categories.reloadSlider({
						wrapperClass		: 'bx-wrapper-category',
						minSlides			: 1,
						maxSlides			: categories_num(),
						moveSlides			: 1,
						slideWidth			: g_w,
						slideMargin			: 0,
						infiniteLoop		: false,
						hideControlOnEnd	: true,
						controls			: false,
						pager				: true
					});
				});
			}, 400 );
			/* Carousel related, up-sells, cross-sells products */
			setTimeout( function() {
				function products_num() {
					var c_w = $( '.products .container-inner' ).width();
					for ( var i = 2; i; i-- ) {
						if ( c_w / i > 237 ) break
					};
					return i > 0 ? i : 1
				}
				var g_w = $( '.products .container-inner' ).width() / products_num(),
					$article_product = $( '[id^="carousel-products"] .carousel-item' );
				$article_product.css({ 'width' : g_w });
				var carousel_products = $( '[id^="carousel-products"]' ).bxSlider({
					wrapperClass		: 'bx-wrapper-carousel',
					minSlides			: 1,
					maxSlides			: products_num(),
					moveSlides			: 1,
					slideWidth			: g_w,
					slideMargin			: 0,
					infiniteLoop		: false,
					hideControlOnEnd	: true,
					controls			: false,
					pager				: true
				});
				$(window).on( 'resize', function() {
					var g_w = $( '.products .container-inner' ).width() / products_num(),
						$article_product = $( '[id^="carousel-products"] .carousel-item' );
					$article_product.css({ 'width' : g_w });
					carousel_products.reloadSlider && carousel_products.reloadSlider({
						wrapperClass		: 'bx-wrapper-carousel',
						minSlides			: 1,
						maxSlides			: products_num(),
						moveSlides			: 1,
						slideWidth			: g_w,
						slideMargin			: 0,
						infiniteLoop		: false,
						hideControlOnEnd	: true,
						controls			: false,
						pager				: true
					});
				});
			}, 400 );
		},

		rightClick : function() {
			$(document).bind( "contextmenu", function(e) {
				return false;
			});
		},

		initTabs : function() {
			/* All Tabs */
			$( 'iframe:gt()' ).load( function() {
				$(this).parent().removeClass( 'visible' )
			})
			$( 'div.tabs-container' ).each( function() {
				$(this)
					.find( 'li:eq(0)' )
					.addClass( 'current' );
				$(this)
					.find( 'h5:eq(0)' )
					.addClass( 'active' );
				$(this)
					.find( 'div.pane:eq(0)' )
					.addClass( 'visible' );
			});
			$( 'ul.tabs' ).delegate( 'li:not(.current)', 'click', function() {
				$( 'div.tabs-container' )
					.find( 'h5' )
					.removeClass( 'active' )
					.eq( $(this).index() )
					.addClass( 'active' );
				$(this)
					.addClass( 'current' )
					.siblings()
					.removeClass( 'current' )
					.parents( 'div.tabs-container' )
					.find( 'div.pane' )
					.eq( $(this).index() )
					.fadeIn()
					.addClass( 'visible' )
					.siblings( 'div.pane' )
					.removeClass( 'visible' )
					.hide();
			});
			/* Horizontal Tabs ( with carousel navigation ) */
			setTimeout( function() {
				$.fn.swingMenu = function( g ) {
					var h = jQuery.extend({}, {
						speed       : 800,
						prevClass   : 'theme-icon carousel-icon prev-icon',
						nextClass   : 'theme-icon carousel-icon next-icon',
						shieldClass : 'map',
						minWidth    : 451,
						activeClass : 'current'
					}, g );
					return this.each( function( indx, el ) {
						var ul     = $( el ),
							li     = ul.find( 'li' ),
							prev   = $( '<a class="navitab-prev no-animsition"><i class="' + h.prevClass + '"></i></a>' ).insertBefore( ul ),
							next   = $( '<a class="navitab-next no-animsition"><i class="' + h.nextClass + '"></i></a>' ).insertAfter( ul ),
							shield = $( '<div/>', { 'class' : h.shieldClass }),
							parent = ul.parent();
						ul.wrap( shield );
						shield = ul.parent();
						var iconW = li.outerHeight();
						$( '.carouseltabs [class*="navitab-"]' ).css({
							'width'       : iconW,
							'height'      : iconW,
							'line-height' : iconW + 'px'
						});
						$( '.carouseltabs .carousel-icon' ).css({
							'width'       : iconW,
							'height'      : iconW,
							'line-height' : iconW + 'px'
						});
						var num  = 0,
							len  = 0,
							item = 0;
						prev.on( 'click', function( b ) {
							b.preventDefault();
							num--;
							0 > num && ( num = 0 );
							num > len && ( num = len );
							moveUl()
						});
						next.on( 'click', function( b ) {
							b.preventDefault();
							num++;
							0 > num && ( num = 0 );
							num > len && ( num = len );
							moveUl();
						});
						function moveUl() {
							var elLeft = li.eq( num ).position().left;
							var x = num + item - 1;
							x >= li.lengh && ( x = li.length - 1 );
							var mapW = li.eq( x ).position().left + li.eq( x ).outerWidth() - elLeft;
							shield.css({
								'width' : mapW + 4
							});
							ul.stop( true, true ).animate({
								'left'  : -elLeft
							}, h.speed);
							next.toggle( num != len );
							prev.toggle( num != 0 );
						}
						$(window).resize( function resize() {
							var iconW = li.outerHeight();
							$( '.carouseltabs [class*="navitab-"]' ).css({
								'width'       : iconW,
								'height'      : iconW,
								'line-height' : iconW + 'px'
							});
							$( '.carouseltabs .carousel-icon' ).css({
								'width'       : iconW,
								'height'      : iconW,
								'line-height' : iconW + 'px'
							});
							var width = parent.width();
							if ( width < h.minWidth ) {
								next.toggle( false );
								prev.toggle( false );
								return
							}
							var w    = width - 150,
								mapW = 0;
							len  = li.length;
							item = 0;
							num  = 0;
							li.each( function( indx, element ) {
								var elW = $(this).outerWidth() + $(this).position().left + 1;
								if ( elW < w ) {
									mapW = elW;
									len--, item++
								}
							});
							var x = li.index( $( '.' + h.activeClass, ul ) );
							if ( x > len ) {
								x = len;
							}
							if ( x > 0 ) {
								num = x;
							}
							moveUl();
						}).trigger( 'resize' );
					})
				};
				$( '.carouseltabs .tabs' ).swingMenu();
			}, 2000 );
			/* If mobile convert to Accordion */
			var tabsContainer = $( '.tabs-container' ).width();
			if ( tabsContainer >= 481 ) {
				$( '.tabs-container' ).removeClass( 'transform-to-accordion' );
			};
			if ( tabsContainer <= 480 ) {
				$( '.tabs-container' ).addClass( 'transform-to-accordion' );
			};
			$( '.transform-to-accordion' ).each( function(i) {
				var tgl    = $(this),
					toggle = tgl.find( '.accordion' );
				toggle.on( 'click', function() {
					var indx = toggle.index(this),
						parent = $(this).parents( '.tabs-container' );
					$( 'ul.tabs li', parent ).removeClass( 'current' ).eq( indx ).addClass( 'current' );
					if ( $(this).next().is( ':hidden' ) ) {
						tgl
							.find( '.accordion' )
							.removeClass( 'active' )
							.next()
							.slideUp();
						$(this)
							.toggleClass( 'active' )
							.next()
							.slideDown();
					}
					return false;
				});
			});
			$(window).resize(  function resize() {
				var tabsContainer = $( '.tabs-container' ).width();
				if ( tabsContainer >= 481 ) {
					$( '.tabs-container' ).removeClass( 'transform-to-accordion' );
				};
				if ( tabsContainer <= 480 ) {
					$( '.tabs-container' ).addClass( 'transform-to-accordion' );
				};
				$( '.transform-to-accordion' ).each( function(i) {
					var tgl    = $(this),
						toggle = tgl.find( '.accordion' );
					toggle.on( 'click', function() {
						var indx = toggle.index(this),
							parent = $(this).parents( '.tabs-container' );
						$( 'ul.tabs li', parent ).removeClass( 'current' ).eq( indx ).addClass( 'current' );
						if ( $(this).next().is( ':hidden' ) ) {
							tgl
								.find( '.accordion' )
								.removeClass( 'active' )
								.next()
								.slideUp();
							$(this)
								.toggleClass( 'active' )
								.next()
								.slideDown();
						}
						return false;
					});
				});
			}).trigger( 'resize' );
			/* Horizontal Tabs animation */
			$( '.horizontal .tabs, .carouseltabs .tabs' ).on({
				'mouseenter' : function( event ) {
					$(this)
						.find( 'span' )
						.stop( true, true )
						.animate({
							marginTop		: '4px',
							marginBottom	: '-4px'
					}, 300 )
				},
				'mouseleave' : function( event ) {
					$(this)
						.find( 'span' )
						.stop( true, true )
						.animate({
							marginTop		: '0',
							marginBottom	: '0'
					}, 300 )
				},
				'click' : function() {
					$(this)
						.find( 'span' )
						.stop( true, true )
						.animate({
							marginTop		: '0',
							marginBottom	: '0'
					}, 300 )
				}
			}, 'li:not(.current)' );
			/* Vertical Tabs animation */
			$( '.vertical .tabs' ).on({
				'mouseenter' : function( event ) {
					$(this)
						.find( 'span' )
						.stop( true, true )
						.animate({
							marginRight	: '-4px',
							marginLeft	: '4px'
					}, 200 )
				},
				'mouseleave' : function( event ) {
					$(this)
						.find( 'span' )
						.stop( true, true )
						.animate({
							marginRight	: '0',
							marginLeft	: '0'
					}, 200 )
				},
				'click' : function() {
					$(this)
						.find( 'span' )
						.stop( true, true )
						.animate({
							marginRight	: '0',
							marginLeft	: '0'
					}, 200 )
				}
			}, 'li:not(.current)' );
		},

		initToggle : function() {
			/* Toggle */
			$( '.toggle' ).on( 'click', function() {
				$(this)
					.toggleClass( 'active' )
					.next( '.toggle-content' )
					.slideToggle();
			});
			/* Accordion */
			$( '.toggle-container' ).each( function(i) {
				var tgl    = $(this),
					toggle = tgl.find( '.accordion' );
				toggle.on( 'click', function() {
					if ( $(this).next().is( ':hidden' ) ) {
						tgl
							.find( '.accordion' )
							.removeClass( 'active' )
							.next()
							.slideUp();
						$(this)
							.toggleClass( 'active' )
							.next()
							.slideDown();
					}
					return false;
				});
			});
		},

		initInfoAnimations : function() {
			/* Linear */
			$( '.progress-horizontal-wrapper.wrapper-center' ).each( function( indx, element ) {
				var $this  = $(this),
					$width = $this.width(),
					$info  = $this.find( '.center-info' );
				$info.css({ 'width' : $width + 'px' });
			});
			$(window).on( 'resize', function() {
				$( '.progress-horizontal-wrapper.wrapper-center' ).each( function( indx, element ) {
					var $this  = $(this),
						$width = $this.width(),
						$info  = $this.find( '.center-info' );
					$info.css({ 'width' : $width + 'px' });
				});
			});
			$( '.progress-vertical-wrapper.position-center' ).each( function( indx, element ) {
				var $this           = $(this),
					$wrapper_width  = $this.width(),
					$parent_width   = $this.parent().width(),
					$wrapper_margin = ( $parent_width - $wrapper_width ) / 2;
				$this.css({ 'marginLeft' : Math.round( $wrapper_margin ) + 'px' });
			});
			$(window).on( 'resize', function() {
				$( '.progress-vertical-wrapper.position-center' ).each( function( indx, element ) {
					var $this           = $(this),
						$wrapper_width  = $this.width(),
						$parent_width   = $this.parent().width(),
						$wrapper_margin = ( $parent_width - $wrapper_width ) / 2;
					$this.css({ 'marginLeft' : Math.round( $wrapper_margin ) + 'px' });
				});
			});
			setTimeout( function() {
				$( '.progress' ).viewportChecker({
					classToAdd       : 'visible',
					offset           : 100,
					repeat           : true, // false
					callbackFunction : function( elem, action ) {
						$( '.progress.visible .progress-bar' )
							.not( '.animated' )
							.progressbar({
								use_percentage   : true,
								transition_delay : 30,
								display_text     : 'center'
							})
							.addClass( 'animated' );
					}
				});
			}, 1000 );
			/* Circles */
			$( '.progress-circle' ).viewportChecker({
				classToAdd       : 'visible',
				offset           : 100,
				repeat           : true, // true, // false
				callbackFunction : function( elem, action ) {
					$( '.progress-circle.visible' ).easyPieChart({
						animate : 2500,
						onStep  : function( from, to, percent ) {
							$( this.el )
								.find( '.progress-circle-percent' )
								.text( Math.round( percent ) );
						}
					});
				}
			});
			/* Number */
			$( '.progress-number' ).viewportChecker({
				classToAdd       : 'visible',
				offset           : 100,
				repeat           : true, // true
				callbackFunction : function( elem, action ) {
					$( '.progress-number.visible' )
						.not( '.animated' )
						.countUp()
						.addClass( 'animated' );
				}
			});
		},

		initAnimsition : function() {
			$( '#wrap' ).animsition({
				inDuration				: 800,
				outDuration				: 800,
				linkElement				: 'a:not([target="_blank"]):not([href^="#"]):not(.menu-parent-li):not([class^="button-"]):not([class^="link-style-"]):not(.no-animsition):not(.slide_nav):not(.bx-pager-link):not(#bx-pager a):not(#contact-form-submit):not(.comment-reply-link):not(#cancel-comment-reply-link):not(.comments-link):not(.cart-totals-coupon a):not(.shipping_method)',
				loadingClass			: 'animsition-loading',
				loadingInner			: '<div class="animsition-loader"></div>'
			});
		},

		initClassAdminbar : function() {
			$( '#wpadminbar' ).addClass( 'wp-admin-bar' );
		}

	}

	scriptFrontend.init();

});