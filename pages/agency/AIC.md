---
permalink: /agency/aic/
breadcrumb: AIC
title: AIC
---

<div class="agency">
  <div class="controls">
    <span class="back-button"><a href="/all-agencies/">Back</a></span>
   </div>
  
  <div class="agency-header">
    {% for agency in site.data.agencies-ad %}   
      {% if agency.code == "AIC" %}
          <div>
            <img src="/images/square/AIC.png" alt="{{ agency.name }}" />
          </div>
          <div class="agency-details">
            <div class="agency-name">
              <h3>{{ agency.code }}</h3>
              <p>{{ agency.name }}</p>
            </div>
            <div class="agency-meta">
              <a href="{{ agency.website }}">Visit Website</a>
              {% assign var1 = agency.svc-num | plus:0  %}
              {% if var1 == 1 %}
                {% assign svc1 = 'e-Service' %}
              {% else %}
               {% assign svc1 = 'e-Services' %}
              {% endif %}
              <span>{{ agency.svc-num }} {{ svc1 }} </span>
            </div>
          </div> 
      {% endif %}
    {% endfor %}
   </div>
   
  <div class="agency-body">
  <ul>
  {% for eservice in site.data.service-ad %}
    {% if eservice.agency == "AIC" %}
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
