const yoKaiList = [
    { name: "Ogamitaoshi", img: "Ogamitaoshi.png" },
    { name: "Capitaine Dodo", aliases: ["Capitaine Dodo", "Captain Dodo"], img: "Capitan_Dodo.png" },
    { name: "Chousensha", img: "Chosensha.png" },
    { name: "Monomaneking", img: "Monomaneking.png" },
    { name: "Morigami Rex", img: "Morigami_Rex.png" },
    { name: "Wibblejiro", aliases: ["Wibblejiro", "Wobblejiro", "Punijiro"], img: "Wibblejiro.png" },
    { name: "Shourinji", img: "Shourinji.png" },
    { name: "Raise Girl", img: "Raise_Girl.png" },
    { name: "Katenshi", img: "Katenshi.png" },
    { name: "Futekusaru", img: "Futekusaru.png" },
    { name: "Usapyon T", aliases: ["Usapyon T", "T-Usapyon"], img: "Usapyon_T.png" },
    { name: "Maizo Tokugawa", img: "Maizo_Tokugawa.png" },
    { name: "Al Baccino", aliases: ["Al Baccino", "Are Bacchino"], img: "Al_Baccino.png" },
    { name: "Grolos T", aliases: ["Grolos T", "Gashadokuro T"], img: "Tripasqueleto_T.png" },
    { name: "Kaneuki-hime", img: "Kaneuki-hime.png" },
    { name: "AkiraMEN", img: "AkiraMEN.png" },
    { name: "Omoutsubo", img: "Omoutsubo.png" },
    { name: "Naga Raja", img: "Naga_Raja.png" },
    { name: "Tribu Doyagari", aliases: ["Doyagari", "Doyagari-zoku"], img: "Tribu_Doyagari.png" },
    { name: "Doya Osa", img: "Doya_Osa.png" },
    { name: "Vascoda Gama", img: "Vascoda_Gama.png" },
    { name: "Shogunyan C", aliases: ["Shogunyan C", "Crystal Shogunyan"], img: "Shogunyan_Cristal.png" },
    { name: "Wobblehover", aliases: ["Wobblehover", "Wibblehover", "Punifuyu"], img: "Wobblehover.png" },
    { name: "Jibanyan T G", aliases: ["Jibanyan T G", "T-Jibanyan G"], img: "Jibanyan_T_G.png" },
    { name: "Jibanyan D", img: "Jibanyan_D.png" },
    { name: "Komasan T G", aliases: ["Komasan T G", "T-Komasan G"], img: "Komasan_T_G.png" },
    { name: "Komasan D", img: "Komasan_D.png" },
    { name: "Indiana Jaws G", aliases: ["Indiana Jaws G", "Indy Jaws G"], img: "Tibu_Jones_G.png" },
    { name: "Cindy Jaws", img: "Cindy_Jaws.png" },
    { name: "M. Spioche G", aliases: ["M Spioche G", "Mr. Scoop G"], img: "Vulcavador_G.png" },
    { name: "Zombigoût G", aliases: ["Zombigoût G", "Zom B Chopper G"], img: "Adoleszombi_G.png" },
    { name: "Nyansès II G", aliases: ["Nyansès II G", "Neko II G"], img: "Nyanses_II_G.png" },
    { name: "Yodelsen", img: "Yodelsen.png" },
    { name: "Narcis II", img: "Narciso_II.png" },
    { name: "Zappadokia", img: "Zappadokia.png" },
    { name: "Mademoaiselle", img: "Mademoaiselle.png" },
    { name: "Pierre de Rosette", aliases: ["Pierre de Rosette", "Rosetta Stone"], img: "Piedra_Rosetta.png" },
    { name: "Doescalibur", img: "Doescalibur.png" },
    { name: "Encore Dead", img: "Encore_Dead.png" },
    { name: "Armaterasu", aliases: ["Armaterasu", "Armorterasu", "Amaterasu"], img: "Armaterasu.png" },
    { name: "Dandory", img: "Dandory.png" },
    { name: "Spatto", img: "Spatto.png" },
    { name: "Tanto", img: "Tanto.png" },
    { name: "Kirene", img: "Kirene.png" },
    { name: "Toranka", img: "Toranka.png" },
    { name: "Catleen", img: "Catleen.gif" },
    { name: "Gustaf", img: "Gustaf.png" },
    { name: "Gowin", img: "Gowin.png" },
    { name: "Seirei Banbarayar", img: "Seirei_Banbarayar.png" },
    { name: "Enma", img: "Enma.png" },
    { name: "Enma Sombre", aliases: ["Enma Sombre", "Yami Enma"], img: "Enma_Oscuro.png" },
    { name: "Baron Ananta", img: "Lord_Ananta.png" },
    { name: "Enma Meiou Maka", img: "Enma_Meiou_Maka.png" },
    { name: "Enmanyan", aliases: ["Enmanyan", "Enma Neko'ou Matatabi"], img: "Enmanyan.png" },
    { name: "Enma Ryuuou Mizuchi", img: "Enma_Ryuuou_Mizuchi.png" },
    { name: "Enma Raou Tekakku", img: "Enma_Raou_Tekakku.png" },
    { name: "Lord Acala", aliases: ["Lord Acala", "Fudou Myouou"], img: "Lord_Acala.png" },
    { name: "Chi Ma Tree", img: "Chi_Ma_Tree.png" },
    { name: "BaiKING", img: "BaiKING.png" },
    { name: "Momiroir", img: "Boogiemum.png" },
    { name: "Kanibouzu", img: "Kanibouzu.png" },
    { name: "Orifalcon", img: "Orifalcon.png" },
    { name: "WaNEWdo", img: "WaNEWdo.png" },
    { name: "Dark Master", img: "Dark_Master.png" },
    { name: "Billy le Vagabond", aliases: ["Billy le Vagabond", "Sasurai no Billy"], img: "Billy_el_Errante.png" },
    { name: "Gowin", img: "Gowin_B.png" },
    { name: "Kanaendesu", img: "Kanaendesu.png" },
    { name: "Majin Banbarayar", img: "Majin_Banbarayar.png" },
    { name: "Yodelsen", img: "Yodelsen_B.png" },
    { name: "Zircondor", img: "Zircondor.png" }
];

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

