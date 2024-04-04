import { Button } from '~/components/Button'
import { services } from '~/constants'
import { CiBookmarkCheck } from 'react-icons/ci'

const Service = () => {
  return (
    <section className="section-2 bg-transparent dark:bg-transparent">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {services.map((service, index) => {
          return (
            <div className="bg-Light dark:bg-Dark flex flex-col gap-8 rounded-lg px-4 py-6" key={index}>
              <div className="">
                <CiBookmarkCheck className="h-12 w-12 text-primary" />
              </div>
              <div className="flex flex-col gap-6">
                <h4>{service.title}</h4>
                <p>{service.subTitle}</p>
              </div>
              <div className="mt-auto">
                <Button variant="outLine" size="lg">
                  {service.buttonText}
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Service
