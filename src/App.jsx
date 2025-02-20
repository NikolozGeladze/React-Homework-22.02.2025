import './App.css'
import coverImage from './assets/coverImage.svg';
import userLogo from './assets/userLogo.jpeg';

function App() {
  var body = document.body
  var cardInfo = {
    mainColor: '#F4D04E',
    coverImage: coverImage,
    category: 'Learning',
    publishDate: '21 Dec 2023',
    title: 'HTML & CSS foundations',
    description: "These languages are the backbone of every website, defining structure, content, and presentation.",
    userLogo: userLogo,
    userName: 'Nikoloz Geladze'
  }

  body.style.backgroundColor = cardInfo.mainColor;

  return (
    <>
      <div className="card">
        <img className="cover-img" src={cardInfo.coverImage} alt="Cover Image" />
        <h3 className="category" style={{ backgroundColor: cardInfo.mainColor }}>
          {cardInfo.category}
        </h3>
        <p className='publish-date'>Published {cardInfo.publishDate}</p>
        <h1 className='title'>{cardInfo.title}</h1>
        <p className='description'>{cardInfo.description}</p>
        <div className="user-info">
          <img className='user-img' src={cardInfo.userLogo} alt="User Logo" />
          <h4 className='user-name'>{cardInfo.userName}</h4>
        </div>
      </div>
    </>
  )
}

export default App
