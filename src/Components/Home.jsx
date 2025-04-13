import React, { useEffect, useRef, useState } from 'react'
import StatsBox from './reusable/StatsBox'

function Home(props) {
  const [di, setDi] = useState(localStorage.getItem('difficulty') || 0)
  const [isOpen, setIsOpen] = useState(false)
  const [colorArray, setColorArray] = useState([])
  const [timer, setTimer] = useState(0)
  const [isCounting, setIsCounting] = useState(false)
  const [userInputState, setUserInputState] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [toType, setToType] = useState(
    [
      [
        "The quick brown fox jumps over the lazy dog.",
        "React makes it painless to create interactive UIs.",
        "Learning to code takes patience and consistency.",
        "Stay focused and never stop building cool things.",
        "JavaScript is weird but also kinda awesome.",
        "Typing fast is a skill you can definitely improve.",
        "A journey of a thousand bugs begins with a single line.",
        "Keep your code clean, clear, and consistent.",
        "Fail fast, learn faster, and keep shipping.",
        "Front-end devs bring ideas to life with code."
      ],
      
      [
        "Mastering JavaScript takes more than just memorizing syntax; it requires building, breaking, and debugging real projects over time.",
        "A great developer is not defined by how few bugs they write, but by how effectively they can find and fix those bugs under pressure.",
        "Consistency is the secret weapon of every successful programmer—small daily efforts eventually lead to massive long-term progress.",
        "While frameworks come and go, a solid understanding of core web fundamentals will keep you valuable in the ever-changing tech world.",
        "Sometimes the best way to solve a problem is to take a break, clear your mind, and return with a fresh perspective and a plan.",
        "Writing clean code isn't about perfection; it's about making it easy for others—and your future self—to read and maintain.",
        "In programming, frustration is part of the process. Learn to embrace it, because every error message is pointing you toward growth.",
        "Don't wait until you're confident to start a project. Start the project, and confidence will come as you figure things out along the way.",
        "Typing fast isn't about racing; it's about reducing friction between your brain and the code editor so ideas can flow freely.",
        "Every line of code you write adds to your experience. Whether it works or not, you're improving with every keystroke."
      ],
      
      [
        "Mastering JavaScript involves more than just learning functions and variables. It means understanding how the language behaves under the hood, how asynchronous operations work, and how to write scalable and maintainable code in real-world applications.",
        
        "Great developers aren't born overnight. They improve by building small projects consistently, facing bugs head-on, reading documentation, and never being afraid to ask questions or rewrite their code for better clarity and performance.",
        
        "Programming is a lifelong journey where learning never stops. With every new framework, language update, or project challenge, developers sharpen their problem-solving skills and grow more confident in their abilities.",
        
        "A strong foundation in HTML, CSS, and JavaScript is crucial before diving into frameworks like React or Angular. These core technologies are the building blocks of the web and understanding them will make you a better front-end developer overall.",
        
        "Sometimes, the best debugging session starts with stepping away from your screen. Clear your head, grab some water, and come back ready to attack the problem from a new angle with fresh eyes and a sharper mind.",
        
        "Typing fast can feel powerful, but it's even more powerful when combined with thoughtful planning, clear code structure, and meaningful variable naming. Remember—write code for humans first, and machines second.",
        
        "Building full-stack applications will expose you to real-world issues like authentication, database design, API management, and deployment. These challenges are where your skills grow the most, so lean into them confidently.",
        
        "Whether you're working alone or with a team, clear communication, good version control practices, and writing reusable components will set you apart as a developer who brings both technical skill and professionalism to every project.",
        
        "The best way to grow as a developer is to stay curious. Explore different technologies, experiment with side projects, contribute to open source, and read code written by people more experienced than you.",
        
        "Each bug you fix, each feature you ship, and each line of code you write is a step forward in your development journey. Progress isn’t always visible day to day, but it adds up in powerful ways over time."
      ]
      
      
    ] 
  )
  const [textIndex, setTextIndex] = useState(()=> Math.floor(Math.random() * toType.length))
  const [textArray, setTextArray] = useState(toType[di][textIndex])


  // The restart function;
  function restart(){
    setTextIndex(()=> Math.floor(Math.random() * toType[di].length))
    setTextArray(toType[di][textIndex])
    console.log(textIndex)
    setUserInput('')
    setUserInputState(false)
    setTimer(0)
    setIsCounting(false)
  }

  // The user Inpur Side Effect;
  useEffect(()=>{
    if (userInput.length == textArray.length) {
      setIsCounting(false)
      openClose()
      setUserInputState(true)
    }else if(userInput.length > 0 && userInput.length != textArray.length){
      setIsCounting(true)
    }
  }, [userInput])

// The StatsBx Opn and Close 
  function openClose(){
    setIsOpen(prev => !prev)
  }

    // the timer function side effect 
    useEffect(()=>{   
      let interval;

  if (isCounting) {
    interval = setInterval(() => {
      setTimer(prevTime => prevTime + 1);
    }, 1000);
  }

  return () => clearInterval(interval);

    },[isCounting])

    useEffect(() => {
      const newColorArray = textArray.split('').map((text, i) => {
        if (i < userInput.length) {
          return text === userInput[i] ? '#2A9F77' : 'red';
        } else {
          return 'grey';
        }
      });
    
      setColorArray(newColorArray);
    }, [userInput, textIndex, toType])

    function accuracy(){
      const correctLetters = colorArray.filter(color=> color == '#2A9F77')
      let accuracy;
      accuracy = correctLetters.length/ colorArray.length * 100
      return Math.floor(accuracy);
    }
    function wpm(){
      const words = textArray.split(' ')
      const userWords = userInput.split(' ')
      const wpm = userWords.length/timer * 60 
      return Math.floor(wpm);
    }


    return(
        <div>

                 <main>
                    <div>
                        <div className='text-center text-white '>TIMER</div>
                        <div className='text-center text-7xl'>{timer <10 && '0'}{timer}</div>
                    </div>

                   <div className='relative p-4'>

                        <div className='mx-8 font-semibold text-lg max-w-2xl mx-auto mt-16 text-center monospace'>
                              {                              
                              textArray.split('').map((text, i) => (
                                <span key={i} style={{ color: colorArray[i] }}>{text}</span>
                              ))
                              }
                        </div>
                        

              <div className='w-100 mx-auto'>
              <input type="text" 
              disabled={userInputState}
                className='userInput border-0 text-white mt-16 mx-auto w-100 text-center'
                placeholder='Type here...'
                onChange={(e)=> setUserInput(e.target.value)}
                value={userInput}
                />
              </div>
                   </div>

               <div className='w-12/12 flex justify-center'>
               <button className='act text-white text-center py-2 text-md mt-4 hover:cursor-pointer mx-auto rounded-2xl pr-2 flex hover:bg-[#2B3733]' 
               onClick={restart}

               >
               <span className='mx-2 mt-1'>
                 <img src="https://img.icons8.com/?size=100&id=11684&format=png&color=ffffff" width={15} alt="" />
               </span>
                <span className='text-sm'>start over</span>
                </button>
               </div>
                 </main>

                 {isOpen && <StatsBox 
                              set={openClose}
                              timeTaken={timer}
                              accuracy={accuracy()}
                              wpm={wpm()}
                 />}
            
        </div>
    )
};

export default Home;