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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为一名全面发展的地理信息系统专业人才，我拥有丰富的
            <span className="font-bold italic">大型项目搭建和产品设计经验</span>，
            <span className="font-bold italic">擅长挖掘客户需求并定制解决方案</span>
            ，推动项目高效落地。
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在业务方向上负责危化品仓储方向
            <span className="font-bold italic">（包含WMS、OMS及TMS系统）</span>
            ，对供应链一套业务熟悉并有自己的理解；曾经参与过智慧城市、智慧警务及政府、消防应急等G端项目，另外参与过企业数字化建设、企业ERP系统建设等B端项目。
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;英语流利，具备良好的文档编写和数据可视化能力，能够胜任
            <span className="font-bold italic">解决方案工程师和产品经理</span>的角色。
          </div>
        </div>
      ) : (
        <>
          <p className="mb-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As a comprehensively developed geographic
            information system professional, I have extensive implementation.
            <span className="font-bold italic">
              experience in large-scale project construction and product design. I am good at
              exploring customer needs and customizing solutions
            </span>
            to promote efficient project
          </p>

          <p className="mb-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <span className="font-medium italic">
              I am adept at identifying real issues based on client needs.
            </span>{' '} */}
            In terms of business direction, he is responsible for the direction of hazardous
            chemicals warehousing{' '}
            <span className="font-bold italic">(including WMS, OMS and TMS systems)</span>. He is
            familiar with and has his own understanding of a set of supply chain businesses; he has
            participated in G-sides such as smart cities, smart police and government, and fire
            emergency. projects, and has also participated in B-side projects such as enterprise
            digital construction and enterprise ERP system construction.
          </p>
          <p className="mb-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fluent in English, good document writing and
            data visualization skills, and capable of fulfilling the roles of{' '}
            <span className="font-bold italic">solution engineer and product manager.</span>
          </p>
        </>
      )}
    </motion.section>
  )
}
