$(document).ready(function () {

    document.querySelector("#nameId").addEventListener('keyup', ()=>{
        mostrarDados()
    })

    document.querySelector("#emailId").addEventListener('keyup', ()=>{
        mostrarDados()
    })

    document.querySelector("#tellId").addEventListener('keyup', ()=>{
        mostrarDados()
    })

    document.querySelector("#subjectId").addEventListener('keyup', ()=>{
        mostrarDados()
    })

    document.querySelector("#msgId").addEventListener('keyup', ()=>{
        mostrarDados()
    })

    document.querySelector(".form.infos").addEventListener('submit', function(event){
        event.preventDefault();
        salvarSession()
    })
    
});

function maskForm() {
    $('.ui.form')
    .form({
        fields: {
            nameId: {
                identifier: 'nameId',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Por favor digite seu nome'
                    }
                ]
            },
            tellId: {
                identifier: 'tellId',
                rules: [
                    {
                        type: 'minLength[9]',
                        prompt: 'Digite um telefone valido'
                    }
                ]
            },
            emailId: {
                identifier: 'emailId',
                rules: [
                    {
                        type: 'email',
                        prompt: 'Por favor digite um endereco de email valido'
                    }
                ]
            },
            subjectId: {
                identifier: 'subjectId',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Por favor digite o assunto'
                    }
                ]
            },
            msgId: {
                identifier: 'msgId',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'A mensagem esta vazia'
                    }
                ]
            },
        }
    })
    ;
}

//Adicionando no Session Storage
function salvarSession(){
    let local;

    local = document.getElementById("nameId").value;
    sessionStorage.setItem("Nome", local);

    local = document.getElementById("emailId").value;
    sessionStorage.setItem("e-mail", local);

    local = document.getElementById("tellId").value;
    sessionStorage.setItem("Telefone", local); 

    local = document.getElementById("subjectId").value;
    sessionStorage.setItem("Assunto", local);

    local = document.getElementById("msgId").value;
    sessionStorage.setItem("Mensagem", local);

    alert("Adicionado ao SessionStorage!");
}

//Mostrando valores dos campos preenchidos
function mostrarDados(){
    if($('#nameId')){
        var nome = document.getElementById('nameId').value;
        document.getElementById('nomeDigitado').innerHTML = nome;
    }

    if($('#emailId')){
        var email = document.getElementById('emailId').value;
        document.getElementById('emailDigitado').innerHTML = email;
    }
    
    if($('#tellId')){
        var fone = document.getElementById('tellId').value;
        document.getElementById('foneDigitado').innerHTML = fone;
    }

    if($('#subjectId')){
        var assunto = document.getElementById('subjectId').value;
        document.getElementById('assuntoDigitado').innerHTML = assunto;
    }

    if($('#msgId')){
        var msg = document.getElementById('msgId').value;
        document.getElementById('msgDigitado').innerHTML = msg;  
    }
} 

function iniciaLocal(){
    //Recuperando valores da Session Storage
    var GetSessionNome = sessionStorage.getItem("Nome");
    var GetSessionEmail = sessionStorage.getItem("e-mail");
    var GetSessionTel = sessionStorage.getItem("Telefone");
    var GetSessionAssunto = sessionStorage.getItem("Assunto");
    var GetSessionMensagem = sessionStorage.getItem("Mensagem"); 
}

