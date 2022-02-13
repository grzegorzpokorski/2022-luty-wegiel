import 'bootstrap';
import { tns } from "./../../node_modules/tiny-slider/src/tiny-slider"

var slider = tns({
	container: '.testimonials-slider',
	controlsContainer: ".testimonials-slider__controls",
	mode: 'carousel',
	items: 1,
	slideBy: 'page',
	navPosition: 'bottom',
	mouseDrag: true,
	autoHeight: true,
});

var slider = tns({
	container: '.hero-slider',
	controlsContainer: ".hero-slider__controls",
	mode: 'carousel',
	items: 1,
	slideBy: 'page',
	navPosition: 'bottom',
	mouseDrag: true,
	autoHeight: true,
	autoplay: true,
	autoplayHoverPause: true,
	autoplayButtonOutput: false,
	speed: 700,
});