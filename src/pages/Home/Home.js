import Banner from '../../components/Banner/Banner'
import Thumb from '../../components/Thumb/Thumb'
import banner from '../../assets/images/Header_Banner.png'
import apartmentList from '../../datas/apartmentList.json'
import './Home.css'

export default function Home() {
  return (
    <div className='kasa-root'>
      <Banner src={banner} title='Chez vous, partout et ailleurs'/>
      <div className='kasa-root-rental'>
        {apartmentList.map(({ id, title, cover}) =>
          <Thumb key={id} id={id} title={title} cover={cover} />
        )}
      </div>
    </div>
  )
}
