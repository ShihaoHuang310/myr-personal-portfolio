import React from 'react'
import { FaReact } from 'react-icons/fa'
import { FaVuejs } from 'react-icons/fa'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { LuGraduationCap } from 'react-icons/lu'

import HMIMSImage from '@/public/project1.png'
import ICIMSImage from '@/public/project2.png'
import HMWRSImage from '@/public/project3.png'
import ISPImage from '@/public/project4.png'
import ISFCSHMSAOImage from '@/public/project5.png'
import szSysImage from '@/public/project6.png'
import szSysImage2 from '@/public/project7.jpg'
import szSysImage3 from '@/public/project8.jpg'

export type ProjectTags = (typeof projectsData)[number]['tags']

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experiences',
    hash: '#experience'
  }
  // {
  //     name: "Contact",
  //     hash: "#contact",
  // },
] as const

export const headerLanguageMap = {
  Home: '首页',
  About: '关于我',
  Projects: '我的项目',
  Skills: '我的技能',
  Experiences: '我的经历'
}

export const experiencesData = [
  {
    title: 'Solutions Engineer',
    location: 'Shanghai Huwan Intelligent Technology Co., Ltd.',
    description: [
      {
        info: '1. Served as a Solutions Engineer, primarily responsible for initial project proposal development, requirements analysis, product design, and solution formulation, participating in digital projects across multiple industry sectors.',
        title: ''
      },
      {
        info: '2. Participated in the intelligent scheduling and full-process control system project for hazardous materials storage areas, responsible for on-site communication with clients and understanding operational processes, requirements gathering, solution design, and product design, assisting clients in achieving digital management of operational processes.',
        title: ''
      },
      {
        info: '3. Involved in the ICIMS project for intelligent hazardous materials traceability codes and dynamic inbound and outbound management systems, analyzing and organizing requirements based on emergency bureau policies, participating in potential client meetings to gather and organize requirements, designing functional modules, and following up on project development progress and policy changes to ensure the system meets the latest policies and corporate needs.',
        title: ''
      },
      {
        info: '4. Contributed to the inland shipping project by drafting the initial proposal, designing a digital system that incorporates themes such as green energy conservation, environmental changes, emergency response, emergency command, and channel management, and writing a corresponding set of digital solutions for shipping, which received client approval.',
        title: ''
      },
      {
        info: '5. Participated in the hazardous materials warehouse reservation management system project, responsible for requirements analysis, logical design, and product design, helping clients solve practical issues.',
        title: ''
      },
      {
        info: '6. Involved in the hazardous materials inventory management project, responsible for requirements analysis, logical design, and product design, assisting the company in initially building a self-developed lightweight inventory management system to support the comprehensive supply chain business scenarios in the hazardous materials industry.',
        title: ''
      }
    ],
    icon: React.createElement(AiOutlineFundProjectionScreen),
    honors: '',
    date: '2023 November - 2024 August'
  },
  {
    title: 'Project Manager Assistant & Front-end Developer',
    location: 'Suzhou Surveying and Mapping Geographic Information Co., Ltd.',
    description: [
      {
        info: '1. Participated in the requirements analysis, solution formulation, and project management of several key projects, including the Digital Twin "Vision" Assessment Decision System project for Suzhou Industrial Park, the Intensive Platform project, the Stability Maintenance Platform project, and the Building Economy project.',
        title: ''
      },
      {
        info: '2. In the Digital Twin "Vision" Assessment Decision System project, I was responsible for developing key functional modules such as layer development, historical flow visualization, video quality assessment, and simulation camera evaluation, successfully integrating with digital platforms, digital twins, and mapping platforms to achieve image relay objectives.',
        title: ''
      },
      {
        info: '3. In the Intensive Platform project for Suzhou Industrial Park, I led the functional analysis for both enterprise and government sides, user experience optimization, and iterative evaluation, while coordinating the development of the approval module for the web platform to ensure smooth project implementation.',
        title: ''
      },
      {
        info: '4. In the Stability Maintenance Platform project, I organized the prototype framework and led the UI team to optimize the display content and interaction methods of subpages, refactoring existing code to meet client requirements.',
        title: ''
      },
      {
        info: '5. In the Building Economy project for Suzhou Industrial Park, I was responsible for developing the building survey information page and collaborated with the project manager to establish a comprehensive information management system covering enterprise reporting, functional area review, comprehensive evaluation, and data aggregation analysis.',
        title: ''
      }
    ],
    icon: React.createElement(FaVuejs),
    honors: '',
    date: 'June 2022 - September 2023'
  },
  {
    title: 'Master of Geographic Information Science',
    location: 'University of Manchester, UK',
    description: [
      {
        info: 'Studied GIS, Remote Sensing Applications, Spatial Ecology, Geographic Information Systems and Environmental Applications, Digital Image Processing and Data Analysis, etc.; achieved Merit, ranked in the top 10 of the class;',
        title: ''
      }
    ],
    icon: React.createElement(LuGraduationCap),
    honors: '',
    date: 'September 2020 - 2021'
  }
  // {
  //   title: '遥感科学与技术学士',
  //   location: '新疆大学',
  //   description: [
  //     {
  //
  //       info: '地理信息系统、水利测量学、地貌学、数据库原理、植物遥感、光学遥感等；GPA 为3.3/4.0，平均分为84/100，专业排名前 5，成绩优异；',
  //       title: ''
  //     },
  //     {
  //
  //       info: '获优秀毕业论文（校级），同年 1 月获三好学生（校级）；',
  //       title: '2019.06'
  //     },
  //     {
  //
  //       info: '年度蝉联新疆维尔自治区励志奖学金（省级）；',
  //       title: '2017-2018'
  //     },
  //     {
  //
  //       info: '获新疆大学资源与环境科学学院优秀团员（院级）、优秀班干部（院级）；',
  //       title: '2016.09'
  //     }
  //   ],
  //   icon: React.createElement(LuGraduationCap),
  //   date: '2015年9月 - 2021年6月'
  // }
]

