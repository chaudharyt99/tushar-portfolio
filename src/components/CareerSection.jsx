import { Briefcase, Calendar, GraduationCap } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'Machine Learning Engineer',
    organization: 'iClinic Systems Inc.',
    period: "Nov '24 - Present",
    description:
      'Leading core AI/ML features development, deploying solutions to serving multiple concurrent users.',
    achievements: [
      'Building production-ready agentic workflows',
      'Deployed distributed data extraction pipelines',
      'Implemented LLM monitoring and observability'
    ]
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'NLP Research Assistant',
    organization: 'Sauder School of Business, UBC',
    period: "Mar '24 - Nov '24",
    description: 'Part of a research engagement led by Dr. Raynard',
    achievements: [
      'Developed models for sentiment analysis',
      'Analyzed policy shifts in "Cultivated Meat"'
    ]
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'ML Software Developer',
    organization: 'Faculty of Education, UBC',
    period: "May '24 - Aug '24",
    description:
      'Developed student facing chatbot using Llama 3 and RAG framework for UBC-MET program.',
    achievements: [
      'Automated 80% of user queries using chatbot',
      'Implemented semantic caching for reduced latency'
    ]
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Master of Data Science',
    organization: 'UBC, Vancouver',
    period: "Sep '23 - Nov '24",
    description:
      'Strong foundation in build AI models including LLMs, chatbots, RAG systems',
    achievements: ['GPA: 3.9/4.0']
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Data Scientist - Advanced Analytics',
    organization: 'Optum UnitedHealth Group',
    period: "Jun '22 - Aug '23",
    description:
      'Focused on developing deep learning, and natural language processing enterprise solutions.',
    achievements: [
      'Developed an enterprise search engine',
      'Developed query rewrite model for voice bots',
      'MLOps including automated model retraining'
    ]
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Associate Data Scientist',
    organization: 'Sunstone Education Technology',
    period: "Nov '20 - Jun '22",
    description:
      'Worked on Lead Scoring algorithms and customer segmentation models, improving user engagement metrics by 15% through A/B testing and model optimization.',
    achievements: [
      'Deployed models to production',
      'Collaborated with cross-functional teams',
      'Presented findings to senior leadership'
    ]
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Bachelor of Technology',
    organization: 'DTU, Delhi',
    period: "Aug '16 - Jul '20",
    description: 'Strong foundation in optimization, and mathematics.',
    achievements: ['GPA: 8.6/10.0']
  }
]

export const CareerSection = () => {
  return (
    <section id='experience' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <div className='text-center space-y-4 mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Career <span className='text-primary'>Journey</span>
          </h2>
          <p className='text-lg text-muted-foreground'>
            My professional experience and educational background
          </p>
        </div>

        <div className='relative'>
          <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent -translate-x-1/2' />
          <div className='md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent' />

          <div className='space-y-12'>
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isLeft = index % 2 === 0

              return (
                <article
                  key={`${exp.title}-${index}`}
                  className={`animate-fade-in ${
                    isLeft
                      ? 'md:pr-[calc(50%+3rem)] md:pl-0 pl-20'
                      : 'md:pl-[calc(50%+3rem)] md:pr-0 pl-20'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icons */}
                  <div className='absolute z-10 w-16 h-16 rounded-full bg-card flex items-center justify-center shadow-lg left-2 md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2'>
                    <Icon className='w-7 h-7 text-primary' />
                  </div>

                  {/* Item cards */}
                  <div
                    // className={`gradient-border bg-card/70 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 card-hover ${
                    className={`gradient-border p-6 card-hover transition-all duration-300 ${
                      isLeft ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div
                      className={`flex flex-wrap items-start gap-4 mb-4 ${
                        isLeft
                          ? 'md:flex-row-reverse md:justify-start justify-between'
                          : 'justify-between'
                      }`}
                    >
                      <div
                        className={isLeft ? 'md:text-right' : 'md:text-left'}
                      >
                        <h3 className='text-2xl font-semibold text-foreground group-hover:text-primary transition-colors'>
                          {exp.title}
                        </h3>
                        <p className='text-primary font-medium mt-1'>
                          {exp.organization}
                        </p>
                      </div>
                      <div className='flex items-center gap-2 text-muted-foreground bg-primary/10 px-4 py-2 rounded-full text-sm font-medium'>
                        <Calendar className='w-4 h-4' />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className='text-muted-foreground mb-4 leading-relaxed'>
                      {exp.description}
                    </p>

                    <div className='space-y-2'>
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={`${exp.title}-achievement-${achIndex}`}
                          className={`flex items-start gap-3 text-sm md:text-base text-foreground/90 ${
                            isLeft ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <span className='mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0' />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
