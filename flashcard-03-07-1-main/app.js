function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo__pergunta">
                <p>Qual a capital do Reino Unido ?</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>A capital do Reino Unido é Londres</p>
            </div>
        </div>
    `
    `<article class="cartao">
    <div class="cartao__conteudo">
        <h3>Matemática</h3>
        <div class="cartao__conteudo__pergunta">
            <p>Qual a fórmula do teorema de pitágoras ?</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>a² = b² + c²</p>
        </div>
    </div>
</article>
<article class="cartao">
    <div class="cartao__conteudo">
        <h3>História</h3>
        <div class="cartao__conteudo__pergunta">
            <p>O que é o capitalismo ?</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>O capitalismo é um sistema econômico baseado na propriedade privada, meios de produção, livre concorrência e busca do lucro.</p>
        </div>
    </div>
</article>
<article class="cartao">
    <div class="cartao__conteudo">
        <h3>Futebol</h3>
        <div class="cartao__conteudo__pergunta">
            <p>O Brasil tem quantas copas do mundo ?</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>O Brasil tem 5 copas do mundo.</p>
        </div>
    </div>
</article>
<article class="cartao">
    <div class="cartao__conteudo">
        <h3>Programação</h3>
        <div class="cartao__conteudo__pergunta">
            <p>O que é o JavaScript ?</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>JavaScript é uma linguagem de programação.</p>
        </div>
    </div>
</article>
<article class="cartao">
    <div class="cartao__conteudo">
        <h3>Futebol 2.0</h3>
        <div class="cartao__conteudo__pergunta">
            <p>Qual o maior time do Sul ?</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>O maior time do Sul é o Grêmio.</p>
        </div>
    </div>
</article>`
    container.appendChild(cartao)

}