import { useTranslation } from 'react-i18next'
import Heading from '~/components/Heading'
import { contacts } from '~/constants'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section className="section-1">
      <Heading
        heading={t('home.sContact.heading')}
        subHeading={t('home.sContact.subHeading')}
        discover={t('home.sContact.discover')}
      />
      <div className="mt-16 flex flex-col items-start gap-20 lg:flex-row">
        <div className="flex flex-col items-start gap-10">
          {contacts.map((contact, index) => {
            return (
              <div className="flex flex-col gap-2" key={index}>
                {<contact.icon className="h-8 w-8" />}
                <h6 className="text-lg font-bold">{contact.heading}</h6>
                <p className="text-base">{contact.text}</p>
                <a className="cursor-pointer text-lg underline">{contact.link}</a>
              </div>
            )
          })}
        </div>
        <div className="h-[32rem] w-full overflow-hidden rounded-lg lg:max-w-[52rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8671732909424!2d105.74461987606858!3d21.038000087459547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345550b525aa03%3A0x3fdefc40f69a023a!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEZQVA!5e0!3m2!1svi!2s!4v1712204591699!5m2!1svi!2s"
            loading="lazy"
            height="100%"
            width="100%"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact
