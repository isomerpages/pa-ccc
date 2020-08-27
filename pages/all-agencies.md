---
permalink: /all-agencies/
title: All Agencies
---

<div class="list-container">
  <ul class="vertical-list">    
   {%   for agency in site.data.agencies-ad   %}
    <li class="list-item">
      <a href="/agency/{{ agency.code }}" >
        <div class="list-item">
            <img src="{{ agency.image-url }}" alt="{{ agency.name }}" />
        </div>
        <div class="list-item-text">
            <h5>{{ agency.code }}</h5>
            <p> {{ agency.name }}</p>          
        </div> 
        {% if agency.svc-num == 1 %}
          {% assign svc1 = 'e-Service' %}
        {% else %}
          {% assign svc1 = 'e-Services' %}
        {% endif %}
        <span class="num-of-eservices"><p>{{ agency.svc-num }} {{ svc1 }}</p>
        </span>
      </a>     
    </li>          
  {%  endfor  %}  
  </ul>
</div>
