---
layout: base-layout.njk
pagination:
  data: collections.post
  size: 5
  reverse: true
  alias: posts
---

<img width="200" height="150" src="assets/self-image.jpg" style="margin-bottom: 1rem;border-radius:3px" />
  <p style="margin-bottom:1.4rem">Hi, I'm Kheoh Yee Wei, indie-hacker from Malaysia. I build a collaboration tool called <a href="https://www.sametable.app">Sametable</a>.</p>
<ul style="margin-bottom: 4rem">
  <li><a href="mailto:oldjoy@protonmail.com">Email</a> &mdash; say hi</li>
  <li><a href="https://www.flickr.com/people/twiart">Flickr</a> &mdash; show off</li>
  <li><a href="https://open.spotify.com/user/kheohyeewei">Spotify</a> &mdash; feelin' it</li>
  <li><a href="https://kheohyeewei.tumblr.com/">Tumblr</a> &mdash; anxiety</li>
  <li><a download href="assets/cv.pdf">Resume</a> &mdash; very pro</li>
</ul>
<div class="notes">
  <h1>Notes</h1>
  <ul>
  {% for post in posts %}
  <li>
      <a href="{{ post.url | url }}">
      {{ post.data.title }}
      </a>
    <small>
    <time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>
    </small>
  </li>
  {% endfor %}
</ul>
</div>
