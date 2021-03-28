function NoobOrigamy(skin, scl) {
    this.skin = skin;
    this.scl = scl;
}
NoobOrigamy.prototype.frame = function(hand, chest, scale, tx, ty, func, func2) {
    var canvas = document.createElement("canvas");
    canvas.width = scale * (chest + hand + chest + hand + chest) + 2 * tx;
    canvas.height = scale + chest * scale + scale + chest * scale + scale + 2 * ty;
    var ctx = canvas.getContext("2d");
    var running_x = 0;

    ctx.save();
    ctx.beginPath();

    ctx.imageSmoothingEnabled = false;
    ctx.translate(tx, (canvas.height - scale) / 2);
    ctx.lineWidth = 2;

    ctx.strokeRect(0, -scale, chest * scale, scale);
    ctx.strokeRect(0, 0, chest * scale, scale);
    ctx.strokeRect(0, scale, chest * scale, scale);
    running_x += chest * scale;

    ctx.strokeRect(chest * scale, 0, hand * scale, scale);
    running_x += hand * scale;

    ctx.strokeRect(running_x, 0, chest * scale, scale);
    running_x += chest * scale

    ctx.strokeRect(running_x, -chest * scale, hand * scale, chest * scale);
    ctx.strokeRect(running_x - hand * scale, -(1 + chest) * scale, hand * scale, scale);
    ctx.strokeRect(running_x, -(1 + chest) * scale, hand * scale, scale);
    ctx.strokeRect(running_x + hand * scale, -(1 + chest) * scale, hand * scale, scale);


    ctx.strokeRect(running_x, 0, hand * scale, scale);

    ctx.strokeRect(running_x, scale, hand * scale, chest * scale);
    ctx.strokeRect(running_x - hand * scale, (1 + chest) * scale, hand * scale, scale);
    ctx.strokeRect(running_x, (1 + chest) * scale, hand * scale, scale);
    ctx.strokeRect(running_x + hand * scale, (1 + chest) * scale, hand * scale, scale);

    running_x += hand * scale;

    func(ctx, scale, chest, hand, running_x, this.skin);

    ctx.strokeRect(running_x, 0, chest * scale, scale);
    running_x += chest * scale;

    func2(ctx, scale, chest, hand, running_x, this.skin);

    ctx.closePath();
    ctx.restore();

    return canvas;
}
NoobOrigamy.prototype.prepare = function() {

    this.leg_2 = this.frame(1 / 3, 1 / 3, this.scl, 10, 10, function(ctx, scale, chest, hand, running_x, img) {
        ctx.save();
        ctx.rotate(Math.PI / 2);
        ctx.drawImage(img, 20, 48, 4, 4, -scale * hand, -running_x, hand * scale, hand * scale);
        ctx.drawImage(img, 24, 48, 4, 4, scale, -running_x, hand * scale, hand * scale);

        ctx.restore();
    }, function(ctx, scale, chest, hand, running_x, img) {
        ctx.drawImage(img, 16, 52, 16, 12, 0, 0, running_x - (hand) * scale, scale);
    });

    this.hand_2 = this.frame(1 / 3, 1 / 3, this.scl, 10, 10, function(ctx, scale, chest, hand, running_x, img) {
        ctx.save();
        ctx.rotate(Math.PI / 2);
        ctx.drawImage(img, 36, 48, 4, 4, -scale * hand, -running_x, hand * scale, hand * scale);
        ctx.drawImage(img, 40, 48, 4, 4, scale, -running_x, hand * scale, hand * scale);
        ctx.restore();
    }, function(ctx, scale, chest, hand, running_x, img) {
        ctx.drawImage(img, 32, 52, 16, 12, 0, 0, running_x - (hand) * scale, scale);
    });


    this.head = this.frame(1, 1, (2 / 3 * this.scl) * (1 - 0.1), 20, 20, function(ctx, scale, chest, hand, running_x, img) {
        ctx.save();
        ctx.rotate(Math.PI / 2);
        ctx.drawImage(img, 8, 0, 8, 8, -scale * hand, -running_x, hand * scale, hand * scale);
        ctx.drawImage(img, 16, 0, 8, 8, scale, -running_x, hand * scale, hand * scale);

        ctx.restore();
    }, function(ctx, scale, chest, hand, running_x, img) {
        ctx.drawImage(img, 0, 8, 32, 8, 0, 0, running_x - (hand) * scale, scale);
    });


    this.leg_1 = this.frame(1 / 3, 1 / 3, this.scl, 10, 10, function(ctx, scale, chest, hand, running_x, img) {
        ctx.save();
        ctx.rotate(Math.PI / 2);
        ctx.drawImage(img, 4, 16, 4, 4, -scale * hand, -running_x, hand * scale, hand * scale);
        ctx.drawImage(img, 8, 16, 4, 4, scale, -running_x, hand * scale, hand * scale);

        ctx.restore();
    }, function(ctx, scale, chest, hand, running_x, img) {
        ctx.drawImage(img, 0, 20, 16, 12, 0, 0, running_x - (hand) * scale, scale);
    });


    this.hand_1 = this.frame(1 / 3, 1 / 3, this.scl, 10, 10, function(ctx, scale, chest, hand, running_x, img) {
        ctx.save();
        ctx.rotate(Math.PI / 2);
        ctx.drawImage(img, 44, 16, 4, 4, -scale * hand, -running_x, hand * scale, hand * scale);
        ctx.drawImage(img, 48, 16, 4, 4, scale, -running_x, hand * scale, hand * scale);
        ctx.restore();
    }, function(ctx, scale, chest, hand, running_x, img) {
        ctx.drawImage(img, 40, 20, 16, 12, 0, 0, running_x - (hand) * scale, scale);
    });

    this.chest = this.frame(1 / 3, 2 / 3, this.scl, 10, 10, function(ctx, scale, chest, hand, running_x, img) {
        ctx.save();
        ctx.rotate(Math.PI / 2);
        ctx.drawImage(img, 20, 16, 8, 4, -scale * chest, -running_x, chest * scale, hand * scale);
        ctx.drawImage(img, 28, 16, 8, 4, scale, -running_x, chest * scale, hand * scale);
        ctx.restore();
    }, function(ctx, scale, chest, hand, running_x, img) {
        ctx.drawImage(img, 20, 20, 20, 12, 0, 0, running_x - (chest + hand) * scale, scale);
        ctx.drawImage(img, 16, 20, 4, 12, running_x - (chest + hand) * scale, 0, hand * scale, scale);
    });
}
NoobOrigamy.prototype.merge = function() { //most messy one, need to be upadated
    var canvas = document.createElement("canvas");
    canvas.width = 842; //72ppi
    canvas.height = canvas.width * Math.sqrt(2);
    var ctx = canvas.getContext("2d");
    this.prepare();
    ctx.drawImage(this.chest, 0, 0);
    ctx.drawImage(this.head, this.chest.width, 0);
    ctx.drawImage(this.hand_1, 0, this.chest.height);
    ctx.drawImage(this.hand_2, this.hand_1.width, this.chest.height);
    ctx.drawImage(this.leg_1, 2 * this.hand_2.width, this.chest.height);
    ctx.drawImage(this.leg_2, 3 * this.hand_2.width, this.chest.height);
    ctx.font = "30px Arial";
    ctx.fillText("rectifier.epizy.com", canvas.width - 500, canvas.height - 10);
    return canvas.toDataURL();
}