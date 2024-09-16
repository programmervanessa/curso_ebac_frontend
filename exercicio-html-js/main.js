const form = document.getElementById('form-validador');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    comparaValores(); // adicionado após correção    
})

console.log(form);

function comparaValores () {
    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    var NumA = Number(campoA.value); //adicionado após correção
    var NumB = Number(campoB.value); //adicionado após correção

    const mensagemSucesso = `O número ${campoB.value} é maior que o número ${campoA.value}`;
    
    if (NumA < NumB) {
        alert(mensagemSucesso); //alterado após correção
        document.getElementById('campo-a').value=''; //adicionado após correção
        document.getElementById('campo-b').value=''; //adicionado após correção
    }else{
        alert("O valor do segundo campo precisa ser maior que o valor do primeiro campo"); //alterado após correção
    }            
}



/* essa função não está funcionando, de fato estou com 
dificuldades, não sei se é com a lógica ou na construção 
da sintaxe. A falta de experiência me deixa perdida. A 
ideia nesta função foi pegar os valores digitados pelo 
usuário nos "campo-a" e "campo-b" e depois comparar qual
deles é maior. Sendo o "Campo-a" maior ou igual, o alerta
deveria ser exibido para avisar ao usuário que o valor 
"do segundo campo" deve ser maior que o primeiro campo.
*/



