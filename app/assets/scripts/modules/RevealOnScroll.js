import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor() {
		this.itemsToReveal = $(".feature-item");
		this.hideInitially();
		this.createWaypoints();
	}
	
	hideInitially() {
		console.log(this);
		this.itemsToReveal.addClass("reveal-item");
	}	

	createWaypoints(){
		this.itemsToReveal.each(function(){
			var currentItem = this;
			console.log(this);
			new Waypoint({
				element: currentItem,
				handler: function(){
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: "75%"
			});
		});
	}
}

export default RevealOnScroll;