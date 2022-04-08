// VARIABLES
let titulo = document.getElementById("titulo");
let boton = document.getElementById("boton");
let botonVerde = document.getElementById("verde");
let botonAzul = document.getElementById("azul");
let modal = document.getElementById('modalExit');
let $modal = document.getElementById('modalClick');
let modalExit = document.getElementById('modal-exit');
let modalNo = document.getElementById('modal-no');
let btx = document.querySelectorAll('.btx');
let btx1 = document.querySelectorAll('.btx1');
let btx2 = document.querySelectorAll('.btx2');
let btxall = [...btx, ...btx1, ...btx2];
let iconsDoor = document.getElementById('door');


//FRACES
let fraces = [
    '¿Qué te dije?🤨',
    'Dije que no lo presiones 😒',
    '¡QUE NO LO PRESIONES! 😠',
    '😤',
    'Me cansaste...🤬',
    '¡Ja! Te lo hice invisible, ¿qué vas hacer ahora?😏',
    'Así son 😒',
    '¿Listo?',
    '¿Terminaste?😑',
    '¿Por qué seguís presionando el botón?😐',
    'Ehmmm... ¿Te gustaría presionar más botones?😏',
    'Acá tenés 🙂',
    '¡Hora del 2do round!🙃',
    '¿Cuál de todos es? 🤔',
    'Siempre fue el primero 😆',
    'Jajajaja',
    '¡Y vos buscando cuál era!🤣',
    'Qué fácil de engañar que sos 😂 ',
    '¿Podés dejar de presionar el bendito botón?😭',
    'Tengo una idea 🤔',
    'Juguemos a lo siguiente 😀',
    'Quien aguante más tiempo sin presionar el botón rojo, ¡gana!😄',
    '¡PERDISTE! 🤓',
    '25 veces apretando un botón... ¿No te cansás?😐',
    'Mirá: te lo cambié por este cerdito 🥰',
    '¡¡¡NOOOOOOOOOO!!! 😱',
    '¡¡¡Mataste a JORGE!!!😭',
    '¡Te voy a denunciar!🤬',
    'Ya mismo estoy llamando a la policía 🚓',
    'Bueno, si dejás de presionar el botón no llamo 👀',
    'Ah, no te importa nada ¿no?🥺',
    'Hay algo que no te dije... Hay un premio por jugar este juego 🥳',
    'Pero no te puedo decir qué es 🤐',
    '¿O sí...?😏',
    'No, mejor no te lo digo 🤭',
    '¡Ya tengo tu atención!🤓',
    'Bueno, igual pienso quedarme con el premio 🤑',
    'Muajajaja',
    'jajaja',
    'jajajajajajajajajaja',
    'jojojo',
    'jijiji',
    '🤡',
    '¡Ya wey! 😶‍🌫️',
    'Ya no es gracioso 😑',
    'En serio 😶',
    'Te voy a dar una opción',
    'Podés irte si querés🙃',
    'Solo tenés que hacer clic en la puerta de salida 😊',
    '¿¿¿???',
    '¡Perdiste tu oportunidad de salir!😕',
    'Ahora el botón se moverá 🤯',
    '¡Ya!✨',
    'Muajaja 😈',
    'Dale... ¡Apretalo!🥱',
    'Botón ¡Quieto!✨',
    'Gracias 😌',
    'No sé si notaste que tengo mucho poder 😎',
    'Elegí un color 🌈',
    '¡Cualquier color!🙃',
    '¿Verde? Listo 🟩',
    'Presioná el boton verde 🙂',
    'El botón verde dije 😑',
    'Ok, el azul 🟦',
    'Ni siquiera podes cumplir una tarea 😤',
    '¿Que hacés si te digo que la próxima vez que presiones el botón, el mundo explotará?😵',
    'Podrías habernos matado a todos 😒',
    'Dos veces 😑',
    'Te digo que el planeta va a explotar ¿y solo te importa presionar el bendito botón? 🤨',
    '¡Te juro que esta vez sí es cierto! 🥺',
    '¡¡¡BOOOOM!!!',
    'Eso no fue muy inteligente de tu parte 😓',
    '¿Qué hiciste? Eliminaste a la humanidad completa 😭',
    'Menos a mí. Yo solo soy un código 🤖',
    '¿Te dije que me caés mal?😡',
    'Bastante mal 💢',
    'Te doy plata si dejás de presionar 🤔',
    '¿1 millón de dólares? 💵',
    'Lo único que hiciste fue apretar un botón. 90 veces 🙄',
    'Vos, ahora: 🤡',
    '¡Pará! ¿Qué es eso? 😨',
    '¡Atrás tuyo!😱',
    '¡Ups! Ahora no sabes donde escondí el botón 😂',
    '¡Quedate escondido, botón!😑',
    'Listo, me quedó claro que te encanta presionar el botón 😠',
    'TOMÁ, ES TODO TUYO 👺',
    'Por si no sabías, ya presionaste el botón 98 veces 🤒',
    '99...🤒',
    'Cuando llegues a 100 se termina todo 😓',
    '99,2 👀',
    '99,3 👀',
    'Ya entendí que no querés jugar más conmigo 😭',
    '99,5 👀',
    '99,6 👀',
    '¿Así que esto es el final? 😟',
    '99,8 ¡Última oportunidad!🙏',
    'Fue un placer jugar con vos 😞',
    '⚰️',
];



// ESCUCHAR SI NO HICIERON CLICK

let clicks = 0;
document.addEventListener('click', () => {
    clicks++
})
setInterval(() => {
    if (clicks === 0) {
        $modal.classList.add('modal--show');
        document.getElementById('modaclickboton').onclick = function() {
            $modal.classList.remove('modal--show');
        }
        clicks = 1;
    } else {
        clicks = 0;
    }
}, 500000);

