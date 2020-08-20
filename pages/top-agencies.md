---
layout: skeleton
permalink: /top-agencies/
breadcrumb: Top Agencies
title: Top Agencies
---

<style type="text/css" media="screen">
  .block-grid {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}

.block-grid .grid-item {
  width: 30%;
  list-style: none;
  background: white;
  display: flex;
  flex: 0 0 auto;
  border-radius: $global-radius;
  text-align: center;
  flex-direction: column;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px #ccc;
  margin-bottom: 2rem;
  overflow: hidden;
  background: linear-gradient(to bottom, #fff 40%, #ececec 100%);
}

.grid-item a {
  padding: 1rem;
  color: black;
  text-decoration: none;
  border-radius: $global-radius;
  height: 100%;
  opacity: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  transition: opacity 300ms ease;
  &:hover {
    opacity: 0.6;
  }
  &:focus {
    background: rgba(0, 173, 239, 0.15);
  }
}

.grid-item a img {
  margin: 0 auto;
  min-height: 100px;
  height: 100px;
  width: 200px;
}

.grid-item a h2 {
  margin: 1rem 0 0 0;
}

.grid-item a p {
  margin: 0.5rem;
}

.grid-item.filler {
  background: none;
  border: none;
  box-shadow: none;
}
</style>

<ul class="block-grid">>
  
{% for agency in site.data.top-agencies %}
  
  <li classe="grid-item"> 
    <a href="{{ agency.website }}" style="color: black text-decoration: none">
      <img src="{{ agency.image-url }}" style="height: 100px; width:200px;"/>
      <h3> {{ agency.code }} </h3>
      <p> {{ agency.name }} </p>
    </a>
  </li>

   <li class="grid-item filler"></li>
   
{% endfor %}

</ul>



