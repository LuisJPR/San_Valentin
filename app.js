//VARIABLES
const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');
const gifContenedor = document.getElementById('gifContenedor');
const tristeGifContenedor = document.getElementById('tristeGifContenedor');
const tristeGifContenedor2 = document.getElementById('tristeGifContenedor2');
const tristeGifContenedor3 = document.getElementById('tristeGifContenedor3');
const felizGifContenedor = document.getElementById('felizGifContenedor');
const felizGifContenedor2 = document.getElementById('felizGifContenedor2');
const felizGifContenedor3 = document.getElementById('felizGifContenedor3');
const felizGifContenedor4 = document.getElementById('felizGifContenedor4');
const pregunta = document.getElementById('pregunta');
const mensajeContenedor = document.getElementById('mensajeContenedor');

//Contador para el boton 'No'
let noBotonClickConteo = 0;
//Estado actual del boton 'No'
let noBotonEstado = 0;

//Mostrar el gif inicial
gifContenedor.style.display = 'block';

//Funcion que se ejecura cuando hacemos click en el boton 'Si'
siBtn.addEventListener('click', function() {
    //Ocultar el gif triste y mostrar el gif feliz
    tristeGifContenedor.style.display = 'none';
    tristeGifContenedor2.style.display = 'none';
    tristeGifContenedor3.style.display = 'none';
    gifContenedor.style.display = 'none';
    felizGifContenedor.style.display = 'block';

    //Ocultamos los botones de 'Si' y 'No'
    pregunta.style.display = 'none';
    siBtn.style.display = 'none';
    noBtn.style.display = 'none';

    //Mostramos un mensaje especifico
    mensajeContenedor.style.display = 'block';
    mensajeContenedor.style.fontFamily = 'Great Vibes'
    mensajeContenedor.innerHTML = 'Sabia que dirias que sí ❤️!!';

    //Mostrar otros gif despues de 3 segundos
    setTimeout(function() {
        felizGifContenedor.style.display = 'none';
        felizGifContenedor2.style.display = 'block';
    }, 1000);

    setTimeout(function() {
        felizGifContenedor2.style.display = 'none';
        felizGifContenedor3.style.display = 'block';
    }, 2000);

    setTimeout(function() {
        felizGifContenedor3.style.display = 'none';
        felizGifContenedor4.style.display = 'block';
    }, 3000);

})

//Funcion que se ejecura cuando hacemos click en el boton 'No'
noBtn.addEventListener('click', function() {
    switch(noBotonEstado) {
        case 0:
            //Primera vez haciendo click en 'No'
            felizGifContenedor.style.display = 'none';
            gifContenedor.style.display = 'none';
            tristeGifContenedor.style.display = 'block';

            //Modiicamos el boton 'No'
            noBtn.innerHTML = '¡Oh no! ¿Estás segura?';

            siBtn.style.fontSize = '2rem';
            siBtn.style.padding = '2rem 0';

            noBotonClickConteo++;
            noBotonEstado++;
            break;
        case 1:
            //Segunda vez haciendo click en 'No'
            noBtn.innerHTML = '¡¿Realmente estas segura?!';
            tristeGifContenedor.style.display = 'none';
            tristeGifContenedor3.style.display = 'block';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '2.5rem';
            siBtn.style.padding = '2.5rem 0';

            noBotonEstado++;
            break;
        case 2:
            //Tercera vez haciendo click en 'No'
            noBtn.innerHTML = 'Estás segura de verdad, ¿eh?';
            tristeGifContenedor.style.display = 'none';
            tristeGifContenedor3.style.display = 'none';
            tristeGifContenedor2.style.display = 'block';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '3rem';
            siBtn.style.padding = '3rem 0';

            noBotonEstado++;
            break;
        case 3:
            noBtn.innerHTML = '¿Eres positva?';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '3.5rem';
            siBtn.style.padding = '3.5rem 0';

            noBotonEstado++;
            b|reak;
        case 4:
            noBtn.innerHTML = 'Di que si por favor?';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '4rem';
            siBtn.style.padding = '4rem 0';

            noBotonEstado++;
            break;
        case 5:
            noBtn.innerHTML = 'Solo piensa en ello';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '4.5rem';
            siBtn.style.padding = '4.5rem 0';

            noBotonEstado++;
            break;
        case 6:
            noBtn.innerHTML = 'Si, dices que no estaré muy triste';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '5rem';
            siBtn.style.padding = '5rem 0';

            noBotonEstado++;
            break;
        case 7:
            noBtn.innerHTML = 'Estaré muy triste';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '5.5rem';
            siBtn.style.padding = '5.5rem 0';

            noBotonEstado++;
            break;
        case 8:
            noBtn.innerHTML = 'Estaré muy muy muy triste';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '6rem';
            siBtn.style.padding = '6rem 0';

            noBotonEstado++;
            break;
        case 9:
            noBtn.innerHTML = 'Estaré muy muy muy muy triste';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '6.5rem';
            siBtn.style.padding = '6.5rem 0';

            noBotonEstado++;
            break;
        case 10:
            noBtn.innerHTML = 'Vale, ya dejaré de preguntar...';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '7rem';
            siBtn.style.padding = '7rem 7rem';

            noBotonEstado++;
            break;
        case 11:
            noBtn.innerHTML = 'Es broma, POR FAVOR DI SÍ';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '7.5rem';
            siBtn.style.padding = '7.5rem 8rem';

            noBotonEstado++;
            break;
        case 12:
            noBtn.innerHTML = 'Estaré muy muy muy muy muy triste';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '8rem';
            siBtn.style.padding = '8rem 10rem';

            noBotonEstado++;
            break;
        case 13:
            noBtn.innerHTML = 'Estás rompiendo mi corazón 💔';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '8.5rem';
            siBtn.style.padding = '8.5rem 12rem';

            noBotonEstado++;
            break;
        case 14:
            noBtn.innerHTML = 'NO... ya di que si';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '9rem';
            siBtn.style.padding = '9rem 14rem';

            noBotonEstado++;
            break;
        case 15:
            noBtn.innerHTML = 'Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii';

            //Hacemos que el boton 'Si' crezca
            siBtn.style.fontSize = '9.5rem';
            siBtn.style.padding = '9.5rem 16rem';

            noBotonEstado++;
            break;
        case 16:
            noBtn.innerHTML = 'Por favooooooor';

            tristeGifContenedor.style.display = 'none';
            tristeGifContenedor2.style.display = 'none';
            tristeGifContenedor3.style.display = 'none';

            gifContenedor.style.display = 'block';
            felizGifContenedor.style.display = 'none';

            //Volvemos al estado 0
            noBotonEstado = 0;
            break;
        default:
            break;
    }
})