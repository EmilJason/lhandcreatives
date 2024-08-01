import style from './Card.module.css'
import sectionStyles from './Section.module.css'
// import secImg1 from '../assets/img/section/section-img1.png'
// import secImg2 from '../assets/img/section/section-img2.png'
import secImg1 from '../assets/img/section/section-img1@2x.png'
import secImg2 from '../assets/img/section/section-img2@2x.png'

const sectionData=[
    {
        title: 'Card Title',
        description: 'Lorem ipsum dolor sit amet, ne quando populo qui. Stet detraxit deseruisse nec ne. Eum eu altera deterruisset, quas augue graecis ne per, quo aeterno mentitum scribentur ex. Cum propriae periculis assueverit ea, in iriure accusata ius. Causae blandit argumentum sed at, appellantur liberavisse consectetuer ei cum.',
        imgSrc: secImg1,
    },
    {
        title: 'Card Title',
        description: 'Lorem ipsum dolor sit amet, ne quando populo qui. Stet detraxit deseruisse nec ne. Eum eu altera deterruisset, quas augue graecis ne per, quo aeterno mentitum scribentur ex. Cum propriae periculis assueverit ea, in iriure accusata ius. Causae blandit argumentum sed at, appellantur liberavisse consectetuer ei cum.',
        imgSrc: secImg2,
    }
]
const Section = () => {
  return (
    <div className={sectionStyles.section}>
      <h3>Section</h3>
      {
        sectionData.map((item, index) => {
          return (
            <div key={index} className={style.card}>
              <div className={style.img} style={{backgroundImage: `url(${item.imgSrc})`}}>
              </div>
              <div className={style.cardDetails}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Section
