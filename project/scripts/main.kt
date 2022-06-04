
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLElement


fun main() {
    //carrega os primeiros comandos
    window.onload= {
        // roda o jogo dentro do laço
        window.setInterval({
            principal()
        }, 12)
    }
}
val jogadorNome:String? = window.prompt(
    "Qual é o seu nome?",
    ""
)
var posicaoBolaX = 10.0
var posicaoBolaY = 10.0
var velocidadeBolaPosicaoX = 7.0
var velocidadeBolaPosicaoY = 7.0
var posicaoJogador1 = 40.0
var posicaoJogador2 = 40.0
var pontuacaoJogador1 = 0.0
var pontuacaoJogador2 = 0.0

// Definindo o campo
const val larguraCampo = 600.0
const val alturaCampo = 500.0
const val espessuraRede = 5.0
const val espessuraRaquete = 11.0
const val alturaRaquete = 100.0
const val efeitoRaquete = 0.3
const val velocidadeJogador2 = 3.0

//Definindo a bola
const val diametroBola:Double = 10.0

fun initalizeCanvas(): HTMLCanvasElement {


    val canvas = document.getElementById("folha") as HTMLCanvasElement
    val context = canvas.getContext("2d") as CanvasRenderingContext2D

    val mensagem = document.getElementById("mensagem-text") as HTMLElement
    mensagem.innerHTML = "Bem-vindo(a) $jogadorNome está preparado(a)? Vamos lá... " +
            "\n\n mova o mouse para mexer a raquete!"

    canvas.onmousemove={ ev ->
        val y = ev.clientY
        posicaoJogador1 = y - alturaRaquete / 2
        ""
    }

    //Definindo a cor do campo
    context.fillStyle = "#286047"

    //Dando as informações do tamanho do campo
    context.fillRect(0.0, 0.0, larguraCampo, alturaCampo)
    //Definindo a cor branca
    context.fillStyle = "#ffffff"
    //Desenhando a rede
    context.fillRect(larguraCampo / 2 - espessuraRede / 2, 0.0, espessuraRede, alturaCampo)
    //Desenhando a bola
    context.fillRect(posicaoBolaX - diametroBola / 2, posicaoBolaY - diametroBola / 2, diametroBola, diametroBola)

    //Desenhando as raquetes
    context.fillRect(0.0, posicaoJogador1, espessuraRaquete, alturaRaquete)
    context.fillRect(larguraCampo - espessuraRaquete, posicaoJogador2, espessuraRaquete, alturaRaquete)

    //Escrevendo a pontuação dos jogadores
    context.fillText("Humano - $pontuacaoJogador1 pontos", 100.0, 100.0)
    context.fillText("Computador - $pontuacaoJogador2 pontos", 400.0, 100.0)

    document.body!!.appendChild(canvas)

    return canvas
}

fun principal() {
    initalizeCanvas()
    calcular()
    println()
}
fun calcular(){
    posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY
    posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX
    //Verificando lateral superior
    if (posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0) {
        velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY
    }

    //Verificando a lateral inferior
    if (posicaoBolaY > alturaCampo && velocidadeBolaPosicaoY > 0) velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY

    //Verificando se o Jogador 2 faz um ponto
    if (posicaoBolaX < 0) {
        if (posicaoBolaY > posicaoJogador1 && posicaoBolaY < posicaoJogador1 + alturaRaquete) {
            //Rebater a bola
            velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX
            val diferencaY: Double = efeitoRaquete
            velocidadeBolaPosicaoY = diferencaY
        } else {
            //Pontos do Jogador 2
            pontuacaoJogador2 = pontuacaoJogador2 + 1
            continuar()
        }
    }

    //Verificando se o Jogador 1 fez ponto
    if (posicaoBolaX > larguraCampo) {
        if (posicaoBolaY > posicaoJogador2 && posicaoBolaY < posicaoJogador2 + alturaRaquete) {
            //Rebater a bola
            velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX
            val diferencaY: Double = efeitoRaquete
            velocidadeBolaPosicaoY = diferencaY
        } else {
            //Pontos do Jogador 1
            pontuacaoJogador1 = pontuacaoJogador1 + 1
            continuar()
        }
    }
    //Atualizando a posição do Jogador 2
    posicaoJogador2 = if (posicaoJogador2 + alturaRaquete / 2 < posicaoBolaY) {
        posicaoJogador2 + velocidadeJogador2
    } else {
        posicaoJogador2 - velocidadeJogador2
    }
}

fun continuar() {
    //Colocar bola no centro
    posicaoBolaX = larguraCampo / 2
    posicaoBolaY = alturaCampo / 2
    velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX
    velocidadeBolaPosicaoY = 7.0
}
