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
        info: 'Responsible for the design and implementation of IoT and software solutions, successfully promoted the establishment of key projects, and significantly improved the efficiency of customer business processes. Through in-depth demand analysis and customer interviews, we identify and solve major pain points, assist the development team in writing plans, and ensure the effective implementation of project requirements. At the same time, we formulate project solutions, produce PPTs to promote cooperation, collaborate with the back-end team to build business frameworks, clarify technical indicators, reduce development cycles, and ultimately achieve high customer satisfaction.',
        title: ''
      }
      // {
      //   info: '1. Design and implement IoT and software solutions, promote key project approval, improve customer business process efficiency, conduct demand analysis, identify and solve major pain points.',
      //   title: ''
      // },
      // {
      //   info: '2. Develop project solutions, create PPTs to promote cooperation, ensure the feasibility of project construction, and gain high customer satisfaction.',
      //   title: ''
      // },
      // {
      //   info: '3.Collaborate with the back-end team to build the business framework, clarify technical indicators, ensure the implementation of requirements, and optimize the development cycle.',
      //   title: ''
      // },
      // {
      //   info: '4.Design a system prototype, simulate customer usage scenarios, and demonstrate solutions through flowcharts and mind maps to enhance customer understanding.',
      //   title: ''
      // }
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
        info: 'Participate in demand analysis, sort out business processes, discover pain points, and assist the team in architecture analysis and blueprint drawing. Formulate project implementation plans, promote cooperation, ensure project feasibility and successful delivery. Responsible for front-end development, implement requirements, and improve user experience. Assist project managers in promoting the informatization construction of Suzhou Industrial Park, participate in the construction and function development of digital twin systems and public security systems, and improve system stability.',
        title: ''
      }
      // {
      //   info: '1. Participate in demand analysis, sort out business processes, discover demand pain points, assist business and development teams in architecture analysis and blueprint drawing, and improve project success rate.',
      //   title: ''
      // },
      // {
      //   info: '2. Develop project implementation plans, draw up PPTs to promote collaboration, ensure project feasibility and implementation plans, and successfully deliver multiple projects.',
      //   title: ''
      // },
      // {
      //   info: '3. Responsible for front-end project development, ensuring requirements are met, improving user experience, and reducing user feedback time.',
      //   title: ''
      // },
      // {
      //   info: '4. Assist the project manager in carrying out the informatization construction of Suzhou Industrial Park, participate in the construction and functional development of the digital twin system and public security system, and improve system stability.',
      //   title: ''
      // }
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
        info: '负责物联网及软件解决方案的设计与实施，成功推动关键项目立项，显著提升客户业务流程效率。通过深入需求分析和客户走访，识别并解决主要痛点，协助开发团队编写方案，确保项目需求有效落实。同时，制定项目解决方案，制作PPT推动合作，协同后端团队搭建业务框架，明确技术指标，减少开发周期，最终实现客户高满意度。',
        title: ''
      }
      // {
      //   info: '1、设计并实施物联网及软件解决方案，推动关键项目立项，提升客户业务流程效率，进行需求分析，识别并解决主要痛点。',
      //   title: ''
      // },
      // {
      //   info: '2、制定项目解决方案，制作PPT推动合作，确保项目建设的可行性，获得客户高度满意。',
      //   title: ''
      // },
      // {
      //   info: '3、协同后端团队搭建业务框架，明确技术指标，确保需求落实，优化开发周期。',
      //   title: ''
      // },
      // {
      //   info: '4、设计系统雏形，模拟客户使用场景，通过流程图和思维导图展示解决方案，提升客户理解。',
      //   title: ''
      // }
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
        info: '参与需求分析，梳理业务流程，挖掘痛点，协助团队进行架构分析与蓝图绘制。制定项目实施方案，推动合作，确保项目可行性并成功交付。负责前端开发，落实需求，提升用户体验。协助项目经理推进苏州工业园区信息化建设，参与数字孪生系统和公安系统的搭建与功能开发，提升系统稳定性。',
        title: ''
      }
      // {
      //   info: '1、参与需求分析，梳理业务流程，挖掘需求痛点，协助商务和开发团队进行架构分析与蓝图绘制，提升项目成功率。',
      //   title: ''
      // },
      // {
      //   info: '2、制定项目实施方案，绘制PPT推动合作，确保项目可行性与实施计划，成功交付多个项目。',
      //   title: ''
      // },
      // {
      //   info: '3、负责前端项目开发，确保需求落实，提升用户体验，减少用户反馈时间。',
      //   title: ''
      // },
      // {
      //   info: '4、协助项目经理开展苏州工业园区信息化建设，参与数字孪生系统和公安系统的搭建与功能开发，提升系统稳定性。',
      //   title: ''
      // }
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
      'The initial development of a lightweight inventory management system for small hazardous materials enterprises was contributed to, addressing their supply chain needs in procurement, sales, warehousing, inventory, data, compliance, and safety.',
    desc_zh:
      '为了支撑公司打造危化品行业的全套供应链业务场景，初步搭建一套自研的轻量级进销存系统，目标客户为小型仓库的危化品企业，主要满足小型危化品公司采购、销售、仓库配货、全局库存管理、企业数据统计、合规及安全管理等功能。',
    tags: [
      {
        zh: '供应链管理',
        en: ''
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
        en: ''
      },
      {
        zh: '第三方对接',
        en: ''
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
      '为危化品生产及仓储企业打造一个仓管系统，该系统满足上海应急局所下发的危化品追溯码管理及动态出入库要求，帮助生产企业在应急局系统批量申请追溯码，下载、管理、打印危化品追溯码；并为危化品生产及仓储企业实现危化品出入库自动上报至应急局的动态出入库功能。',
    tags: [
      {
        zh: '危化品追溯码',
        en: ''
      },
      {
        zh: '动态出入库管理',
        en: ''
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
      '为上海某第三方危化品仓储公司打造的一套货主预约送货/提货及当日车辆进入现场作业的全流程管理的数字化系统。',
    tags: [
      {
        zh: '现场调研',
        en: 'ENHANCE EFFICIENCY'
      },
      {
        zh: '送货/提货预约系统',
        en: 'PRODUCT DESIGN'
      },
      {
        zh: '业务流程优化',
        en: ''
      },
      {
        zh: '车辆排队叫号与预约排班',
        en: ''
      },
      {
        zh: '通用解决方案',
        en: ''
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
        en: ''
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
        en: ''
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
        en: ''
      },
      {
        zh: '需求分析',
        en: ''
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
        en: ''
      },
      {
        zh: '视频质态评估',
        en: ''
      },
      {
        zh: '多平台对接',
        en: ''
      }
    ],
    imageUrl: szSysImage,
    projectUrl: 'https://22nok6.axshare.com',
    demoUrl: ''
  },
  {
    title: 'Suzhou Industrial Park Economic Intensive Project',
    title_zh: '苏州园区经济集约项目',
    description:
      'Based on the dual demand of "enterprise side + government side," developed a platform product that empowers both enterprises and government entities. This project incorporated the latest business management requirements and user feedback to enhance functionalities such as data aggregation methods, business process flows, evaluation system configuration, and historical data analysis.',
    desc_zh:
      '基于“企业端+政务端”的双重需求背景下，搭建可为企业端、政务端赋能的平台产品，并结合最新业务管理需求与用户反馈，实现数据汇聚方式、业务功能流程、评价体系配置、历史数据分析等功能强化。	',

    tags: [
      {
        zh: '需求调研',
        en: 'Requirement Research'
      },
      {
        zh: '功能分析',
        en: ''
      },
      {
        zh: '用户体验',
        en: ''
      },
      {
        zh: '产品开发',
        en: ''
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
      '立足楼宇经济综合评价办法，构建数字化管理与综合评价信息化平台，旨在实现对楼经济现状的总体掌握与科学评价。',
    tags: [
      {
        zh: '可视化图表',
        en: ''
      },
      {
        zh: '综合评估',
        en: ''
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
        en: ''
      }
    ],
    imageUrl: szSysImage3,
    projectUrl: '',
    demoUrl: ''
  }
]
