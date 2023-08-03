const listPersonagens = [
    {
        nome: "CHAVES",
        imagem:"./img/img_0001.jpg",
    },
    {
        nome: "PELÉ",
        imagem:"./img/img_0002.jpg",
    },
    {
        nome: "AYRTON SENNA",
        imagem:"./img/img_0003.jpg",
    },
    {
        nome: "RENATO ARAGÃO",
        imagem:"./img/img_0004.jpg",
    },
    {
        nome: "JESUS CRISTO",
        imagem:"./img/img_0005.jpg",
    },
    {
        nome: "SELTON MELLO",
        imagem:"./img/img_0006.jpg",
    },
    {
        nome: "PEPPA PIG",
        imagem:"./img/img_0007.jpg",
    },
    {
        nome: "WILL SMITH",
        imagem:"./img/img_0008.jpg",
    },
    {
        nome: "PICA PAU",
        imagem:"./img/img_0009.jpg",
    },
    {
        nome: "WAGNER MOURA",
        imagem:"./img/img_0010.jpg",
    },
    {
        nome: "MICKEY MOUSE",
        imagem:"./img/img_0011.jpg",
    },
    {
        nome: "NARUTO",
        imagem:"./img/img_0012.jpg",
    },
    {
        nome: "SILVIO SANTOS",
        imagem:"./img/img_0013.jpg",
    },
    {
        nome: "BOB ESPONJA",
        imagem:"./img/img_0014.jpg",
    },
    {
        nome: "SCARLETT JOHANSSON",
        imagem:"./img/img_0015.jpg",
    },
    {
        nome: "MEGAN FOX",
        imagem:"./img/img_0016.jpg",
    },
    {
        nome: "XUXA",
        imagem:"./img/img_0017.jpg",
    },
    {
        nome: "ANITTA",
        imagem:"./img/img_0018.jpg",
    },
    {
        nome: "MICHAEL JACKSON",
        imagem:"./img/img_0019.jpg",
    },
    {
        nome: "CLAUDIA LEITTE",
        imagem:"./img/img_0020.jpg",
    },
    {
        nome: "NEYMAR",
        imagem:"./img/img_0021.jpg",
    },
    {
        nome: "WOLVERINE",
        imagem:"./img/img_0022.jpg",
    },
    {
        nome: "TIM MAIA",
        imagem:"./img/img_0023.jpg",
    },
    {
        nome: "GISELE BUNDCHEN",
        imagem:"./img/img_0024.jpg",
    },
    {
        nome: "PICACHU",
        imagem:"./img/img_0025.jpg",
    },
    {
        nome: "ANA MARIA BRAGA",
        imagem:"./img/img_0026.jpg",
    },
    {
        nome: "VIN DIESEL",
        imagem:"./img/img_0027.jpg",
    },
    {
        nome: "CHIQUINHA",
        imagem:"./img/img_0028.jpg",
    },
    {
        nome: "TIRIRICA",
        imagem:"./img/img_0029.jpg",
    },
    {
        nome: "SANDRA BULLOCK",
        imagem:"./img/img_0030.jpg",
    },
    {
        nome: "KIKO",
        imagem:"./img/img_0031.jpg",
    },
    {
        nome: "SEU MADRUGA",
        imagem:"./img/img_0032.jpg",
    },
    {
        nome: "BUZZ LIGHTYEAR",
        imagem:"./img/img_0033.jpg",
    },
    {
        nome: "RENATO RUSSO",
        imagem:"./img/img_0034.jpg",
    },
    {
        nome: "MANO BROWN",
        imagem:"./img/img_0035.jpg",
    },
    {
        nome: "NELSON MANDELA",
        imagem:"./img/img_0036.jpg",
    },
    {
        nome: "PATRICK",
        imagem:"./img/img_0037.jpg",
    },
    {
        nome: "FRED FLINSTONE",
        imagem:"./img/img_0038.jpg",
    },
    {
        nome: "MARÍLIA MENDONÇA",
        imagem:"./img/img_0039.jpg",
    },
    {
        nome: "RAUL SEIXAS",
        imagem:"./img/img_0040.jpg",
    },
    {
        nome: "CINDERELA",
        imagem:"./img/img_0041.jpg",
    },
    {
        nome: "ED SHEERAN",
        imagem:"./img/img_0042.jpg",
    },
    {
        nome: "MILEY CYRUS",
        imagem:"./img/img_0043.jpg",
    },
    {
        nome: "DANILO GENTILI",
        imagem:"./img/img_0044.jpg",
    },
    {
        nome: "CHICO ANISIO",
        imagem:"./img/img_0045.jpg",
    },
    {
        nome: "TOM HOLLAND",
        imagem:"./img/img_0046.jpg",
    },
    {
        nome: "ROBERT DOWNEY JR",
        imagem:"./img/img_0047.jpg",
    },
    {
        nome: "JHONNY DEPP",
        imagem:"./img/img_0048.jpg",
    },
    {
        nome: "MARAYA CAREY",
        imagem:"./img/img_0049.jpg",
    },
    {
        nome: "EMINEM",
        imagem:"./img/img_0050.jpg",
    }
];

