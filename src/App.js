import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
//import './App.css';
import { getData } from './Actions/action';
//import Question from './Questions';


function App(props) {


  useEffect(() => {
    props.getData();
  }, [])

  const [position, setPosition] = useState(null)



  const toggle = (index) => {
    if (position === index) {
      console.log(index);
      return setPosition(null)
    }
    setPosition(index)
    console.log(index);

  }

 

  return (
    <main>
      <div className="container">
        <h3>questions and answers about Redux</h3>
        <section className='info'>
          {props.data.map((item, i) => {
            return (
              // <Question index={i} key={question.id} {...question}></Question>);
              <article className='question' key={item.id}>
                <header>
                  <h4>{item.title}</h4>
                  <button className='btn' onClick={() => toggle(i)}>{position === i ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
                </header>
                 {position ===i && <p>{item.info}</p>} 
               
              </article>

            )
          })}
        </section>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
