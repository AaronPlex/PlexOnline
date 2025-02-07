---
layout: default
title: Poetry
---

<nav>
    <a href="index.md">Home</a> |
    <a href="publications.html">Publications</a> |
    <a href="poetry.md">Poetry</a> |
    <a href="software.html">Software</a> |
    <a href="videos.md">Videos</a>
</nav>

# My Poetry Collection

Click on a title to read the poem.

<!-- Poem 1 -->
<h3 onclick="togglePoem('poem1')" style="cursor: pointer; color: blue;">📖 Cold evening</h3>
<div id="poem1" style="display: none;">
    <p>
        Cuatro veranos duró el paraíso tropical.<br>
        Venías a verme siempre y yo pensaba en ti todos los días.<br>     
    </p>

    </p>
        Recuerda príncipe, dijo:<br>
        Tus labios rojos carmesí se derriten como bon bon bum en mi boca.<br>
        Tu piel sabe como miel de abeja a mi paladar.<br>
        El mundo se vuelve extraordinario a tu lado.<br>
    </p>

    </p>
        Cinco veranos han sido infiernos pesadísimos.<br>
        1769 noches crueles sin detenerse...<br>
        Te extraño un poco más con cada día que pasa.<br>
        Extraño a morir los finos destellos de tus ojos.<br>
        Se dice que ahora el príncipe llora un río por ti.<br>
        Como duele no ver tus ojitos caramelo nunca más.<br>
        Your eyes are the cutest thing I have ever seen.<br>
        La incertidumbre de no poder verte de nuevo mutila mi alma.<br>   
    </p>

    </p>
        Al cerrar mis ojos, el eco de tu voz en mi memoria fluye como platino líquido.<br>
        Desearía ser prisionero del pasado para ver tu rostro por la eternidad.<br>
        Mas, hoy, mi carcel es el presente, aquí y ahora.<br>
        El futuro viene constante sin detenerse, sin darse cuenta que ya no estás aquí conmigo.<br>
        Tan cruel es la distancia inquebrantable y<br>
        la frescura del aire es sin sabor.<br>
    </p>

    </p>
        El corazón siempre ganó frente a la mente.<br>
        Y cuan minúsculo es el ser frente al universo infinito.<br>
        Pero pido a Dios Altísimo y amoroso cuide de ti a dondequiera que vayas.<br>
        Ruego para que su escudo de paz proteja al principito que vino a verme sin conocerme tanto y vio una estrella en mí.<br>
    </p>

    </p>
        1 de noviembre 2024
    </p>
</div>

<!-- Poem 2 -->
<h3 onclick="togglePoem('poem2')" style="cursor: pointer; color: blue;">📖 Echoes of Time</h3>
<div id="poem2" style="display: none;">
    <p>
        Footsteps fade along the shore,<br>
        Time moves on forevermore.<br>
        Memories linger in the tide,<br>
        A story written, never denied.
    </p>
</div>

<!-- Poem 3 -->
<h3 onclick="togglePoem('poem3')" style="cursor: pointer; color: blue;">📖 Whispers of the Wind</h3>
<div id="poem3" style="display: none;">
    <p>
        The wind hums softly through the trees,<br>
        A secret voice in gentle breeze.<br>
        It sings to those who pause and hear,<br>
        A melody so pure, sincere.
    </p>
</div>

<script>
    function togglePoem(poemId) {
        var poem = document.getElementById(poemId);
        if (poem.style.display === "none") {
            poem.style.display = "block";
        } else {
            poem.style.display = "none";
        }
    }
</script>