export const experiencesDataZn = [
  {
    title: '解决方案工程师',
    location: '上海沪万智能科技有限公司',
    description: [
      {
        info: '1、担任解决方案工程师，主要负责前期项目方案构想、需求分析、产品设计、解决方案编制等工作，参与多个行业领域的数字化项目。',
        title: ''
      },
      {
        info: '2、参与危化品库区作业智能调度全流程管控系统项目，负责去客户现场沟通及作业流程了解，需求收集、解决方案设计、产品设计等工作,帮助客户实现作业流程数字化管理。',
        title: ''
      },
      {
        info: '3、参与icims智能危险化学品追溯码及动态出入库管理系统项目，根据应急局政策进行分析整理、参与潜在客户需求会议收集需求并整理、设计功能模块，并跟进项目开发进度及政策变化，确保系统满足最新政策和企业需求。',
        title: ''
      },
      {
        info: '4、参与内河航运项目，编写初版方案，结合绿色节能、环境变化、应急响应、应急指挥、航道管理等主题，设计数字化系统并编写相应的一套航运的数字化解决方案，得到客户的认可。',
        title: ''
      },
      {
        info: '5、参与危化品仓库预约管理系统项目，负责需求梳理、逻辑梳理、产品设计等工作,帮助客户解决实际问题。',
        title: ''
      },
      {
        info: '6、参与危化品进销存项目，负责需求梳理、逻辑梳理、产品设计等工作,帮助公司初步搭建一套自研的轻量级进销存系统，为打造危化品行业的全套供应链业务场景提供支撑。',
        title: ''
      }
    ],
    icon: React.createElement(AiOutlineFundProjectionScreen),
    honors: '',
    date: '2023年11月 - 2024年8月'
  },
  {
    title: '项目经理助理&地图前端开发工程师',
    location: '苏州测绘地理信息有限公司',
    description: [
      {
        info: '1、参与多个重点项目的需求分析、方案编制和项目管理工作，包括苏州工业园区数字孪生"视境"评估决策系统项目、苏州工业园区集约平台项目、园区维稳平台项目和苏州工业园区楼宇经济项目等。',
        title: ''
      },
      {
        info: '2、在数字孪生"视境"评估决策系统项目中，我负责图层开发、历史流可视化、视频质态评估和模拟相机评估推演等关键功能模块的开发,并成功对接数字化平台、数字孪生和地图平台等,实现了图像接力目标。',
        title: ''
      },
      {
        info: '3、在苏州工业园区集约平台项目中，我主导了企业端和政务端的功能分析、用户体验优化、迭代评估等工作,并统筹了Web端的审批模块的开发，确保了项目的顺利实施。',
        title: ''
      },
      {
        info: '4、在园区维稳平台项目中，梳理了原型框架，并带领UI团队优化了子页面的显示内容和交互方式，重构已有代码，满足了客户的需求。',
        title: ''
      },
      {
        info: '5、在苏州工业园区楼宇经济项目中，负责了楼宇调查信息页面的开发工作,并配合项目经理完成了企业填报、功能区审核、综合评价和数据汇总分析等全流程信息化管理体系的搭建。',
        title: ''
      }
    ],
    icon: React.createElement(FaVuejs),
    honors: '',
    date: '2022年6月 - 2023年9月'
  },
  {
    title: '地理信息科学硕士',
    location: '英国曼彻斯特大学',
    description: [
      {
        info: 'GIS、遥感应用、空间生态学、地理信息系统与环境应用、数字图像处理与数据分析等；获Merit，班级排名前10；',
        title: ''
      }
    ],
    icon: React.createElement(LuGraduationCap),
    honors: '',
    date: '2020年9月 - 2021年12月'
  }
  // {
  //   title: '遥感科学与技术学士',
  //   location: '新疆大学',
  //   description: [
  //     {
  //
  //       info: '地理信息系统、水利测量学、地貌学、数据库原理、植物遥感、光学遥感等；GPA 为3.3/4.0，平均分为84/100，专业排名前 5，成绩优异；',
  //       title: ''
  //     },
  //     {
  //
  //       info: '获优秀毕业论文（校级），同年 1 月获三好学生（校级）；',
  //       title: '2019.06'
  //     },
  //     {
  //
  //       info: '年度蝉联新疆维尔自治区励志奖学金（省级）；',
  //       title: '2017-2018'
  //     },
  //     {
  //
  //       info: '获新疆大学资源与环境科学学院优秀团员（院级）、优秀班干部（院级）；',
  //       title: '2016.09'
  //     }
  //   ],
  //   icon: React.createElement(LuGraduationCap),
  //   date: '2015年9月 - 2021年6月'
  // }
]

