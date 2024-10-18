import { FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { projectsData } from '@/lib/data'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { useLocale } from 'next-intl'

const Projects = () => {
  const container: any = useRef()
  const activeLocale = useLocale()

  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: '20% bottom',
            end: 'bottom top'
            // scrub: true
          }
        })
        .from(['.section__header .sub__title', '.section__header .description'], {
          opacity: 0,
          y: 30,
          stagger: 0.5
        })
        .from('.project', {
          opacity: 0,
          scale: 0.7,
          stagger: 0.5
        })
    },
    { scope: container }
  )
  return (
    <section className="bg-primary bg-[url('/bg2.png')] bg-cover bg-no-repeat" ref={container}>
      <div className="w-full max-w-[1200px] mx-auto p-[50px] pt-[50px] pb-[120px] px-[20px] overflow-hidden">
        <div className="section__header text-white text-center max-w-[600px] mx-auto">
          <h2 className="sub__title text-2xl font-medium">My Recent Projects</h2>
          <p className="description flex-1 text-base mt-2.5">
            Explore my latest work, blending creativity and code for functional, responsive websites
            with clean design and seamless user experiences.
          </p>
        </div>
        <div className="project grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-[900px] mx-auto mt-16 ">
          {projectsData.map((project, index) => (
            <div
              className=" flex flex-col justify-between items-stretch bg-white overflow-hidden rounded-[1.2rem] shadow-custom transition-transform duration-300 ease-in-out group-hover:scale-110 dark:text-white dark:bg-white/10"
              key={index}>
              <Link href={project.projectUrl} target="_blank" className="overflow-hidden group">
                <Image
                  className="transform transition-transform duration-300 group-hover:scale-110"
                  src={project.imageUrl}
                  alt={activeLocale === 'zh' ? project.title_zh : project.title}
                  quality={95}
                />
              </Link>
              <div className=" flex flex-col justify-between items-stretch flex-1 p-5">
                <h3 className="font-semibold text-[16px] line__clamp__1">
                  {activeLocale === 'zh' ? project.title_zh : project.title}
                </h3>
                {/* 描述 */}
                <p className="description text-#a1a0a0/20 flex-1 text-base mt-2.5 break-all line__clamp__4 dark:text-white/80 cursor-pointer ">
                  {activeLocale === 'zh' ? project.desc_zh : project.description}
                </p>
                {/* tags */}
                <div className="mt-2  w-full  justify-center items-center ">
                  <ul className="flex flex-wrap  gap-2">
                    {project.tags.map((tag, index) =>
                      activeLocale === 'zh' ? (
                        <li
                          className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 cursor-pointer tooltip"
                          key={index}>
                          {tag.zh}
                        </li>
                      ) : (
                        tag.en && ( // 只有当 tag.en 不为空时才渲染该 li
                          <li
                            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 cursor-pointer tooltip"
                            key={index}>
                            {tag.en}
                          </li>
                        )
                      )
                    )}
                  </ul>
                </div>
                {/* 跳转链接 */}
                <div className="flex mt-5 gap-3">
                  {project.projectUrl && (
                    <Link
                      href={project.projectUrl}
                      target="_blank"
                      className="text-[#5100ff] p-0 flex items-center justify-center gap-2.5 hover:underline underline-offset-2 break-keep dark:text-blue-400 ">
                      <FaExternalLinkAlt /> prototype
                    </Link>
                  )}
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      className="text-[#5100ff] p-0 flex items-center justify-center gap-2.5 hover:underline underline-offset-2 break-keep dark:text-blue-400 ">
                      <FaExternalLinkAlt /> View Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
