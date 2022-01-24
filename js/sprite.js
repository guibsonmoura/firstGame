class Sprite{
    constructor(image){
        this.mvUp = false 
        this.mvDown = false
        this.mvLeft = false
        this.mvRight = false;
        this.velocidade = 3
        this.posicaoRecorte = {
            x:0,
            y:0
        } 
        this.largura = 24;
        this.altura = 32;
        this.posicao = {
            x:0,
            y:0
        }
        this.image = image; 
        this.countAnime = 0
    }
    desenhar(ctx){
        ctx.drawImage(this.image,this.posicaoRecorte.x,this.posicaoRecorte.y,this.largura,this.altura,this.posicao.x,this.posicao.y,this.largura,this.altura); 
        this.animation();
    }
    mover(){
        if(this.mvUp){
            this.posicao.y -= this.velocidade
            this.posicaoRecorte.y = this.altura * 1;
        }else if(this.mvDown){
            this.posicao.y += this.velocidade
            this.posicaoRecorte.y = this.altura * 0
        }else if(this.mvLeft){
            this.posicao.x -= this.velocidade
            this.posicaoRecorte.y = this.altura * 2
        }else if(this.mvRight){
            this.posicao.x += this.velocidade
            this.posicaoRecorte.y = this.altura * 3;
        }
    }
    animation(){
        if (this.mvUp || this.mvDown || this.mvLeft || this.mvRight){
            this.countAnime++;
            if(this.countAnime >= 48){
                this.countAnime = 0
            }
            this.posicaoRecorte.x = Math.floor(this.countAnime / 6) * this.largura
        };
    };
    
}