import backgroundImg from '../../assets/business-strategy/news-bg.png'

export default function NewsSection() {
  return (
    <section className="border ">
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-20 border bg-[#19324d4d]">
        <div>
          <img src={backgroundImg} 
          alt="background image" 
          className='w-full h-auto mb-8 object-cover'
          />
        </div>
        <h2 className="text-3xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
      </div>
    </section>
  )
}
