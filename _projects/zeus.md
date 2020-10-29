---
layout: page
title: ZEUS
description: a DJ algorithm that determines optimal playlist ordering
img: /assets/img/projects/zeus.jpg
github: https://github.com/lucasvarela/zeus
importance: 3
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/zeus.jpg' | relative_url }}" alt="" title="dj booth"/>
    </div>
</div>
<div class="caption">
    <a href="https://as.com/meristation/2017/04/24/betech/1493058847_818897.html">Image credits</a>
</div>

As a music lover and playlist creator I have found a very strong struggle in the ordering of songs in a musical queue. I believe random is not enough. There is nothing like a listening where each song makes a smooth transition to the next one. 

The goal of this ongoing project is to start with a set of songs and determing the optimal ordering that maximizes the listening experience. The idea is to find programatic ways to quantify if a song's "mood" will clash or not with any other. After having this matrix that correlates 1-on-1 each pair, we can test the final order. 