//CAMBIAR EL TITULO Y ANIMACION FADEOUT

let pos = 0;

function next() {
    pos++;
    animarTitulo();
};

function animarTitulo() {
    titulo.style.opacity = '0';
    setTimeout(() => {
        let nextFrase = fraces[pos - 1];

        //eliminar UNDEFINED, NULL , 0
        if (nextFrase == fraces[fraces.length]) {
            lastFraces = fraces[fraces.length - 1];
            nextFrase = lastFraces;
        };
        titulo.innerHTML = nextFrase;
        titulo.style.opacity = '1';
        comparar(nextFrase);
    }, 200);
}

//CAMBIAR EL TITULO AL HACER CLICK

boton.onclick = function() {
    next();
}

//VALIDAR EL TITULO Y EJECUTAR UN ACCION SEGUN SU VALOR

function comparar(texto) {
    switch (texto) {
        case '¡Ja! Te lo hice invisible, ¿qué vas hacer ahora?😏':
            boton.style.transition = "all 0.5s";
            boton.style.opacity = "0";
            break;

        case 'Acá tenés 🙂':
            [].forEach.call(btx, (i) => {
                i.style.display = 'inline';
            });
            break;

        case '¡Hora del 2do round!🙃':
            [].forEach.call(btx1, (i) => {
                i.style.display = 'inline';
            });
            break;

        case '¿Cuál de todos es? 🤔':
            [].forEach.call(btx2, (i) => {
                i.style.display = 'inline';
            });
            break;

        case 'Siempre fue el primero 😆':
            btxall.forEach((indice) => {
                indice.style.display = 'none';
            });
            break;

        case '¡PERDISTE! 🤓':
            boton.innerHTML = "Perdedor";
            break;

        case 'Mirá: te lo cambié por este cerdito 🥰':
            boton.className += " btnimg";
            break;

        case '¡¡¡NOOOOOOOOOO!!! 😱':
            boton.classList.remove("btnimg");
            boton.className += " btnimg2";
            break;

        case 'Bueno, si dejás de presionar el botón no llamo 👀':
            boton.classList.remove("btnimg", 'btnimg2');
            break;

        case 'Solo tenés que hacer clic en la puerta de salida 😊':
            iconsDoor.classList.toggle("active");
            iconsDoor.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('modal--show');
                iconsDoor.style.display = "none";
            });



            modalNo.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.remove('modal--show');
                next();

            });

            modalExit.addEventListener('click', (e) => {
                e.preventDefault();
                // Cerrar modal
                modal.classList.remove('modal--show');
                //Eliminar Titulo y Boton
                titulo.innerHTML = '😄';
                boton.style.display = "none";
                // Agregar clase y style
                document.getElementById("typing").className = "typing";
                document.getElementById("typing").style.display = "inline";
                typing();

            });
            break;

        case '¿¿¿???':
            iconsDoor.style.display = "none";
            break;

        case 'Muajaja 😈':
            boton.className += " btnanim";
            break;

        case 'Dale... ¡Apretalo!🥱':
            boton.className += " btnanim2";
            break;

        case 'Botón ¡Quieto!✨':
            boton.style.transition = "all 1s";
            boton.classList.remove("btnanim", "btnanim2");
            break;

        case 'Presioná el boton verde 🙂':
            botonVerde.style.display = "inline";

            botonVerde.addEventListener("mouseover", () => {
                randNum = Math.round(Math.random() * 300);
                randNum2 = Math.round(Math.random() * 300);
                botonVerde.style.marginTop = randNum + "px";
                botonVerde.style.left = randNum2 + "px";
            });
            break;

        case 'Ok, el azul 🟦':
            botonAzul.style.display = "inline";
            botonVerde.style.display = "none";

            function moveBtnAzul() {
                randNum = Math.round(Math.random() * 300);
                randNum2 = Math.round(Math.random() * 300);
                botonAzul.style.marginTop = randNum + "px";
                botonAzul.style.right = randNum2 + "px";
            };
            botonAzul.addEventListener("click", moveBtnAzul);
            break;

        case 'Ni siquiera podes cumplir una tarea 😤':
            botonAzul.style.display = "none";
            break;

        case '¡Atrás tuyo!😱':
        case '¡Ups! Ahora no sabes donde escondí el botón 😂':
            boton.style.visibility = "hidden";
            setTimeout(() => { boton.click() }, 5000);
            break;

        case '¡Quedate escondido, botón!😑':
            boton.style.visibility = "visible";
            boton.style.display = "inline";
            boton.className += " btnshake";
            break;

        case 'Listo, me quedó claro que te encanta presionar el botón 😠':
            boton.classList.remove("btnshake");
            break;

        case 'TOMÁ, ES TODO TUYO 👺':
            boton.className += " btnmas";
            break;

        case 'Por si no sabías, ya presionaste el botón 98 veces 🤒':
            boton.classList.remove("btnmas");
            break;

        case '⚰️':
            document.getElementById("typing").className = "typing";
            document.getElementById("typing").style.display = "inline";
            typing()
            boton.style.display = "none";
            break;

        default:
            boton.style.opacity = "1";
            boton.style.transition = "all 0s";
            boton.innerHTML = "Boton";
            break;


    }
}


// TYPING.JS

function typing() {
    // Crear Typed
    let typed = new Typed('.typing', {
        strings: ['',
            'Creado por',
            'Alejandro Martinez',
            'Gracias por jugar',
            'al Boton Rojo 🔴',
            'Este es mi primer proyecto',
            'Abajo estan mis redes',
            '❤'
        ],
        typeSpeed: 60,
        backSpeed: 40,

        loop: false
    });
};