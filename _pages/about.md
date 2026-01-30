---
layout: about
title: Home
permalink: /
# subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.

# profile:
#   align: right
#   image: prof_pic.jpg
#   image_circular: false # crops the image to make it circular
#   more_info: >
#     <p>555 your office number</p>
#     <p>123 your address street</p>
#     <p>Your City, State 12345</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div class="lab-gate-bright">
  <h1 class="gate-title">RAISE <span class="text-theme">LAB</span></h1>
  <p class="gate-fullname">Robotics & Artificial Intelligence for Spatial Estimation</p>
  <div class="gate-line"></div>
</div>


### **Welcome to RAISE Lab.**
We *raise* the bar for robot intelligence through spatial estimation.
<br>
<br>

### **Mission**
Our research focuses on the intersection of `Robotics` and `Spatial AI`, developing advanced perception algorithms that empower robots with the `spatial intelligence` required for enhanced task planning and control in everyday environments.
<br>
<br>

### **Research interests**
RAISE Lab develops robotic intelligence, with a specific focus on Spatial Intelligence rooted in SLAM technology. Our research framework is currently built upon three core pillars: [1] Simultaneous Localization and Mapping (SLAM), [2] World Models for spatial understanding, and [3] Real-world Applications in agricultural and manufacturing environments. However, we do not limit our future research directions as we strive to push the boundaries of robotics.
- keywords: Robot perception, SLAM, world model, spatial intelligence
<br>
<br>

---
### **한글 소개 (Introduction of the lab in Korean)**
<!-- RAISE Lab은 로봇 지능을 개발합니다. 특히 <strong>SLAM</strong> 기술을 바탕으로 로봇의 <strong>공간 지능</strong>을 개발하는 연구를 수행하고 있습니다. 현재 우리의 주요 연구 방향은 아래와 같으나, 앞으로의 연구 방향에 제한을 두지 않습니다. -->
RAISE Lab은 로봇 지능을 개발합니다. 특히 SLAM 기술을 바탕으로 로봇의 **공간 지능(Spatial Intelligence)**을 개발하는 연구를 수행하고 있습니다. 현재 우리의 연구는 **[1] 위치 추정 및 지도 작성(SLAM), [2] 공간의 의미 이해(World Model), [3] 농업 및 제조 현장 적용(Applications)** 세 축으로 진행 중이나, 앞으로의 연구 방향에 제한을 두지 않습니다.
<br><br>

##### **[1] SLAM: Precise State Estimation**
로봇이 복잡하고 가변적인 환경에서 자신의 위치를 정확히 특정하기 위한 근간 기술을 연구합니다.
- 카메라, LiDAR, IMU 및 GNSS 등 이종 센서 데이터를 결합하거나 단일 센서를 사용하여 Odometry 및 SLAM 알고리즘을 개발합니다.
- 위 과정에서 대규모 공간에서의 드리프트를 최소화하고 위치 추정 정밀도를 확보합니다.
- 터널, 숲, 온실과 같이 정보가 부족한 환경에서도 위치 추정이 끊기지 않는 강인한 시스템을 만듭니다.
<br><br>

##### **[2] World Model: Semantic & Spatial Understanding**
단순한 기하적 지도를 넘어, 로봇이 공간의 인과관계와 의미를 이해하도록 하는 지능형 모델을 구축합니다.
- 3차원 기하 정보에 의미와 물리적 이해를 더하여, 로봇이 "어디에 무엇이 있고, 그것이 어떻게 변할지" 이해하는 차세대 지도 모델을 연구합니다.
- 대형 멀티모달 모델을 로봇 인식 과정에 통합하여, 비정형 환경에서도 상식적인 수준의 공간 추론이 가능한 시스템을 설계합니다.
- 환경을 위계적 그래프 구조로 정형화하여 로봇의 복잡한 의사결정과 작업 계획을 지원하는 공간 지능을 구현합니다.
<br><br>

##### **[3] Applications: Intelligent Field Robotics**
원천 기술을 실제 필드에 적용하여 산업적·사회적 난제를 해결합니다.
- 농업 환경에서 수확, 작물 카운팅, 생육 모니터링을 수행하는 로봇 시스템을 개발합니다.
- 제조 환경에서 로봇의 작업을 위한 작업 환경 인식 시스템을 개발합니다. 공정 내 부품의 정밀 위치 추정 및 작업 공간의 실시간 변화를 감지하여 스마트 팩토리 내 로봇의 유연한 작업을 지원합니다.
- 위 분야에 국한하지 않고 실험실 환경을 넘어 실제 필드 로봇이 마주하는 센서 노이즈와 하드웨어 제약 조건 하에서 알고리즘을 최적화하고 실증합니다.

기술 협력에 관심이 있으시면 `jhkang at gachon.ac.kr` 로 연락주시기 바랍니다.

<div class="alert alert-info" role="alert" style="border-left: 5px solid #007bff;">
  <h4 class="alert-heading">🚀 WE'RE HIRING!</h4>
  <p><strong>RAISE Lab</strong>에서 박사후연구원(포닥), 석/박사 연구원, 학부 인턴을 모집합니다.</p>
  <hr>
  <p class="mb-0">Perception, SLAM, Spatial AI 연구에 관심이 있는 분들은
  <a href="{{ '/contact/' | relative_url }}" class="alert-link" style="text-decoration: underline;">Contact</a>
    페이지를 참고하시어 언제든 연락 주시기 바랍니다.</p>
</div>