$(function(){
	var elem = document.getElementById('draw');
	var two = new Two({ width: 285, height: 200 }).appendTo(elem);

	var circle = two.makeCircle(100, 100, 50);
	circle.fill = '#ff4646';
	circle.stroke = '#ff5656';
	circle.linewidth = 1;
	
	var circle2 = two.makeCircle(60,60,20)
	circle2.linewidth = 0;
	
	


	// Groups can take an array of shapes and/or groups.
	// var group = two.makeGroup(circle, rect);

	// // And have translation, rotation, scale like all shapes.
	// group.translation.set(two.width / 2, two.height / 2);
	// group.rotation = Math.PI;
	// group.scale = 0.75;

	// // You can also set the same properties a shape have.
	// group.linewidth = 4;

	two.update();
})