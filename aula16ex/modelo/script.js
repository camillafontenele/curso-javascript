let valores = []

function adicionar () {
    let fnum = document.getElementById ('fnum')
    let n = Number(fnum.value)
    
    if (n >= 1 && n <= 100) {
        if (valores.includes(n)){
            alert('Número já adicionado! Não é permitido repetir.')
        } else {
            valores.push(n)
        atualizarLista()
        }
        fnum.value = ''
        fnum.focus()
    } else {
        alert('Número Inválido! Digite um número entre 1 e 100.')
    }
}

function atualizarLista (){
    let lista = document.getElementById('flista')
    lista.innerHTML = ''

    for (let i = 0; i<valores.length; i++) {
        let item = document.createElement('div')
        item.textContent = `Valor ${valores[i]} adicionado.`
        lista.appendChild(item)
    }
}

function finalizar() {
    if (valores.length === 0){
        alert('Adicione valores antes de finalizar!')
        return
    }
    let res = document.getElementById('res')
    let total = valores.length
    let maior = Math.max(...valores)
    let menor = Math.min(...valores)
    let soma = valores.reduce((acc, val) => acc + val, 0)
    let media = soma / total

    
    res.innerHTML = `<p>Ao todo, temos ${total} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
}