import { useState } from 'react'
import './App.css'
import img from './assets/logo.png'
function App() {

    const[textPhrase, setTextPhrase] = useState('')
    const[category, setCategory] = useState(0)
 
    const allPhrases = [
      {
        id: 1,
        name: 'Motivation',
        phrases: [
          'Believe in yourself!',
          'You can do it!',
          'Keep pushing forward!',
          'Success is not final, failure is not fatal: It is the courage to continue that counts.',
          'The only way to do great work is to love what you do.',
          'Your limitation—it is only your imagination.',
          'Push yourself, because no one else is going to do it for you.',
          'Great things never come from comfort zones.',
          'Dream it. Wish it. Do it.',
          'Success doesn’t just find you. You have to go out and get it.',
          'The harder you work for something, the greater you’ll feel when you achieve it.',
          'Dream bigger. Do bigger.',
          'Don’t stop when it hurts; stop when you’re done.',
          'Wake up with determination. Go to bed with satisfaction.',
          'Do something today that your future self will thank you for.',
          'Little things make big days.',
          'It’s going to be hard, but hard does not mean impossible.',
        ]
      },
      {
        id: 2,
        name: 'Good Day',
        phrases: [
          'Today is a good day to start fresh.',
          'Make today so awesome that yesterday gets jealous.',
          'Every day may not be good, but there is something good in every day.',
          'Start your day with a smile and end it with a laugh.',
          'Today is a perfect day to be happy.',
          'Good things come to those who hustle.',
          'Make today count, you’ll never get it back.',
          'Today is the first day of the rest of your life.',
          'Do something today that your future self will thank you for.',
          'Every day is a new beginning. Take a deep breath, smile, and start again.'
        ]

      
      },
      {
        id: 3,
        name: 'Best Week',
        phrases: [
          'Make the most of this week!',
          'Every week is a new opportunity to improve yourself.',
          'Start your week with a positive mindset.',
          'Let this week be the week you achieve your goals.',
          'Focus on progress, not perfection this week.',
          'Embrace the challenges of this week and grow from them.',
          'Stay positive, work hard, and make it happen this week.',
          'This week is your chance to shine.',
          'Believe in yourself and make this week amazing.',
          'Let’s make this week one to remember!',


        ]
      }
    ]
    function switchCategory(index: number) {
      setCategory(index);
    }
    function randomPhrase() {
      let randomNumber = Math.floor(Math.random() * allPhrases[category].phrases.length);
      setTextPhrase(`"${allPhrases[category].phrases[randomNumber]}"`);
    

    }
  return (
    <>
    
      <div className='container'>
        <img
          src={img}
          alt="logo"
          className='logo'
        />
        <h2 className='title'>categories</h2>
        <section className='categories'>
          {allPhrases.map((item, index)=>(
            <button 
            key={item.id}
          className='category-bt'
          style={{
            borderWidth: item.name === allPhrases[category].name? 2 : 0,
            borderColor: "#1fa4db",
            borderStyle: "solid",
          }}
          onClick={() =>
            switchCategory(index)
          }
          >
            {item.name}
          </button>))}

        </section>
            <button className='btn' onClick={randomPhrase}>Best Phrase</button>

            {textPhrase !== '' && <p className='bestPhrases'>{textPhrase}</p>}
    </div>
    </>
  )
}

export default App
