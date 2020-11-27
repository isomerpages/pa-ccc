---
permalink: /all-agencies/
title: All Agencies
---

<div class="list-container">
  <ul class="vertical-list">    
   {%   for agency in site.data.agencies-all  %}
    <li class="list-item">
      <a href="{{ agency.website }}" >
        <div>
            <img src="{{ agency.image-url }}" alt="{{ agency.name }}" />
        </div>
        <div class="list-item-text">
            <h5>{{ agency.code }}</h5>
            <p> {{ agency.name }}</p>          
        </div>         
      </a>     
    </li>          
  {%  endfor  %}  
  </ul>
</div>
