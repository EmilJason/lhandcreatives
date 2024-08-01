  import PropTypes from 'prop-types'
  import style from './Card.module.css'

  const Card = ({title, description, imgSrc}) => {
    return (
      <div className={style.card} >
        <div className={style.img} style={{backgroundImage: `url(${imgSrc})`}}>
        </div>
        <div className={style.cardDetails}>
        <h4>{title}</h4>
        <p>{description}</p>
        </div>
      </div>
    )
  }

  Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
  }

  export default Card
