(function() {
    'use strict'
    // your code will start here...
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    var tool = new Tool();

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'ein Kreis';

    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point.x, event.point.y, 90);
        c.fillColor = 'green';
        var text = new PointText(event.point.x, event.point.y);
        text.justification = 'center';
        text.fillColor = 'white';
        text.fontSize = 10;
        text.content = 'noch ein Kreis';
    };

    paper.view.draw();
    console.log('main.js loaded');
    // ...and end here
    }())