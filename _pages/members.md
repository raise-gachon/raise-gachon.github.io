---
layout: page
title: Team
permalink: /team/
nav: true
nav_order: 3
---

<h2 class="category">Current Members</h2>
<div class="container">
  <div class="row row-cols-2 row-cols-md-3"> {% assign current_members = site.data.people | where: "status", "current" %}
    {% for member in current_members %}
    <div class="col mb-4">
      <div class="card h-100 z-depth-1 text-center border-0">
        <div class="card-body">
          <div class="item-img mb-3">
            <img src="{{ member.image | relative_url }}" 
                 class="img-fluid" 
                 style="width: 150px; height: 200px; object-fit: cover;">
          </div>
          <h6 class="font-weight-bold">{{ member.name }}</h6>
          <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 5px;">{{ member.role }}</p>
          <p style="font-size: 0.75rem;">{{ member.description }}</p>
          
          {% if member.website %}
            <div class="member-website mt-2">
              <a href="{{ member.website }}" target="_blank" class="website-link">
                [Personal website]
              </a>
            </div>
          {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<!-- <hr class="mt-5 mb-5"> -->

<!-- <h2 class="category">Alumni</h2>
<div class="container">
  <div class="row row-cols-2 row-cols-md-5"> {% assign alumni_members = site.data.people | where: "status", "alumni" %}
    {% for member in alumni_members %}
    <div class="col mb-4">
      <div class="text-center">
        <img src="{{ member.image | relative_url }}" 
             class="img-fluid rounded-circle grayscale" 
             style="width: 80px; height: 80px; object-fit: cover; opacity: 0.7;">
        <div class="mt-2">
          <strong style="font-size: 0.9rem;">{{ member.name }}</strong><br>
          <span class="text-muted" style="font-size: 0.75rem;">{{ member.role }}</span>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div> -->