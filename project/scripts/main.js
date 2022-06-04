(function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var toString = Kotlin.toString;
  var ensureNotNull = Kotlin.ensureNotNull;
  var println = Kotlin.kotlin.io.println;
  function main$lambda$lambda() {
    principal();
    return Unit;
  }
  function main$lambda(it) {
    return window.setInterval(main$lambda$lambda, 12);
  }
  function main() {
    window.onload = main$lambda;
  }
  var jogadorNome;
  var posicaoBolaX;
  var posicaoBolaY;
  var velocidadeBolaPosicaoX;
  var velocidadeBolaPosicaoY;
  var posicaoJogador1;
  var posicaoJogador2;
  var pontuacaoJogador1;
  var pontuacaoJogador2;
  var larguraCampo;
  var alturaCampo;
  var espessuraRede;
  var espessuraRaquete;
  var alturaRaquete;
  var efeitoRaquete;
  var velocidadeJogador2;
  var diametroBola;
  function initalizeCanvas$lambda(ev) {
    var y = ev.clientY;
    posicaoJogador1 = y - alturaRaquete / 2;
    return '';
  }
  function initalizeCanvas() {
    var tmp$, tmp$_0, tmp$_1;
    var canvas = Kotlin.isType(tmp$ = document.getElementById('folha'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    var mensagem = Kotlin.isType(tmp$_1 = document.getElementById('mensagem-text'), HTMLElement) ? tmp$_1 : throwCCE();
    mensagem.innerHTML = 'Bem-vindo(a) ' + toString(jogadorNome) + ' est\xE1 preparado(a)? Vamos l\xE1... ' + '\n\n mova o mouse para mexer a raquete!';
    canvas.onmousemove = initalizeCanvas$lambda;
    context.fillStyle = '#286047';
    context.fillRect(0.0, 0.0, larguraCampo, alturaCampo);
    context.fillStyle = '#ffffff';
    context.fillRect(larguraCampo / 2 - espessuraRede / 2, 0.0, espessuraRede, alturaCampo);
    context.fillRect(posicaoBolaX - diametroBola / 2, posicaoBolaY - diametroBola / 2, diametroBola, diametroBola);
    context.fillRect(0.0, posicaoJogador1, espessuraRaquete, alturaRaquete);
    context.fillRect(larguraCampo - espessuraRaquete, posicaoJogador2, espessuraRaquete, alturaRaquete);
    context.fillText('Humano - ' + pontuacaoJogador1 + ' pontos', 100.0, 100.0);
    context.fillText('Computador - ' + pontuacaoJogador2 + ' pontos', 400.0, 100.0);
    ensureNotNull(document.body).appendChild(canvas);
    return canvas;
  }
  function principal() {
    initalizeCanvas();
    calcular();
    println();
  }
  function calcular() {
    var tmp$;
    posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY;
    posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX;
    if (posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0) {
      velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
    }if (posicaoBolaY > alturaCampo && velocidadeBolaPosicaoY > 0)
      velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
    if (posicaoBolaX < 0) {
      if (posicaoBolaY > posicaoJogador1 && posicaoBolaY < posicaoJogador1 + alturaRaquete) {
        velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
        var diferencaY = efeitoRaquete;
        velocidadeBolaPosicaoY = diferencaY;
      } else {
        pontuacaoJogador2 = pontuacaoJogador2 + 1;
        continuar();
      }
    }if (posicaoBolaX > larguraCampo) {
      if (posicaoBolaY > posicaoJogador2 && posicaoBolaY < posicaoJogador2 + alturaRaquete) {
        velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
        var diferencaY_0 = efeitoRaquete;
        velocidadeBolaPosicaoY = diferencaY_0;
      } else {
        pontuacaoJogador1 = pontuacaoJogador1 + 1;
        continuar();
      }
    }if (posicaoJogador2 + alturaRaquete / 2 < posicaoBolaY) {
      tmp$ = posicaoJogador2 + velocidadeJogador2;
    } else {
      tmp$ = posicaoJogador2 - velocidadeJogador2;
    }
    posicaoJogador2 = tmp$;
  }
  function continuar() {
    posicaoBolaX = larguraCampo / 2;
    posicaoBolaY = alturaCampo / 2;
    velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
    velocidadeBolaPosicaoY = 7.0;
  }
  _.main = main;
  Object.defineProperty(_, 'jogadorNome', {
    get: function () {
      return jogadorNome;
    }
  });
  Object.defineProperty(_, 'posicaoBolaX', {
    get: function () {
      return posicaoBolaX;
    },
    set: function (value) {
      posicaoBolaX = value;
    }
  });
  Object.defineProperty(_, 'posicaoBolaY', {
    get: function () {
      return posicaoBolaY;
    },
    set: function (value) {
      posicaoBolaY = value;
    }
  });
  Object.defineProperty(_, 'velocidadeBolaPosicaoX', {
    get: function () {
      return velocidadeBolaPosicaoX;
    },
    set: function (value) {
      velocidadeBolaPosicaoX = value;
    }
  });
  Object.defineProperty(_, 'velocidadeBolaPosicaoY', {
    get: function () {
      return velocidadeBolaPosicaoY;
    },
    set: function (value) {
      velocidadeBolaPosicaoY = value;
    }
  });
  Object.defineProperty(_, 'posicaoJogador1', {
    get: function () {
      return posicaoJogador1;
    },
    set: function (value) {
      posicaoJogador1 = value;
    }
  });
  Object.defineProperty(_, 'posicaoJogador2', {
    get: function () {
      return posicaoJogador2;
    },
    set: function (value) {
      posicaoJogador2 = value;
    }
  });
  Object.defineProperty(_, 'pontuacaoJogador1', {
    get: function () {
      return pontuacaoJogador1;
    },
    set: function (value) {
      pontuacaoJogador1 = value;
    }
  });
  Object.defineProperty(_, 'pontuacaoJogador2', {
    get: function () {
      return pontuacaoJogador2;
    },
    set: function (value) {
      pontuacaoJogador2 = value;
    }
  });
  Object.defineProperty(_, 'larguraCampo', {
    get: function () {
      return larguraCampo;
    }
  });
  Object.defineProperty(_, 'alturaCampo', {
    get: function () {
      return alturaCampo;
    }
  });
  Object.defineProperty(_, 'espessuraRede', {
    get: function () {
      return espessuraRede;
    }
  });
  Object.defineProperty(_, 'espessuraRaquete', {
    get: function () {
      return espessuraRaquete;
    }
  });
  Object.defineProperty(_, 'alturaRaquete', {
    get: function () {
      return alturaRaquete;
    }
  });
  Object.defineProperty(_, 'efeitoRaquete', {
    get: function () {
      return efeitoRaquete;
    }
  });
  Object.defineProperty(_, 'velocidadeJogador2', {
    get: function () {
      return velocidadeJogador2;
    }
  });
  Object.defineProperty(_, 'diametroBola', {
    get: function () {
      return diametroBola;
    }
  });
  _.initalizeCanvas = initalizeCanvas;
  _.principal = principal;
  _.calcular = calcular;
  _.continuar = continuar;
  jogadorNome = window.prompt('Qual \xE9 o seu nome?', '');
  posicaoBolaX = 10.0;
  posicaoBolaY = 10.0;
  velocidadeBolaPosicaoX = 7.0;
  velocidadeBolaPosicaoY = 7.0;
  posicaoJogador1 = 40.0;
  posicaoJogador2 = 40.0;
  pontuacaoJogador1 = 0.0;
  pontuacaoJogador2 = 0.0;
  larguraCampo = 600.0;
  alturaCampo = 500.0;
  espessuraRede = 5.0;
  espessuraRaquete = 11.0;
  alturaRaquete = 100.0;
  efeitoRaquete = 0.3;
  velocidadeJogador2 = 3.0;
  diametroBola = 10.0;
  main();
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin));
