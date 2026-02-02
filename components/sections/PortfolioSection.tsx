'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { caseStudiesDetailed } from '@/data/caseStudies'
import { ArrowRight } from 'lucide-react'

export function PortfolioSection() {
  const shouldReduceMotion = useReducedMotion()
  const projects = caseStudiesDetailed.slice(0, 6)

  return (
    <section className="relative w-full bg-white overflow-hidden py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* 50/50 split: text left, images right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-gold text-sm font-medium uppercase tracking-[0.2em] mb-6 block">
              Udvalgte projekter
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] tracking-tight mb-8">
              Websites der
              <br />
              <span className="text-navy/40">arbejder for dig.</span>
            </h2>

            <div className="space-y-4 text-black/50 text-base md:text-lg leading-relaxed mb-10">
              <p>
                Hvert projekt starter med en forståelse af din virksomhed — hvem dine kunder er, og hvad dit website skal gøre for dem.
              </p>
              <p>
                Vi designer og bygger fra bunden, så resultatet passer til dig — ikke til et template.
              </p>
            </div>

            <Link
              href="/cases"
              className="group inline-flex items-center gap-3 text-navy font-semibold text-lg hover:text-gold transition-colors duration-300"
            >
              <span>Se alle projekter</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Asymmetric image collage */}
          <div className="space-y-3 md:space-y-4">
            {/* Row 1: Full width */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
            >
              <Link href={`/cases/${projects[0].slug}`} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={projects[0].imageUrl}
                    alt={projects[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 650px"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                </div>
              </Link>
            </motion.div>

            {/* Row 2: Two columns */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {projects.slice(1, 3).map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: i * 0.1 }}
                >
                  <Link href={`/cases/${project.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover object-[center_top] transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 50vw, 320px"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Row 3: Asymmetric 3/5 + 2/5 */}
            <div className="grid grid-cols-5 gap-3 md:gap-4">
              <motion.div
                className="col-span-3"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
              >
                <Link href={`/cases/${projects[4].slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={projects[4].imageUrl}
                      alt={projects[4].title}
                      fill
                      className="object-cover object-[85%_top] transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 60vw, 380px"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                  </div>
                </Link>
              </motion.div>

              <motion.div
                className="col-span-2"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.1 }}
              >
                <Link href={`/cases/${projects[3].slug}`} className="group block h-full">
                  <div className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden">
                    <Image
                      src={projects[3].imageUrl}
                      alt={projects[3].title}
                      fill
                      className="object-cover object-[center_top] transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 40vw, 250px"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                  </div>
                </Link>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
