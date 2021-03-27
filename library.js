function trapezium(ctx, x, y, height, width, tan, dir) {
    ctx.save();
    ctx.beginPath();
    switch (dir) {
        case 0:
            ctx.moveTo(x, y);
            ctx.lineTo(x + width, y + tan);
            ctx.lineTo(x + width, y + height - tan);
            ctx.lineTo(x, y + height);
            ctx.lineTo(x, y);
            break;
        case 1:
            ctx.moveTo(x, y);
            ctx.lineTo(x + tan, y - width);
            ctx.lineTo(x + height - tan, y - width);
            ctx.lineTo(x + height, y);
            ctx.lineTo(x, y);
            break;
        case 2:
            ctx.moveTo(x, y);
            ctx.lineTo(x - width, y + tan);
            ctx.lineTo(x - width, y + height - tan);
            ctx.lineTo(x, y + height);
            ctx.lineTo(x, y);
            break;
        case 3:
            ctx.moveTo(x, y);
            ctx.lineTo(x + tan, y + width);
            ctx.lineTo(x + height - tan, y + width);
            ctx.lineTo(x + height, y);
            ctx.lineTo(x, y);
            break;
    }
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}