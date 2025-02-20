import './App.css'
import coverImage from './assets/coverImage.svg';
import userLogo from './assets/userLogo.jpeg';

function App() {
  var cardInfo = {
    coverImage: coverImage,
    category: 'Learning',
    publishDate: '21 Dec 2023',
    title: 'HTML & CSS foundations',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet accusamus rem voluptates maiores sed neque repellat, numquam quas quis ad cupiditate quidem. Repellat adipisci alias a, quibusdam beatae doloremque.",
    userLogo: userLogo,
    userName: 'Nikoloz Geladze'
  }

  return (
    <>
      <div className="card">
        <img className="cover-img" src={cardInfo.coverImage} alt="Cover Image"/>
        <h3 className='category'>{cardInfo.category}</h3>
        <h5 className='publish-date'>{cardInfo.publishDate}</h5>
        <h1 className='title'>{cardInfo.title}</h1>
        <p className='description'>{cardInfo.description}</p>
        <div className="user-info">
          <img className='user-img' src={cardInfo.userLogo} alt="User Logo"/>
          <h4 className='user-name'>{cardInfo.userName}</h4>
        </div>
      </div>
    </>
  )
}

export default App
