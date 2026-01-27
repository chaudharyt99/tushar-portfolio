import { Briefcase, Code, Workflow } from 'lucide-react'

export const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      {' '}
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'> Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>
              Passionate Machine Learning Developer & Lifelong Learner
            </h3>

            <p className='text-muted-foreground'>
              I've been working in the AI/ML field for 5+ years now, mainly
              building end-to-end machine learning and applied AI solutions. I
              graduated in Nov'24 from UBC Vancouver with a Masters degree in{' '}
              <a
                href='https://masterdatascience.ubc.ca/programs/computational-linguistics'
                target='_blank'
                rel='noreferrer'
                className='underline'
              >
                {' '}
                Data Science and Computational Linguistics.{' '}
              </a>
            </p>

            <p className='text-muted-foreground'>
              I'm passionate about creating innovative solutions to complex
              problems, and I'm constantly learning new technologies and
              frameworks to stay at the forefront of the ever-evolving AI
              landscape.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href='#contact' className='cosmic-button'>
                {' '}
                Get In Touch
              </a>

              <a
                href='https://drive.google.com/file/d/1PZ-N-A37NhyNEVo-M8VbiHdjb1XAxfLA/view?usp=sharing'
                className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'
              >
                Download CV
              </a>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>
                    Machine Learning Development
                  </h4>
                  <p className='text-muted-foreground'>
                    Design and deploy models - transformers, classical ML to
                    solve real user problems.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Workflow className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>ML Systems & MLOps</h4>
                  <p className='text-muted-foreground'>
                    Ship reliable AI by automating training, CI/CD, and
                    monitoring with modern MLOps tools.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Project Management</h4>
                  <p className='text-muted-foreground'>
                    Leading projects end-to-end from conception to completion
                    with agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
