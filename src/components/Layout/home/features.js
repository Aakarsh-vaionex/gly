import Card from '@/components/ui/card'
const features = [
  {
    name: 'July Edition Unlimited',
    description:
      'Purchase any 3 bundles and get exclusive discounts',
    image: 'https://m.media-amazon.com/images/I/81zsAfm-MuL.jpg'
  },
  {
    name: 'Insider',
    description:
      'Get Rewarded for being a fan',
    image: 'https://i.etsystatic.com/16893669/r/il/146757/2017617403/il_fullxfull.2017617403_la1o.jpg'
  },
  {
    name: 'Fanfest',
    description:
      'Be ready to have a gala and frenzy of events',
    image: 'https://media.wired.com/photos/62d7615394f7f03fb5e0c44e/master/w_2560%2Cc_limit/Comic-Con-Is-Back-Culture-1163223301.jpg'
  },
  {
    name: 'Meet your stars',
    description:
      'New movie releases,new movie stars ',
    image: 'https://thumbs.dreamstime.com/b/old-vintage-comic-book-superman-man-steel-his-secret-identity-have-adventure-as-fight-crime-super-powers-108851643.jpg'
  },
]

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Exciting news   
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2" >
            {features.map((feature,index) => (
              <Card
              key={index}
              title={feature.name}
              description={feature.description}
              image={feature.image}
            />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
