---
layout: page
permalink: /reading/
title: Reading Group
description: 좋은 논문을 많이 읽어야 좋은 논문을 쓸 수 있습니다. 이를 위해 연구실 구성원들이 번갈아가며 논문을 읽고 소개합니다. Robot Perception, SLAM, World Model 등 Spatial Estimation과 관련된 분야를 중점적으로 다룰 수 있으나 분야에 제한은 없습니다. 근본적인 이론부터 최신 기술 트렌드 습득과 연구자로서 필수적인 논리적 설득력과 비판적 사고를 기르는 것을 목표로 합니다.
nav: false
nav_order: 6
calendar: false
---

**`연구실 구성원이 모이고 나면 관심 분야의 논문을 같이 읽고 분석 할 예정입니다.`**
**연구실 참여를 희망하는 학부생 및 대학원 진학 희망자는 [Contact](/contact) 페이지를 참고해 주세요.**

<table class="table table-hover">
  <thead class="thead-light">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Topic</th>
      <th scope="col">Material</th>
    </tr>
  </thead>
  <tbody>
    {% for entry in site.data.reading_group %}
    <tr>
      <td class="align-middle">{{ entry.date }}</td>
      <td class="align-middle"><strong>{{ entry.topic }}</strong></td>
      <td class="align-middle">
        {% for mat in entry.materials %}
          <a href="{{ mat.link }}" target="_blank" class="badge badge-{{ mat.type | default: 'secondary' }} p-2 mr-1">
            {{ mat.name }}
          </a>
        {% endfor %}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>