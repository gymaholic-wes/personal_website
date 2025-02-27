export type Language = "en" | "zh-Hant" | "zh-Hans"

export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Wesley LEUNG Ka Chun",
    "hero.role": "Computer Science & AI Engineer",
    "hero.description":
      "Dual degree student at HKUST specializing in Computer Science with AI and Business Management. Experienced in LLM development, robotics research, and AI engineering.",
    "hero.cta": "Learn More",
    "hero.glance": "Me at a Glance",
    "hero.dual": "Dual Degree",
    "hero.dual.desc": "Computer Science & Business Management expertise",
    "hero.research": "Published Research",
    "hero.research.desc": "Author of robotics research paper at ICARCV2024 Conference",
    "hero.leadership": "Leadership Experience",
    "hero.leadership.desc": "Led a team of 28 engineers in HKUST Robotics Team",
    "hero.global": "Global Perspective",
    "hero.global.desc": "Exchange programs at Tsinghua and TU Delft with trilingual proficiency",
    "hero.scroll": "Scroll down to learn more",
    // About Section
    "about.title": "About Me",
    "about.description":
      "I'm Wesley, a dual-degree student in Computer Science and Business at HKUST, passionate about AI, robotics, and tech-driven innovation. With research experience at Huawei, leadership in the HKUST Robotics Team, and hands-on AI projects, I thrive at the intersection of technology and entrepreneurship. Through global experiences at Tsinghua and TU Delft, I aim to create impactful solutions that bridge AI, business, and real-world challenges.",
    "about.skills.ai": "Artificial Intelligence & Machine Learning",
    "about.skills.ai.desc": "LLM fine-tuning, computer vision, deep learning",
    "about.skills.global": "Global Perspective",
    "about.skills.global.desc":
      "Exchange experiences at prestigious universities in China and Netherlands, able to talk in cantonese, english and mandarin fluently",
    "about.skills.leadership": "Leadership & Project Management",
    "about.skills.leadership.desc": "Team leadership, budgeting, competition strategy",
    "about.skills.robotics": "Robotics",
    "about.skills.robotics.desc": "Hands-on experience in robotics development, including underwater ROV systems",

    // Education Section
    "education.title": "Education",
    "education.degree": "Dual Degree Program",
    "education.institution": "Hong Kong University of Science and Technology",
    "education.period": "Sep 2021 – Jun 2026",
    "education.details.1":
      "Bachelor of Engineering in Computer Science (with an extended major in AI), minor in Robotics",
    "education.details.2": "Bachelor of Business Administration in General Business Management",
    "education.details.3": "CGPA: 3.367/4.30",
    "education.awards": "Major Awards & Scholarships:",
    "education.awards.1": "HSBC Greater Bay Area (Hong Kong) Scholarship",
    "education.awards.2": "Tin Ka Ping Scholarship (Innovation & Creativity) 2022/23",
    "education.awards.3": "Chiang Chen Overseas Exchange Scholarship 2023/24",
    "education.awards.4": "IET Prize 2022 Award Winner",
    "education.exchange": "Exchange Experience:",
    "education.exchange.1": "Tsinghua University, China (Computer Science), Sep 2024 – Feb 2025",
    "education.exchange.2": "Delft University of Technology, Netherlands (Computer Science), Sep 2023 – Feb 2024",

    // Experience Section
    "experience.title": "Professional Experience",
    "experience.huawei.company": "Huawei",
    "experience.huawei.location": "Hong Kong",
    "experience.huawei.period": "Jun 2024 – Aug 2024",
    "experience.huawei.role": "Research Intern",
    "experience.huawei.team": "XiaoYi LLM Hong Kong Team",
    "experience.huawei.resp.1":
      "Fine-tuned the XiaoYi Large Language Model using Supervised Fine Tuning (SFT), achieving a 10% improvement in instruction compliance",
    "experience.huawei.resp.2":
      "Implemented Direct Preference Optimization (DPO) techniques to ensure model outputs adhered to user-specified length constraints, resulting in an 18% improvement",
    "experience.huawei.resp.3":
      "Conducted in-depth reviews of 5 cutting-edge LLM research papers, synthesizing key insights and presenting findings to the division",

    "experience.wada.company": "Wada Bento",
    "experience.wada.location": "Hong Kong",
    "experience.wada.period": "Apr 2022 – Aug 2022",
    "experience.wada.role": "AI Engineer",
    "experience.wada.description": "Forbes Asia 100 To Watch start-up",
    "experience.wada.resp.1":
      "Developed a foot traffic analysis system using OpenCV, DeepSORT and YOLOv5 for vending machines optimization",
    "experience.wada.resp.2": "Built an online graph visualisation platform with Flask to display foot metric data",
    "experience.wada.resp.3": "Deployed a camera system at the Wada Bento flagship store and Little Bear Bento",

    // Projects Section
    "projects.title": "Notable Projects",
    "projects.underwater.title": "Coastal Underwater Evidence Search System",
    "projects.underwater.category": "Research",
    "projects.underwater.period": "Jun 2023 – Present",
    "projects.underwater.desc.1":
      "Designed and developed a biomimetic hexapod underwater robot with efficient locomotion",
    "projects.underwater.desc.2": "Published paper for the ICARCV2024 Conference",
    "projects.underwater.desc.3":
      "Awarded First Prize and Best Creativity award in Samsung Solve for Tomorrow Competition",

    "projects.rov.title": "HKUST Robotics Team (ROV)",
    "projects.rov.role": "Chief Executive Officer",
    "projects.rov.period": "Sep 2022 – Jul 2023",
    "projects.rov.desc.1": "Led a team of 28 engineers to win Hong Kong Regional Contest of MATE ROV Competition 2023",
    "projects.rov.desc.2": "Oversaw team budget and timelines, managed team performance",
    "projects.rov.desc.3": "Prepared technical documentation and marketing materials",

    "projects.gdsc.title": "Google Developer Student Club",
    "projects.gdsc.role": "Core Team Lead (Technical)",
    "projects.gdsc.period": "Sep 2022 – Jun 2023",
    "projects.gdsc.desc.1": "Led and hosted webinar on Tech Entrepreneurship featuring 4 successful entrepreneurs",
    "projects.gdsc.desc.2": "Organized hands-on workshops teaching Google technologies",
    "projects.gdsc.desc.3": "Enhanced students' technical proficiency with TensorFlow and Firebase",

    // Skills Section
    "skills.title": "Skills & Expertise",
    "skills.programming.title": "Programming Languages",
    "skills.programming.tech": "Python, C++, JavaScript",
    "skills.programming.desc":
      "Proficient in multiple programming languages with focus on AI and robotics applications.",

    "skills.ai.title": "AI & Machine Learning",
    "skills.ai.tech": "PyTorch, TensorFlow, LLMs",
    "skills.ai.desc": "Experience in developing and fine-tuning large language models and implementing ML solutions.",

    "skills.robotics.title": "Robotics",
    "skills.robotics.tech": "ROS, Computer Vision",
    "skills.robotics.desc": "Hands-on experience in robotics development, including underwater ROV systems.",

    "skills.web.title": "Web Development",
    "skills.web.tech": "React, Flask, Node.js",
    "skills.web.desc": "Full-stack development experience with modern web technologies.",

    "skills.leadership.title": "Leadership",
    "skills.leadership.tech": "Team Management, Project Planning",
    "skills.leadership.desc": "Proven leadership experience in technical teams and project management.",

    "skills.global.title": "Global Perspective",
    "skills.global.tech": "International Experience",
    "skills.global.desc": "Exchange experiences at prestigious universities in China and Netherlands.",

    // Contact Section
    "contact.title": "Get in Touch",
    "contact.info": "Contact Information",
    "contact.email": "wesleyleungkachun@gmail.com",
    "contact.location": "Hong Kong SAR, China",
  },
  "zh-Hant": {
    // Navigation
    "nav.home": "首頁",
    "nav.about": "關於",
    "nav.education": "教育",
    "nav.experience": "經驗",
    "nav.projects": "項目",
    "nav.skills": "技能",
    "nav.contact": "聯繫",

    // Hero Section
    "hero.title": "梁嘉晉",
    "hero.role": "計算機科學與人工智能工程師",
    "hero.description":
      "香港科技大學雙學位學生，主修計算機科學（人工智能）和工商管理。擁有大語言模型開發、機器人研究和人工智能工程經驗。",
    "hero.cta": "了解更多",
    "hero.glance": "我的四大亮點",
    "hero.dual": "雙學位",
    "hero.dual.desc": "計算機科學與工商管理專業知識",
    "hero.research": "發表研究",
    "hero.research.desc": "ICARCV2024會議機器人研究論文作者",
    "hero.leadership": "領導經驗",
    "hero.leadership.desc": "帶領28名工程師的科大機器人團隊",
    "hero.global": "國際視野",
    "hero.global.desc": "清華大學和代爾夫特理工大學交換生，精通三語",
    "hero.scroll": "向下滾動以了解更多",

    // About Section
    "about.title": "關於我",
    "about.description":
      "我是梁嘉俊，香港科技大學計算機科學和工商管理雙學位學生。我對人工智能、機器人和科技創新充滿熱情。憑藉在華為的研究經驗、科大機器人團隊的領導經驗以及實際的人工智能項目，我致力於將技術與創業相結合。通過在清華大學和代爾夫特理工大學的國際交流經驗，我期望創造連接人工智能、商業和現實世界挑戰的解決方案。",
    "about.skills.ai": "人工智能與機器學習",
    "about.skills.ai.desc": "大語言模型微調、計算機視覺、深度學習",
    "about.skills.global": "國際視野",
    "about.skills.global.desc": "在中國和荷蘭頂尖大學的交換經驗，精通粵語、英語和普通話",
    "about.skills.leadership": "領導力與項目管理",
    "about.skills.leadership.desc": "團隊領導、預算管理、比賽策略",
    "about.skills.robotics": "機器人技術",
    "about.skills.robotics.desc": "實際機器人開發經驗，包括水下遙控機器人系統",

    // Education Section
    "education.title": "教育背景",
    "education.degree": "雙學位課程",
    "education.institution": "香港科技大學",
    "education.period": "2021年9月 – 2026年6月",
    "education.details.1": "工學士（計算機科學，人工智能延伸主修），副修機器人學",
    "education.details.2": "工商管理學士",
    "education.details.3": "平均績點：3.367/4.30",
    "education.awards": "主要獎項與獎學金：",
    "education.awards.1": "滙豐大灣區（香港）獎學金",
    "education.awards.2": "田家炳獎學金（創新創意）2022/23",
    "education.awards.3": "蔣震海外交流獎學金 2023/24",
    "education.awards.4": "IET Prize 2022獲獎者",
    "education.exchange": "交換經驗：",
    "education.exchange.1": "清華大學，中國（計算機科學），2024年9月 – 2025年2月",
    "education.exchange.2": "代爾夫特理工大學，荷蘭（計算機科學），2023年9月 – 2024年2月",

    // Experience Section
    "experience.title": "專業經驗",
    "experience.huawei.company": "華為",
    "experience.huawei.location": "香港",
    "experience.huawei.period": "2024年6月 – 2024年8月",
    "experience.huawei.role": "研究實習生",
    "experience.huawei.team": "小藝大語言模型香港團隊",
    "experience.huawei.resp.1": "使用監督式微調（SFT）優化小藝大語言模型，指令遵循度提升10%",
    "experience.huawei.resp.2": "實施直接偏好優化（DPO）技術確保模型輸出符合用戶指定長度限制，效果提升18%",
    "experience.huawei.resp.3": "深入研究5篇前沿大語言模型論文，總結關鍵見解並向部門匯報",

    "experience.wada.company": "Wada Bento",
    "experience.wada.location": "香港",
    "experience.wada.period": "2022年4月 – 2022年8月",
    "experience.wada.role": "人工智能工程師",
    "experience.wada.description": "福布斯亞洲100家值得關注的初創企業",
    "experience.wada.resp.1": "使用OpenCV、DeepSORT和YOLOv5開發人流分析系統，優化自動販賣機佈局",
    "experience.wada.resp.2": "使用Flask建立在線圖表可視化平台展示人流指標數據",
    "experience.wada.resp.3": "在Wada Bento旗艦店和小熊便當部署攝像系統",

    // Projects Section
    "projects.title": "重要項目",
    "projects.underwater.title": "沿海水下證據搜索系統",
    "projects.underwater.category": "研究",
    "projects.underwater.period": "2023年6月 – 至今",
    "projects.underwater.desc.1": "設計並開發具有高效運動能力的仿生六足水下機器人",
    "projects.underwater.desc.2": "在ICARCV2024會議發表論文",
    "projects.underwater.desc.3": "在三星Solve for Tomorrow比賽中獲得一等獎和最佳創意獎",

    "projects.rov.title": "科大機器人團隊（ROV）",
    "projects.rov.role": "首席執行官",
    "projects.rov.period": "2022年9月 – 2023年7月",
    "projects.rov.desc.1": "帶領28名工程師贏得2023年MATE ROV比賽香港區冠軍",
    "projects.rov.desc.2": "監督團隊預算和時間表，管理團隊表現",
    "projects.rov.desc.3": "準備技術文檔和營銷材料",

    "projects.gdsc.title": "Google開發者學生俱樂部",
    "projects.gdsc.role": "核心團隊負責人（技術）",
    "projects.gdsc.period": "2022年9月 – 2023年6月",
    "projects.gdsc.desc.1": "主持科技創業網絡研討會，邀請4位成功企業家分享",
    "projects.gdsc.desc.2": "組織Google技術實踐工作坊",
    "projects.gdsc.desc.3": "提升學生使用TensorFlow和Firebase的技術能力",

    // Skills Section
    "skills.title": "技能專長",
    "skills.programming.title": "程式語言",
    "skills.programming.tech": "Python、C++、JavaScript",
    "skills.programming.desc": "精通多種程式語言，專注於人工智能和機器人應用。",

    "skills.ai.title": "人工智能與機器學習",
    "skills.ai.tech": "PyTorch、TensorFlow、大語言模型",
    "skills.ai.desc": "具有開發和微調大語言模型以及實施機器學習解決方案的經驗。",

    "skills.robotics.title": "機器人技術",
    "skills.robotics.tech": "ROS、計算機視覺",
    "skills.robotics.desc": "具有實際機器人開發經驗，包括水下遙控機器人系統。",

    "skills.web.title": "網頁開發",
    "skills.web.tech": "React、Flask、Node.js",
    "skills.web.desc": "具有現代網頁技術的全棧開發經驗。",

    "skills.leadership.title": "領導力",
    "skills.leadership.tech": "團隊管理、項目規劃",
    "skills.leadership.desc": "在技術團隊和項目管理方面具有豐富的領導經驗。",

    "skills.global.title": "國際視野",
    "skills.global.tech": "國際經驗",
    "skills.global.desc": "在中國和荷蘭頂尖大學的交換經驗。",

    // Contact Section
    "contact.title": "聯繫方式",
    "contact.info": "聯繫信息",
    "contact.email": "wesleyleungkachun@gmail.com",
    "contact.location": "中國香港特別行政區",
  },
  "zh-Hans": {
    // Navigation
    "nav.home": "首页",
    "nav.about": "关于",
    "nav.education": "教育",
    "nav.experience": "经验",
    "nav.projects": "项目",
    "nav.skills": "技能",
    "nav.contact": "联系",

    // Hero Section
    "hero.title": "梁嘉晋",
    "hero.role": "计算机科学与人工智能工程师",
    "hero.description":
      "香港科技大学双学位学生，主修计算机科学（人工智能）和工商管理。拥有大语言模型开发、机器人研究和人工智能工程经验。",
    "hero.cta": "了解更多",
    "hero.glance": "我的四大亮点",
    "hero.dual": "双学位",
    "hero.dual.desc": "计算机科学与工商管理专业知识",
    "hero.research": "发表研究",
    "hero.research.desc": "ICARCV2024会议机器人研究论文作者",
    "hero.leadership": "领导经验",
    "hero.leadership.desc": "带领28名工程师的科大机器人团队",
    "hero.global": "国际视野",
    "hero.global.desc": "清华大学和代尔夫特理工大学交换生，精通三语",
    "hero.scroll": "向下滚动以了解更多",

    // About Section
    "about.title": "关于我",
    "about.description":
      "我是梁嘉俊，香港科技大学计算机科学和工商管理双学位学生。我对人工智能、机器人和科技创新充满热情。凭借在华为的研究经验、科大机器人团队的领导经验以及实际的人工智能项目，我致力于将技术与创业相结合。通过在清华大学和代尔夫特理工大学的国际交流经验，我期望创造连接人工智能、商业和现实世界挑战的解决方案。",
    "about.skills.ai": "人工智能与机器学习",
    "about.skills.ai.desc": "大语言模型微调、计算机视觉、深度学习",
    "about.skills.global": "国际视野",
    "about.skills.global.desc": "在中国和荷兰顶尖大学的交换经验，精通粤语、英语和普通话",
    "about.skills.leadership": "领导力与项目管理",
    "about.skills.leadership.desc": "团队领导、预算管理、比赛策略",
    "about.skills.robotics": "机器人技术",
    "about.skills.robotics.desc": "实际机器人开发经验，包括水下遥控机器人系统",

    // Education Section
    "education.title": "教育背景",
    "education.degree": "双学位课程",
    "education.institution": "香港科技大学",
    "education.period": "2021年9月 – 2026年6月",
    "education.details.1": "工学士（计算机科学，人工智能延伸主修），副修机器人学",
    "education.details.2": "工商管理学士",
    "education.details.3": "平均绩点：3.367/4.30",
    "education.awards": "主要奖项与奖学金：",
    "education.awards.1": "汇丰大湾区（香港）奖学金",
    "education.awards.2": "田家炳奖学金（创新创意）2022/23",
    "education.awards.3": "蒋震海外交流奖学金 2023/24",
    "education.awards.4": "IET Prize 2022获奖者",
    "education.exchange": "交换经验：",
    "education.exchange.1": "清华大学，中国（计算机科学），2024年9月 – 2025年2月",
    "education.exchange.2": "代尔夫特理工大学，荷兰（计算机科学），2023年9月 – 2024年2月",

    // Experience Section
    "experience.title": "专业经验",
    "experience.huawei.company": "华为",
    "experience.huawei.location": "香港",
    "experience.huawei.period": "2024年6月 – 2024年8月",
    "experience.huawei.role": "研究实习生",
    "experience.huawei.team": "小艺大语言模型香港团队",
    "experience.huawei.resp.1": "使用监督式微调（SFT）优化小艺大语言模型，指令遵循度提升10%",
    "experience.huawei.resp.2": "实施直接偏好优化（DPO）技术确保模型输出符合用户指定长度限制，效果提升18%",
    "experience.huawei.resp.3": "深入研究5篇前沿大语言模型论文，总结关键见解并向部门汇报",

    "experience.wada.company": "Wada Bento",
    "experience.wada.location": "香港",
    "experience.wada.period": "2022年4月 – 2022年8月",
    "experience.wada.role": "人工智能工程师",
    "experience.wada.description": "福布斯亚洲100家值得关注的创业公司",
    "experience.wada.resp.1": "使用OpenCV、DeepSORT和YOLOv5开发人流分析系统，优化自动贩卖机布局",
    "experience.wada.resp.2": "使用Flask建立在线图表可视化平台展示人流指标数据",
    "experience.wada.resp.3": "在Wada Bento旗舰店和小熊便当部署摄像系统",

    // Projects Section
    "projects.title": "重要项目",
    "projects.underwater.title": "沿海水下证据搜索系统",
    "projects.underwater.category": "研究",
    "projects.underwater.period": "2023年6月 – 至今",
    "projects.underwater.desc.1": "设计并开发具有高效运动能力的仿生六足水下机器人",
    "projects.underwater.desc.2": "在ICARCV2024会议发表论文",
    "projects.underwater.desc.3": "在三星Solve for Tomorrow比赛中获得一等奖和最佳创意奖",

    "projects.rov.title": "科大机器人团队（ROV）",
    "projects.rov.role": "首席执行官",
    "projects.rov.period": "2022年9月 – 2023年7月",
    "projects.rov.desc.1": "带领28名工程师赢得2023年MATE ROV比赛香港区冠军",
    "projects.rov.desc.2": "监督团队预算和时间表，管理团队表现",
    "projects.rov.desc.3": "准备技术文档和营销材料",

    "projects.gdsc.title": "Google开发者学生俱乐部",
    "projects.gdsc.role": "核心团队负责人（技术）",
    "projects.gdsc.period": "2022年9月 – 2023年6月",
    "projects.gdsc.desc.1": "主持科技创业网络研讨会，邀请4位成功企业家分享",
    "projects.gdsc.desc.2": "组织Google技术实践工作坊",
    "projects.gdsc.desc.3": "提升学生使用TensorFlow和Firebase的技术能力",

    // Skills Section
    "skills.title": "技能专长",
    "skills.programming.title": "程序语言",
    "skills.programming.tech": "Python、C++、JavaScript",
    "skills.programming.desc": "精通多种程序语言，专注于人工智能和机器人应用。",

    "skills.ai.title": "人工智能与机器学习",
    "skills.ai.tech": "PyTorch、TensorFlow、大语言模型",
    "skills.ai.desc": "具有开发和微调大语言模型以及实施机器学习解决方案的经验。",

    "skills.robotics.title": "机器人技术",
    "skills.robotics.tech": "ROS、计算机视觉",
    "skills.robotics.desc": "具有实际机器人开发经验，包括水下遥控机器人系统。",

    "skills.web.title": "网页开发",
    "skills.web.tech": "React、Flask、Node.js",
    "skills.web.desc": "具有现代网页技术的全栈开发经验。",

    "skills.leadership.title": "领导力",
    "skills.leadership.tech": "团队管理、项目规划",
    "skills.leadership.desc": "在技术团队和项目管理方面具有丰富的领导经验。",

    "skills.global.title": "国际视野",
    "skills.global.tech": "国际经验",
    "skills.global.desc": "在中国和荷兰顶尖大学的交换经验。",

    // Contact Section
    "contact.title": "联系方式",
    "contact.info": "联系信息",
    "contact.email": "wesleyleungkachun@gmail.com",
    "contact.location": "中国香港特别行政区",
  },
} as const

export type TranslationKey = keyof (typeof translations)["en"]

