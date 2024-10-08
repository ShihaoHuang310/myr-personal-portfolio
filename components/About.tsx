'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { useLocale, useTranslations } from 'next-intl'

export default function About() {
  const { ref } = useSectionInView('About')
  const t = useTranslations('AboutSection')
  const sectionLan = useTranslations('SectionName')
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>{sectionLan('about')}</SectionHeading>
      {activeLocale == 'zh' ? (
        // <p>{t("desc")}</p> //这样一段话没法分段
        <div className="flex flex-col gap-2">
          <div>
            作为一名全面发展的GIS专业人才，结合近年来的工作经验，目前我拥有丰富的大型项目搭建经验。
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在解决方案工程师的角色中，我善于结合客户业务场景，从0到1制定方案策略，同时擅长业务流程梳理、产品功能设计。同时，凭借出色的跨部门资源整合能力，我能高效地推动项目落地。在解决方案制作方面，我擅长根据客户需求抽离出实际问题，通过实地查看及客户调研，搜集相关资料，整理业务流程后编写切实可行的解决方案。结合过去的工作经验，具备一定的产品能力，能够使用多种产品工具，如禅道、X-mind、Axure、markdown等。
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在曾经的GIS开发工程师角色中，我曾设计项目原型并与UI设计师共同完善设计图，并与后端工程师协作开发产品。我熟练掌握多种编程工具和数据库系统，如MySQL、HTML/CSS/JavaScript、Vue等。
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我在前端开发和解决方案工程师的工作中，积累了丰富的实践经验。我曾参与多个重点项目的需求分析、产品规划、解决方案编制、项目管理等工作。
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如上海沪万智能科技公司主要做危化品仓储方向，参与过危化品进销存系统、icims智能危险化学品追溯码及动态出入库管理系统、危化品仓库预约系统等系统的设计与推进；同时也做过企业数字化流程管理方向，如危化品库区作业智能调度全流程管控系统等；在运输方面做过内河航运方向的数字化系统解决方案。
          </div>
          <div>这些项目经验不仅锻炼了我的设计能力，也培养了我出色的沟通及协作能力。</div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，我的语言和办公技能也非常出色。我曾在雅思考试中获取7分，并且在国外留学期间做过5个月的part-time
            job，因此，英语可作为工作语言。同时我也精通OFFICE办公软件，擅长文字编写、数据可视化和PPT制作及汇报。
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总的来说，我是一名全面发展的地理信息科学专业人才，具备丰富的项目经验和出色的技术技能。我相信凭借自己的专业优势,一定能为贵公司带来卓越的贡献，胜任解决方案工程师和产品经理的工作。
          </div>
        </div>
      ) : (
        <>
          <p className="mb-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a{' '}
            <span className="font-medium italic">
              well-rounded GIS professional with extensive experience in large-scale project
              implementation
            </span>{' '}
            , I have developed a strong foundation in the role of a Solutions Engineer. I excel at
            formulating strategic solutions from the ground up, tailored to the specific business
            scenarios of clients. My expertise includes business process analysis and product
            feature design. Additionally, my exceptional ability to integrate cross-departmental
            resources enables me to efficiently drive project execution.
          </p>

          <p className="mb-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In terms of solution development,
            <span className="font-medium italic">
              I am adept at identifying real issues based on client needs.
            </span>{' '}
            I am adept at identifying real issues based on client needs. By conducting on-site
            assessments and client interviews, I gather relevant information, streamline business
            processes, and craft practical solutions. Drawing from my past work experience, I
            possess a solid understanding of product capabilities and am proficient in various
            product tools such as ZenTao, X-mind, Axure, and Markdown.
          </p>

          <p className="mb-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="font-medium italic">
              In my previous role as a GIS Development Engineer, I designed project prototypes and
              collaborated with UI designers to refine design specifications, while also working
              closely with backend engineers to develop products.
            </span>{' '}
            I am well-versed in multiple programming tools and database systems,including
            HTML,CSS,JavaScript、MySQL and Vue.
          </p>

          <p className="mb-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
            <span className="font-medium italic">
              My experience in front-end development and as a Solutions Engineer has equipped me
              with a wealth of practical knowledge.
            </span>{' '}
            I have participated in several key projects involving requirements analysis, product
            planning, solution formulation, and project management. For instance, at Shanghai Huwan
            Intelligent Technology Co., I focused on hazardous materials storage, contributing to
            the design and implementation of systems such as the hazardous materials inventory
            management system, ICIMS intelligent hazardous materials traceability code, dynamic
            inbound and outbound management system(WMS), and the hazardous materials warehouse
            reservation system. I have also worked on digital management solutions for hazardous
            materials tank operations, including a comprehensive control system for intelligent
            scheduling in hazardous materials storage areas, as well as digital system solutions for
            inland shipping(TMS).
          </p>
          <p className="mb-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="font-medium italic">
              These project experiences have not only honed my design skills but have also fostered
              my excellent communication and collaboration abilities.
            </span>{' '}
            Furthermore, I possess strong language and office skills. I achieved a score of 7 in the
            IELTS exam and worked part-time for five months during my studies abroad, allowing me to
            use English as a working language. I am also proficient in Microsoft Office, excelling
            in document preparation, data visualization, and creating and presenting PPT.
          </p>
          <p className="mb-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
            <span className="font-medium italic">
              In summary, I am a well-rounded GIS professional with extensive project experience and
              proficient technical skills.
            </span>{' '}
            I am confident that my professional strengths and work experience will enable me to make
            significant contributions to your company and excel in the roles of Solutions Engineer
            and Product Manager.
          </p>
        </>
      )}
    </motion.section>
  )
}