export const skillsData = [
  'MapBox',
  'MapGIS',
  'ArcGIS',
  'CAD',
  'ArcGIS API',
  'HTML',
  'CSS',
  'JavaScript',
  'Vue2',
  'MySQL',
  'UI/UX',
  'X-mind',
  'Axure',
  '禅道',
  '墨刀',
  '蓝湖',
  '方案策划',
  '场景设计'
]
export const skillsDataEn = [
  'MapBox',
  'MapGIS',
  'ArcGIS',
  'CAD',
  'ArcGIS API',
  'HTML',
  'CSS',
  'JavaScript',
  'Vue2',
  'MySQL',
  'UI/UX',
  'X-mind',
  'Axure',
  'ZenTao',
  'Mockplus',
  'LanHu',
  'Solution planning',
  'Scenario design'
]
export const projectsData = [
  {
    title: 'Hazardous Materials Inventory Management System',
    title_zh: '危化品进销存系统',
    description:
      'I contributed to the initial development of a lightweight inventory management system for small hazardous materials enterprises, addressing their supply chain needs in procurement, sales, warehousing, inventory, data, compliance, and safety.',
    desc_zh:
      '为了支撑公司打造危化品行业的全套供应链业务场景，初步搭建一套自研的轻量级进销存系统，目标客户为小型仓库的危化品企业，主要满足小型危化品公司采购、销售、仓库配货、全局库存管理、企业数据统计、合规及安全管理等功能',
    tags: [
      {
        zh: '供应链管理',
        en: 'Supply Chain Management'
      },
      {
        zh: '产品设计',
        en: 'Product Design'
      },
      {
        zh: '业务需求调研',
        en: 'Business Requirements Analysis'
      },
      {
        zh: '信息化管理',
        en: 'Informatization Management'
      },
      {
        zh: '第三方对接',
        en: 'Third-Party Integration'
      }
    ],
    imageUrl: HMIMSImage,
    projectUrl: 'https://mmtdgk.axshare.com',
    demoUrl: 'https://kdocs.cn/l/cauir2F5Q5dO'
  },
  {
    title:
      'ICIMS Intelligent Hazardous Materials Traceability Code and Dynamic Inbound and Outbound Management System.',
    title_zh: 'icims智能危险化学品追溯码及动态出入库管理系统',
    description:
      'Developed a warehouse management system for hazardous materials production and storage enterprises. This system complies with the hazardous materials traceability code management and dynamic inbound and outbound requirements issued by the Shanghai Emergency Bureau. It assists production enterprises in batch applying for traceability codes within the emergency bureau system, as well as downloading, managing, and printing hazardous materials traceability codes. Additionally, it enables automatic reporting of inbound and outbound operations to the emergency bureau for hazardous materials production and storage enterprises.',
    desc_zh:
      '为危化品生产及仓储企业打造一个仓管系统，该系统满足上海应急局所下发的危化品追溯码管理及动态出入库要求，帮助生产企业在应急局系统批量申请追溯码，下载、管理、打印危化品追溯码；并为危化品生产及仓储企业实现危化品出入库自动上报至应急局的动态出入库功能',
    tags: [
      {
        zh: '危化品追溯码',
        en: 'Hazardous Chemicals Traceability Code'
      },
      {
        zh: '动态出入库管理',
        en: 'Dynamic Warehousing Management'
      },
      {
        zh: '定制化解决方案',
        en: 'Customized Solutions'
      },
      {
        zh: 'WMS',
        en: 'WMS'
      },
      {
        zh: '通用功能设计',
        en: 'Multi-Version System Development'
      }
    ],
    imageUrl: ICIMSImage,
    projectUrl: '',
    demoUrl: 'https://kdocs.cn/l/ca1b4YFNlAll'
  },
  {
    title: 'Hazardous Materials Warehouse Reservation System',
    title_zh: '危化品仓库预约系统',
    description: `Developed a comprehensive digital system for a third-party hazardous materials storage company in Shanghai, which manages the entire process of owner appointment for delivery/pickup and vehicle entry for on-site operations on the reservation day.
            `,
    desc_zh:
      '为上海某第三方危化品仓储公司打造的一套货主预约送货/提货及当日车辆进入现场作业的全流程管理的数字化系统',
    tags: [
      {
        zh: '现场调研',
        en: 'Site Investigation'
      },
      {
        zh: '送货/提货预约系统',
        en: 'Delivery/Pick-up Appointment System'
      },
      {
        zh: '业务流程优化',
        en: 'Business Process Optimization'
      },
      {
        zh: '车辆排队叫号与预约排班',
        en: 'Vehicle Queuing and Appointment Scheduling'
      },
      {
        zh: '通用解决方案',
        en: 'Generic Solution'
      }
    ],
    imageUrl: HMWRSImage,
    projectUrl: '',
    demoUrl: 'https://kdocs.cn/l/ci5H2OeyO3Eg'
  },
  {
    title: 'Inland Shipping Project',
    title_zh: '内河航运',
    description:
      'Designed a digital system focused on inland shipping, incorporating themes such as green energy conservation, environmental changes, emergency response, emergency command, and channel management, and developed a corresponding set of digital solutions for the shipping industry.',
    desc_zh:
      '以内河航运为主体，结合绿色节能、环境变化、应急响应、应急指挥、航道管理等主题，设计的数字化系统并编写相应的一套航运的数字化解决方案。',
    tags: [
      {
        zh: '政策研读',
        en: 'Policy Research'
      },
      {
        zh: '安全保障应急管控',
        en: 'Emergency Management and Control for Safety Assurance'
      },
      {
        zh: '系统功能设计',
        en: 'System Functionality Design'
      },
      {
        zh: '解决方案编制',
        en: 'Solution Development'
      },
      {
        zh: '需求响应',
        en: 'Requirement Response'
      }
    ],
    imageUrl: ISPImage,
    projectUrl: '',
    demoUrl: 'https://kdocs.cn/l/cpFzc83FjWWG'
  },
  {
    title:
      'Intelligent Scheduling and Full-Process Control System for Hazardous Materials Storage Area Operations',
    title_zh: '危化品库区作业智能调度全流程管控系统',
    description: `A hazardous materials tank company faced challenges due to the upper management's push for an employee attendance system, which rendered the existing assessment model inadequate. Coupled with issues such as a fragmented system, poor information flow, and low operational efficiency, the company decided to develop a comprehensive digital management system for the entire operational process.`,
    desc_zh:
      '某危化品储罐公司面临上层集团推进员工考勤制度，导致公司现有考核模式难以满足，加上现有系统分散、信息不畅，以及作业工作效率低等问题，决定搭建一套综合性数字化作业全流程管理系统。',
    tags: [
      {
        zh: '现场调研',
        en: 'Site Investigation'
      },
      {
        zh: '业务流程分析',
        en: 'Business Process Analysis'
      },
      {
        zh: '需求分析',
        en: 'Requirement Analysis'
      },
      {
        zh: '可视化设计',
        en: 'Visualization Design'
      },
      {
        zh: '解决方案编制',
        en: 'Solution Development'
      }
    ],
    imageUrl: ISFCSHMSAOImage,
    projectUrl: '',
    demoUrl: 'https://kdocs.cn/l/cdsIuX3hyhjP'
  },
  {
    title: 'Suzhou Industrial Park Vision Platform',
    title_zh: '苏州园区视境平台',
    description:
      'Collaborated with the Suzhou Industrial Park Sub-bureau to address issues of resource waste due to unreasonable early monitoring network planning, which resulted in multiple devices per pole and blind spots. Developed the Vision Platform to reallocate monitoring resources and simulate the completion of blind spots, providing supporting materials for future upgrades and enhancements of the monitoring system.',
    desc_zh:
      '与苏州园区分局合作，解决早期监控网规划不合理出现的一杆多机的资源浪费及存在盲区的问题，搭建视境平台以重新规划监控资源，同时模拟补全盲区，为之后监控的升级建设提供支撑材料。',

    tags: [
      {
        zh: '需求分析',
        en: 'Requirement Analysis'
      },
      {
        zh: '功能开发',
        en: 'Functional Development'
      },
      {
        zh: 'WEBGIS',
        en: 'Historical Visualization'
      },
      {
        zh: '视频质态评估',
        en: 'Video Quality Assessment'
      },
      {
        zh: '多平台对接',
        en: 'Platform Integration'
      }
    ],
    imageUrl: szSysImage,
    projectUrl: '',
    demoUrl: ''
  },
  {
    title: 'Suzhou Industrial Park Economic Intensive Project',
    title_zh: '苏州园区经济集约项目',
    description:
      'Based on the dual demand of "enterprise side + government side," developed a platform product that empowers both enterprises and government entities. This project incorporated the latest business management requirements and user feedback to enhance functionalities such as data aggregation methods, business process flows, evaluation system configuration, and historical data analysis.',
    desc_zh:
      '基于“企业端+政务端”的双重需求背景下，搭建可为企业端、政务端赋能的平台产品，并结合最新业务管理需求与用户反馈，实现数据汇聚方式、业务功能流程、评价体系配置、历史数据分析等功能强化；	',

    tags: [
      {
        zh: '需求调研',
        en: 'Requirement Research'
      },
      {
        zh: '功能分析',
        en: 'Functional Analysis'
      },
      {
        zh: '用户体验',
        en: 'User Experience'
      },
      {
        zh: '产品开发',
        en: 'Product Development'
      },
      {
        zh: '项目管理',
        en: 'Project Management'
      }
    ],
    imageUrl: szSysImage2,
    projectUrl: '',
    demoUrl: ''
  },
  {
    title: 'Suzhou Industrial Park Building Project',
    title_zh: '苏州园区楼宇项目',
    description:
      'Based on the comprehensive evaluation methods for building economy, developed a digital management and information platform for comprehensive evaluation, aimed at achieving an overall understanding and scientific assessment of the current state of the building economy.',
    desc_zh:
      '立足楼宇经济综合评价办法，构建数字化管理与综合评价信息化平台，旨在实现对楼经济现状的总体掌握与科学评价',
    tags: [
      {
        zh: '可视化图表',
        en: 'Building Economy Information Analysis'
      },
      {
        zh: '综合评估',
        en: 'Comprehensive Evaluation'
      },
      {
        zh: '需求梳理',
        en: 'Requirement Gathering'
      },
      {
        zh: '页面开发',
        en: 'Page Development'
      },
      {
        zh: '项目管理',
        en: 'Project Management'
      }
    ],
    imageUrl: szSysImage3,
    projectUrl: '',
    demoUrl: ''
  }
]
