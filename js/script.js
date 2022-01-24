window.onload = ()=>{
    
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var spriteSheet = new Image();
    spriteSheet.src = 'img/img.png';
    var zezin = new Sprite(spriteSheet);
    var scene = new Image()
    scene.src = 'img/scene.png';

    spriteSheet.onload = ()=>{
        init()
    }
    
    function init(){
        jogo()
    }
    function frame(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.drawImage(scene,0,0,scene.width,scene.height,0,0,canvas.width,canvas.height)
        zezin.desenhar(ctx)
    }
    function atualiza(){
        zezin.mover()
    }
    function jogo(){
        requestAnimationFrame(jogo,canvas)
        atualiza()
        frame()
    }
    window.addEventListener('keydown',(evento)=>{
        console.log(evento.key)
        switch(evento.key){
            case 'ArrowUp':
                zezin.mvUp = true
                break;
            case 'ArrowDown':
                zezin.mvDown = true
                break;
            case 'ArrowLeft':
                zezin.mvLeft = true
                break;
            case 'ArrowRight':
                zezin.mvRight = true
        }
    })
    window.addEventListener('keyup',(evento)=>{
        switch(evento.key){
            case 'ArrowUp':
                zezin.mvUp = false
                break;
            case 'ArrowDown':
                zezin.mvDown = false
                break;
            case 'ArrowLeft':
                zezin.mvLeft = false
                break;
            case 'ArrowRight':
                zezin.mvRight = false
        }
    })
}