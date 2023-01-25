import MyCard from "../components/UI/Cards/MyCard"

const Home = () => {

  const imageRandom = [
    {id: 1, img: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'},
    {id: 2, img: 'https://i.picsum.photos/id/214/200/300.jpg?hmac=XWc2pr4xabaprbyVoKEw9VsBDZ0ibySoVWMJaKokGRU'},
    {id: 3, img: 'https://i.picsum.photos/id/28/200/300.jpg?grayscale&hmac=9F6tD_nFqjwG3ehMVYVewKHSGkXtPFkrOD87oKtjdWQ'}
  ]

  return (
    <div className='home'>
      <h2>Hello Next Js 13</h2>
      <div className='home_card'>
        {imageRandom.map((item) => {
          return (
            <MyCard key={item.id} img={item.img} />
          )
        })}
      </div>
    </div>
  )
}

export default Home