function showCongratsImage() {

    // Detener temporizador
    stopTimer();

    // Obtener tiempo final mostrado
    const tiempoTotal = document.getElementById("time").textContent;

    // Sonido de victoria
    const victorySound = new Audio("congrats.mp3");
    victorySound.volume = 0.8;
    victorySound.play().catch(() => {});

    // Panel lateral
    const finalPanel = document.createElement("div");
    finalPanel.style.position = "fixed";
    finalPanel.style.top = "0";
    finalPanel.style.right = "-350px";
    finalPanel.style.width = "320px";
    finalPanel.style.height = "100%";
    finalPanel.style.backgroundColor = "#0b2a4a";
    finalPanel.style.color = "white";
    finalPanel.style.padding = "20px";
    finalPanel.style.boxSizing = "border-box";
    finalPanel.style.zIndex = "1000";
    finalPanel.style.fontFamily = "Arial, sans-serif";
    finalPanel.style.display = "flex";
    finalPanel.style.flexDirection = "column";
    finalPanel.style.transition = "right 0.6s ease";

    // Botón cerrar
    const closeBtn = document.createElement("div");
    closeBtn.textContent = "✖";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "15px";
    closeBtn.style.right = "15px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "18px";

    closeBtn.addEventListener("click", () => {
        finalPanel.style.right = "-350px";
        setTimeout(() => finalPanel.remove(), 600);
    });

    // Título
    const title = document.createElement("h2");
    title.textContent = `Bravo ! Vous avez deviné tous les Yo-kai en ${tiempoTotal}`;
    title.style.marginTop = "40px";
    title.style.marginBottom = "30px";
    title.style.fontSize = "22px";

    // Texto Twitter
    const followText = document.createElement("p");
    followText.innerHTML = `
        Si cela vous a plu, pourquoi ne pas me suivre sur Twitter ?: 
        <a href="https://x.com/salty_baconV2" target="_blank" style="color:#4fc3ff; text-decoration:none;">
        @Salty_BaconV2
        </a>
    `;
    followText.style.fontSize = "16px";
    followText.style.marginTop = "auto";

    // Montaje
    finalPanel.appendChild(closeBtn);
    finalPanel.appendChild(title);
    finalPanel.appendChild(followText);
    document.body.appendChild(finalPanel);

    // Animación de entrada
    setTimeout(() => {
        finalPanel.style.right = "0";
    }, 50);
}


// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); // Inicializa la puntuación en 0/total
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "¿Estás seguro de que quieres salir? Se perderá todo el progreso.";
    }
});
