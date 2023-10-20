function alert1() {
    alert("No momento você só pode ser um ouvinte. Após o cadastro solicite ao organizador um novo cargo");
}

function alert2() {
    alert("Dados enviados com sucesso!");
}

function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function (e) {
            document.getElementById("preview").src = e.target.result;
        };
        file.readAsDataURL(this.files[0]);
    }
}
document.getElementById("img-input").addEventListener("change", readImage, false);

function ValidarForm() {
    function validarArquivo(arquivo) {
        const imageDimension = MediaDimensions.getImageDimensionsFromFile('#img-input');
        if (imageDimension.width > 50 || imageDimension.height > 50) {
            alert("A imagem é grande demais. Tente outra vez!       Obs: O ideal é uma foto 50X50.")
            return false;
        } else if (imageDimension.width < 50 || imageDimension.height < 50) {
            alert("A imagem é pequena demais. Tente outra vez!       Obs: O ideal é uma foto 50X50.")
            return false;
        } else {
            return true;
        }
    }

    var password = document.getElementById("senha"), confirm_password = document.getElementById("confirm_senha");

    function validatePassword() {
        if (password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Senhas diferentes!");
            return false;
        } else {
            confirm_password.setCustomValidity('');
            return true;
        }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;

    if (validarArquivo() == true && validatePassword() == true) {
        alert2();
    }
}
const input = document.querySelector('#senha');
const inputconf = document.querySelector('#confirm_senha');
const button = document.querySelector("#togglePass");
button.addEventListener('click', togglePass);

function togglePass() {
    if (input.type == "password" && inputconf.type == "password") {
        input.type = "text";
        inputconf.type = "text";
        button.textContent = "Ocultar Senha";
    } else {
        input.type = "password";
        inputconf.type = "password";
        button.textContent = "Mostrar Senha";
    }
}