document.addEventListener("DOMContentLoaded", function() {
    let nomePersonagem;
    let imagemPersonagem;
    let tentativas;
    let resposta;

    let vitorias = 0;
    let derrotas = 0;

    function inicializarJogo() {
        tentativas = 5;
        atualizarProgresso(tentativas);
        SorteiaImagem();
        document.querySelector("#resposta").value = "";
        desfocarImagem(tentativas);
    }

    function atualizarProgresso(tentativasRestantes) {
        for (let i = 1; i <= 5; i++) {
            let progresso = document.getElementById(`progresso-0${i}`);
            if (i <= tentativasRestantes) {
                progresso.style.backgroundColor = '#f1f1f1'; // Cor quando há tentativas restantes
            } else {
                progresso.style.backgroundColor = '#8B0000'; // Cor após a tentativa
            }
        }
    }

    function reiniciarJogo() {
        vitorias = 0; // Reiniciando as vitórias
        derrotas = 0; // Reiniciando as derrotas
        document.getElementById('vitorias').textContent = `${vitorias}`; // Atualizando o placar de vitórias na página
        document.getElementById('derrotas').textContent = `${derrotas}`; // Atualizando o placar de derrotas na página
        atualizarProgresso(tentativas);
        inicializarJogo();
    }

    reiniciarJogo();

    function SorteiaImagem(){
        const index = parseInt(Math.random() * listPersonagens.length)

        nomePersonagem = listPersonagens[index].nome;
        imagemPersonagem = listPersonagens[index].imagem;

        console.log(nomePersonagem);
        console.log(imagemPersonagem);

        document.getElementById("imagem").style.backgroundImage = "url(" + imagemPersonagem +")";
        desfocarImagem(tentativas);
    }

    function desfocarImagem(valoDesfoque){
        const imagem = document.getElementById("imagem")

        switch (valoDesfoque) {
            case 5:
                imagem.style.filter = "blur(40px)"
                break;
            case 4:
                imagem.style.filter = "blur(30px)"
                break;
            case 3:
                imagem.style.filter = "blur(20px)"
                break;
            case 2:
                imagem.style.filter = "blur(17px)"
                break;
            case 1:
                imagem.style.filter = "blur(14px)"
                break;
            case 0:
                imagem.style.filter = "blur(0)"
                break;
            default:
                break;
        }
    }

    document.addEventListener("keydown", (e) =>{
        if(e.key === 'Enter'){
            e.preventDefault();
            resposta = document.querySelector("#resposta").value.toUpperCase();
    
            if(resposta.length < 3 || !resposta.trim()){
                alert("isso não é um nome");
            } else if (resposta === nomePersonagem) {
                alert("Parabéns! Você acertou!");
                vitorias++;
                document.getElementById('vitorias').textContent = `${vitorias}`;
                document.getElementById("imagem").style.filter = "blur(0)"; // Adicione esta linha
                setTimeout(inicializarJogo, 1000); // Altere esta linha
            } else {
                alert("Desculpe, você errou. Tente novamente!");
                tentativas--;
                atualizarProgresso(tentativas);
                desfocarImagem(tentativas);
                if (tentativas == 0) {
                    alert("Você perdeu todas as suas tentativas. O personagem era " + nomePersonagem);
                    derrotas++;
                    document.getElementById('derrotas').textContent = `${derrotas}`;
                    document.getElementById("imagem").style.filter = "blur(0)"; // Adicione esta linha
                    setTimeout(inicializarJogo, 1000); // Altere esta linha
                }
            }
        }
    });

    document.getElementById('btnJogarNovamente').addEventListener('click', reiniciarJogo);
});


