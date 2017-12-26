window.onload = () => {
    main();
}

let main = () => {
    const canvas = document.getElementById('app');
    if(!canvas) {
        console.log('Failed to retrieve the <canvas> element.');
        return;
    }
    // 获取上下文
    let ctx = canvas.getContext('2d');
    // 设置填充色
    ctx.fillStyle = 'rgba(0, 0, 255, 1.0)';
    // 绘制矩形：x, y, w, h
    ctx.fillRect(100, 50, 200, 200);
}