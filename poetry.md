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
<h3 onclick="togglePoem('poem1')" style="cursor: pointer; color: blue;">📖 The Beauty of Nature</h3>
<div id="poem1" style="display: none;">
    <p>
        The sun sets over golden fields,<br>
        A whispering breeze, a warmth it yields.<br>
        The stars appear, a tranquil sight,<br>
        Embracing all in peaceful night.
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
