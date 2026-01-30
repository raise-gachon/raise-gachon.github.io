// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "dropdown-reading-group",
              title: "Reading Group",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/reading/";
              },
            },{id: "dropdown-study-group",
              title: "Study Group",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/study/";
              },
            },{id: "dropdown-courses",
              title: "Courses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/courses/";
              },
            },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-raise-lab-robotics-amp-amp-ai-for-spatial-estimation-officially-launched-sparkles-smile",
          title: 'RAISE Lab (Robotics &amp;amp;amp; AI for Spatial Estimation) Officially Launched :sparkles: :smile:',
          description: "",
          section: "News",},{id: "teachings-논문-읽기-연구실-구성하고-진행",
          title: '논문 읽기 (연구실 구성하고 진행)',
          description: "논문을 어떻게 읽어야 하는지를 다룹니다. 논문을 처음에 읽으라고 하면 처음부터 끝까지 쭉 읽기 마련이지요. 우리는 책을 읽거나 인터넷 페이지를 순서대로 보는 것에 익숙하니까요. 논문을 읽는 방법은 조금 다릅니다. 같이 배워 봅시다.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/paper_reading/";
            },},{id: "teachings-논문-쓰기-연구실-구성하고-진행",
          title: '논문 쓰기 (연구실 구성하고 진행)',
          description: "논문을 어떻게 쓰는지 다룹니다. 논문은 정형화된 양식과 들어가야 할 내용들이 있습니다. 정해진 양식에 따라 논문에 필요한 내용을 쓰는 방법을 같이 배워 봅시다.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/paper_writing/";
            },},{id: "teachings-probabilistic-robotics",
          title: 'Probabilistic Robotics',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/probabilistic_robotics/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },];
