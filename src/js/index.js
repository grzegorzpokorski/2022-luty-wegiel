import 'bootstrap';
import { tns } from "./../../node_modules/tiny-slider/src/tiny-slider"

var slider = tns({
	container: '#testimonials-slider',
	controlsContainer: "#customize-controls",
	mode: 'carousel',
	items: 1,
	slideBy: 'page',
	navPosition: 'bottom',
	prevButton: '.prev',
});