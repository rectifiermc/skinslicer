function GlueOrigamy(skin, scl) {
    this.skin = skin;
    this.scl = scl;
}
GlueOrigamy.prototype.frame = function(hand, chest, scale, tx, ty, func, func2) {
    var canvas = document.createElement("canvas");
    var trap = 1 / 5 * hand;
    canvas.width = scale * (chest + hand + chest + hand + trap) + 2 * tx;
    canvas.height = scale + 2 * (hand + trap) * scale + 2 * ty;
    var ctx = canvas.getContext("2d");
    var running_x = 0;

    ctx.save();
    ctx.translate(tx + trap * scale, (canvas.height - scale) / 2);
    ctx.beginPath();


    ctx.imageSmoothingEnabled = false;
    ctx.lineWidth = 2;

    ctx.strokeRect(running_x, 0, hand * scale, scale);
    trapezium(ctx, running_x, 0, scale, 1 / 3 * hand * scale, 1 / 5 * hand * scale, 2);
    running_x += hand * scale;

    trapezium(ctx, running_x, -scale * hand, chest * scale, 1 / 3 * hand * scale, 1 / 5 * hand * scale, 1);
    trapezium(ctx, running_x, -scale * hand, scale * hand, 1 / 3 * hand * scale, 1 / 5 * hand * scale, 2);
    trapezium(ctx, running_x + chest * scale, -scale * hand, scale * hand, 1 / 3 * hand * scale, 1 / 5 * hand * scale, 0);
    //
    //
    trapezium(ctx, running_x, scale * (1 + hand), chest * scale, 1 / 3 * hand * scale, 1 / 5 * hand * scale, 3);
    trapezium(ctx, running_x, scale, scale * hand, 1 / 3 * hand * scale, 1 / 5 * hand * scale, 2);
    trapezium(ctx, running_x + chest * scale, scale, scale * hand, 1 / 3 * hand * scale, 1 / 5 * hand * scale, 0);


    ctx.strokeRect(running_x, -hand * scale, chest * scale, hand * scale);
    ctx.strokeRect(running_x, 0, chest * scale, scale);
    ctx.strokeRect(running_x, scale, chest * scale, hand * scale);
    func(ctx, scale, chest, hand, running_x, this.skin);
    running_x += chest * scale;

    ctx.strokeRect(running_x, 0, hand * scale, scale);
    running_x += hand * scale;

    ctx.strokeRect(running_x, 0, chest * scale, scale);
    running_x += chest * scale;
    func2(ctx, scale, chest, hand, running_x, this.skin);
    ctx.restore();
    return canvas;
}
GlueOrigamy.prototype.prepare = function() {

    this.leg_2 = this.frame(1 / 3, 1 / 3, this.scl, 10, 10, function(ctx, scale, chest, hand, running_x, img) {
        ctx.save();
        ctx.rotate(Math.PI);
        ctx.drawImage(img, 20, 48, 4, 4, -running_x - chest * scale, 0, chest * scale, hand * scale);
        //ovr
        ctx.drawImage(img, 4, 48, 4, 4, -running_x - chest * scale, 0, chest * scale, hand * scale);

        ctx.restore();
        ctx.drawImage(img, 24, 48, 4, 4, running_x, scale, chest * scale, hand * scale);
        //ovr
        ctx.drawImage(img, 8, 48, 4, 4, running_x, scale, chest * scale, hand * scale);
    }, function(ctx, scale, chest, hand, running_x, img) {
        ctx.drawImage(img, 16, 52, 16, 12, 0, 0, running_x, scale);
        //ovr
        ctx.drawImage(img, 0, 52, 16, 12, 0, 0, running_x, scale);
    });

    this.hand_2 = this.frame(1 / 3, 1 / 3, this.scl, 10, 10, function(ctx, scale, chest, hand, running_x, img) {
        ctx.save();
        ctx.rotate(Math.PI);
        ctx.drawImage(img, 36, 48, 4, 4, -running_x - chest * scale, 0, chest * scale, hand * scale);
        //ovr
        ctx.drawImage(img, 52, 48, 4, 4, -running_x - chest * scale, 0, chest * scale, hand * scale);
        ctx.restore();
        ctx.drawImage(img, 40, 48, 4, 4, running_x, scale, chest * scale, hand * scale);
        //ovr
        ctx.drawImage(img, 56, 48, 4, 4, running_x, scale, chest * scale, hand * scale);
    }, function(ctx, scale, chest, hand, running_x, img) {
        ctx.drawImage(img, 32, 52, 16, 12, 0, 0, running_x, scale);
        //ovr
        ctx.drawImage(img, 48, 52, 16, 12, 0, 0, running_x, scale);
    });


    this.head = this.frame(1, 1, (2 / 3 * this.scl) * (1 - 0.1), 20, 20, function(ctx, scale, chest, hand, running_x, img) {
        ctx.save();
        ctx.rotate(Math.PI);
        ctx.drawImage(img, 16, 0, 8, 8, -running_x - chest * scale, -2 * scale, chest * scale, hand * scale);
        //Overlay
        ctx.drawImage(img, 48, 0, 8, 8, -running_x - chest * scale, -2 * scale, chest * scale, hand * scale);
        ctx.restore();
        ctx.drawImage(img, 8, 0, 8, 8, running_x, -scale, chest * scale, hand * scale);
        //Overlay
        ctx.drawImage(img, 40, 0, 8, 8, running_x, -scale, chest * scale, hand * scale);

    }, function(ctx, scale, chest, hand, running_x, img) {
        ctx.drawImage(img, 0, 8, 32, 8, 0, 0, running_x, scale);
        //Overlay
        ctx.drawImage(img, 32, 8, 32, 8, 0, 0, running_x, scale);
    });


    this.leg_1 = this.frame(1 / 3, 1 / 3, this.scl, 10, 10, function(ctx, scale, chest, hand, running_x, img) {
        ctx.save();
        ctx.rotate(Math.PI);
        ctx.drawImage(img, 4, 16, 4, 4, -running_x - chest * scale, 0, chest * scale, hand * scale);
        //ovr
        ctx.drawImage(img, 4, 32, 4, 4, -running_x - chest * scale, 0, chest * scale, hand * scale);
        ctx.restore();
        ctx.drawImage(img, 8, 32, 4, 4, running_x, scale, chest * scale, hand * scale);
        //ovr
        ctx.drawImage(img, 8, 16, 4, 4, running_x, scale, chest * scale, hand * scale);
    }, function(ctx, scale, chest, hand, running_x, img) {
        ctx.drawImage(img, 0, 20, 16, 12, 0, 0, running_x, scale);
        //ovr
        ctx.drawImage(img, 0, 36, 16, 12, 0, 0, running_x, scale);

    });


    this.hand_1 = this.frame(1 / 3, 1 / 3, this.scl, 10, 10, function(ctx, scale, chest, hand, running_x, img) {
        ctx.save();
        ctx.rotate(Math.PI);
        ctx.drawImage(img, 44, 16, 4, 4, -running_x - chest * scale, 0, chest * scale, hand * scale);
        //ovr
        ctx.drawImage(img, 44, 32, 4, 4, -running_x - chest * scale, 0, chest * scale, hand * scale);
        ctx.restore();
        ctx.drawImage(img, 48, 16, 4, 4, running_x, scale, chest * scale, hand * scale);
        //ovr
        ctx.drawImage(img, 48, 32, 4, 4, running_x, scale, chest * scale, hand * scale);
    }, function(ctx, scale, chest, hand, running_x, img) {
        ctx.drawImage(img, 40, 20, 16, 12, 0, 0, running_x, scale);
        //Overlay
        ctx.drawImage(img, 40, 36, 16, 12, 0, 0, running_x, scale);

    });

    this.chest = this.frame(1 / 3, 2 / 3, this.scl, 10, 10, function(ctx, scale, chest, hand, running_x, img) {
        ctx.save();
        ctx.rotate(Math.PI);
        ctx.drawImage(img, 20, 16, 8, 4, -running_x - chest * scale, 0, chest * scale, hand * scale);
        //Overlay
        ctx.drawImage(img, 20, 32, 8, 4, -running_x - chest * scale, 0, chest * scale, hand * scale);
        ctx.restore();
        ctx.drawImage(img, 28, 16, 8, 4, running_x, scale, chest * scale, hand * scale);
        //Overlay
        ctx.drawImage(img, 28, 32, 8, 4, running_x, scale, chest * scale, hand * scale);
    }, function(ctx, scale, chest, hand, running_x, img) {
        ctx.drawImage(img, 16, 20, 24, 12, 0, 0, running_x, scale);
        ctx.drawImage(img, 16, 36, 24, 12, 0, 0, running_x, scale);
    });
};
GlueOrigamy.prototype.merge = function() {
    var canvas = document.createElement("canvas");
    canvas.width = 842; //72ppi
    canvas.height = canvas.width * Math.sqrt(2);
    var ctx = canvas.getContext("2d");
    this.prepare();
    ctx.drawImage(this.head, 0, 0);
    ctx.drawImage(this.chest, 0, this.head.height);
    ctx.drawImage(this.leg_1, this.hand_2.width, this.head.height + this.chest.height);
    ctx.drawImage(this.leg_2, 0, this.head.height + this.chest.height);
    ctx.drawImage(this.hand_1, this.chest.width, this.head.height);
    ctx.drawImage(this.hand_2, this.leg_1.width + this.leg_2.width, this.chest.height + this.head.height);
    ctx.font = "30px Arial";
    ctx.fillText("rectifier.epizy.com", canvas.width - 500, canvas.height - 5);
    return canvas.toDataURL();
}