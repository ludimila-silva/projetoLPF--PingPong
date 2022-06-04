# Jogo PingPong
Projeto de Aplicação Web de um jogo de PingPong usando Ktor

Os arquivos e pastas deste projeto:

* __servidor.kt__: Código que executa o servidor Ktor
* __project__: Diretório de conteúdo estático.
* __project/scripts/main.kt__: Exemplo de código que roda no navagador (FrontEnd)
* __project/main.html__: Exemplo de página HTML que carrega um programa em JavaScript.
* __project/scripts/main.js__: Código de main.kt compilado para Javascript

O projeto utiliza a linha de comandopara executar tais comandos.
Para compilar o projeto utilize os seguintes comandos:

Compila o servidor:
```
kotlinc -cp ktor.jar:. servidor.kt
```


Executa o servidor Web:
```
kotlin -cp ktor.jar:. ServidorKt
```

Para acessar o servidor, vá para:
```
localhost:1318
```

Observações:
1) Caso utilize o windows deverá colocar "ktor.jar" no lugar de ktor.jar
2) Importar o arquivo "jar" pode gerar um warning de conflito de versões. Este warning pode ser ignorado.
