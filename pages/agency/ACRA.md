---
permalink: /agency/ACRA/
breadcrumb: ACRA
title: ACRA
---

<div class="agency">
  <div class="controls">
    <span class="back-button">Back</span>
   </div>
  
  <div class="agency-header">
    {% for agency in site.data.agencies-ad %}   
      {% if agency.code == "ACRA" %}
          <div>
            <img src="/images/square/ACRA.png" alt="{{ agency.name }}" />
          </div>
          <div class="agency-details">
            <div class="agency-name">
              <h2>{{ agency.code }}</h2>
              <p>{{ agency.name }}</p>
            </div>
            <div class="agency-meta">
              <a href="{{ agency.website }}">Visit Website</a>
              <span>{{ agency.svc-num }} e-Services </span>
            </div>
          </div> 
      {% endif %}
    {% endfor %}
   </div>
   
  <div class="agency-body">
  <ul>
  {% for eservice in site.data.service-ad %}
    {% if eservice.agency == "ACRA" %}
    <li class="list-item">
      <a href="{{ eservice.url }}">        
        <div class="list-item-text">
          <h5>{{ eservice.title }}</h5>
          <p>{{ eservice.description }}</p>
        </div>
      </a>
    </li>   
    {% endif %}
    {% endfor %} 
  </ul>
  </div>

 </div>
