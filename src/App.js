import React, { Component } from 'react';
import './App.css';

var wisdoms = [
  "Semper Ubi Sub Ubi. (Always wear underwear.)",
  "Floss your teeth every day.",
  "You will pay for your sins. If you have already paid, please disregard this message.",
  "Today is a day for firm decisions!! Or is it?",
  "Caution: Keep out of reach of children.",
  "You're growing out of some of your problems, but there are others that you're growing into.",
  "Every cloud engenders not a storm.",
  "Having is quite often not so pleasing a thing as wanting.",
  "If I only knew then what I know now.",
  "There ain't no such thing as a free lunch.",
  "Never suppose malice where ignorance will suffice.",
  "Do a good turn daily."
]

var jokes = [
  "What’s the best thing about Switzerland? - I don’t know, but the flag is a big plus.",
  "I invented a new word! - Plagiarism!",
  "Why did the chicken go to the séance? - To get to the other side.",
  "Where are average things manufactured? - The satisfactory."
]


class App extends Component {
  constructor(props) {
    super(props);
    var index = Math.floor(Math.random() * wisdoms.length);
    var index2 = Math.floor(Math.random()*jokes.length);
    this.state = {
      wisdom: wisdoms[index],
      wisdomLS: wisdoms,
      joke: jokes[index2]
    };
    console.log(this.wisdomLS);
    this.setRandomWisdom = this.setRandomWisdom.bind(this);
    this.setIntervalWisdom = this.setIntervalWisdom(this);
    this.addWisdom = this.addWisdom.bind(this);

    this.setRandomJoke = this.setRandomJoke.bind(this);
  }

  setIntervalWisdom(){
    var index = Math.floor(Math.random()*wisdoms.length);

    setInterval(()=>{
    this.setState({
       wisdom:wisdoms[index]
    });
    index++
    if(index >= wisdoms.length){
      index = index-wisdoms.length;
     }
    }, 15000);
  }
  setRandomWisdom() {
    var index = Math.floor(Math.random() * wisdoms.length);

    while(this.state.wisdom === wisdoms[index]){
     index = Math.floor(Math.random()*wisdoms.length);
    }
    this.setState({
      wisdom: wisdoms[index]
    });
  }

  setRandomJoke(){
    var index2 = Math.floor(Math.random()*jokes.length);
    while(this.state.joke === jokes[index2]){
     index2 = Math.floor(Math.random()*jokes.length);
    }
    this.setState({
      joke: jokes[index2]
    });
  }

  addWisdom() {
    wisdoms.push(prompt("What new wisdom do you offer?"));
     this.setState({
      wisdomLS: wisdoms
    })
  }
  
  removeCurrentWisdom() {
    var index = wisdoms.lengths-1;
    wisdoms.splice(index, 1);
    //this.setState({
      // wisdomLS: wisdoms
    //})
  }
  
  render() {
    return (
      <div className="App">
	<div className="wisdomsState1">
 		{this.state.wisdom}
	</div>
		{this.setIntervalWisdom}
        <button className="more" onClick={this.setRandomWisdom}>AnotherWisdom</button>
	<button className="new-wisdom" onClick={this.addWisdom}>New Wisdom</button>
	<div className="box1">
	  <div className="wisdomsState2">
	   <div> 
		{this.state.wisdomLS[wisdoms.length-3]}
	   </div>
	   <div>
		{this.state.wisdomLS[wisdoms.length-2]}
	   </div>
	   <div>
		{this.state.wisdomLS[wisdoms.length-1]}
	   </div>
	  </div>
	</div>
	<div className="box2">
	 <div className="jokeState">
	  {this.state.joke}
	 </div>
	</div>
	<button className="moreJoke" onClick={this.setRandomJoke}>AnotherJokes</button>
      </div>
    );
  }
}

export default App;
