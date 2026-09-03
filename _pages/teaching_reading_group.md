---
layout: page
permalink: /reading/
title: Reading Group
description: 좋은 논문을 많이 읽어야 좋은 논문을 쓸 수 있습니다. 이를 위해 연구실 구성원들이 번갈아가며 논문을 읽고 소개합니다. Robot Perception, SLAM, World Model 등 Spatial Estimation과 관련된 분야를 중점적으로 다룰 수 있으나 분야에 제한은 없습니다. 근본적인 이론부터 최신 기술 트렌드 습득과 연구자로서 필수적인 논리적 설득력과 비판적 사고를 기르는 것을 목표로 합니다.
nav: false
nav_order: 6
calendar: false
---

<!-- **`연구실 구성원이 모이고 나면 관심 분야의 논문을 같이 읽고 분석 할 예정입니다.`**
**연구실 참여를 희망하는 학부생 및 대학원 진학 희망자는 [Contact](/contact) 페이지를 참고해 주세요.** -->

<div class="reading-timeline">
  {% assign reading_entries = site.data.reading_group | sort: "date" | reverse %}
  {% assign reading_groups = reading_entries | group_by: "date" %}
  {% for group in reading_groups %}
  <div class="rg-entry">
    {% assign first_entry = group.items | first %}
    <div class="rg-date">{{ first_entry.date_label | default: group.name | date: "%Y.%m.%d" }}</div>
    {% for entry in group.items %}
    <div class="rg-card">
      <h3 class="rg-topic">{{ entry.topic }}</h3>
      {% if entry.materials %}
      <div class="rg-materials">
        {% for mat in entry.materials %}
          {% assign mat_name = mat.name | downcase %}
          {% if mat.icon %}
            {% assign mat_icon = mat.icon %}
          {% elsif mat_name contains 'paper' %}
            {% assign mat_icon = 'fa-solid fa-file-lines' %}
          {% elsif mat_name contains 'slide' %}
            {% assign mat_icon = 'fa-solid fa-display' %}
          {% elsif mat_name contains 'code' %}
            {% assign mat_icon = 'fa-brands fa-github' %}
          {% elsif mat_name contains 'video' %}
            {% assign mat_icon = 'fa-brands fa-youtube' %}
          {% else %}
            {% assign mat_icon = 'fa-solid fa-link' %}
          {% endif %}
          <a href="{{ mat.link }}" target="_blank" rel="noopener noreferrer" class="rg-tag rg-tag--{{ mat.type | default: 'secondary' }}">
            <i class="{{ mat_icon }}"></i>{{ mat.name }}
          </a>
        {% endfor %}
      </div>
      {% endif %}
    </div>
    {% endfor %}
  </div>
  {% endfor %}
</div>
