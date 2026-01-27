import { Quote, Linkedin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const Recommendations = () => {
  const recommendations = [
    {
      name: 'Biren Rajdev',
      position: 'Director - Data Science',
      company: 'UnitedHealth Group',
      text: "Tushar worked as a data scientist in my team during his 1+ year stint with Optum (UHG). During this time, Tushar demonstrated that he is a thorough and detail oriented person. He worked diligently on the 'Enhanced Search'... ",
      image: '/tushar-portfolio/recommendations/biren.png',
      linkedinUrl: 'https://www.linkedin.com/in/birenrajdev/'
    },
    {
      name: 'Manoj Agarwal',
      position: 'Manager - Data Science',
      company: 'UnitedHealth Group',
      text: 'Tushar is a great guy, he is a phenomenal analytical mind set person with sound hands on Machine Learning, NLP, Deep Learning. His deep Understanding of conversational data and health care domain helped us to bring great values... ',
      image: '/tushar-portfolio/recommendations/manoj.png',
      linkedinUrl: 'https://www.linkedin.com/in/manoj-agarwal-a044053b/'
    }
  ]

  return (
    <section id='recommendations' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <div className='text-center space-y-4 mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Recommendations <span className='text-primary'>Received</span>
          </h2>
          <p className='text-lg text-muted-foreground'>
            What colleagues and collaborators say about working with me
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
          {recommendations.map((rec, index) => (
            <Card
              key={index}
              className='gradient-border transition-all duration-300 animate-fade-in card-hover'
              // className='gradient-border p-6 card-hover'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className='p-6'>
                <Quote className='w-8 h-8 text-tech-accent mb-4 opacity-50' />

                <p className='text-tech-text-muted mb-6 leading-relaxed'>
                  "{rec.text}"
                </p>

                <div className='flex items-center gap-4 pt-4 border-t border-tech-accent/10'>
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className='w-12 h-12 rounded-full object-cover border-2 border-tech-accent/30'
                  />
                  <div className='flex-1'>
                    <h4 className='font-semibold text-tech-text'>{rec.name}</h4>
                    <p className='text-sm text-tech-text-muted'>
                      {rec.position}
                    </p>
                    <p className='text-sm text-tech-accent'>{rec.company}</p>
                  </div>
                  <a
                    href={rec.linkedinUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:scale-110 transition-transform'
                    aria-label={`View ${rec.name}'s LinkedIn profile`}
                  >
                    <Linkedin className='w-5 h-5 text-tech-accent opacity-70 hover:opacity-100' />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recommendations
