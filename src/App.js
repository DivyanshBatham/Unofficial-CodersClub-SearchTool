import React, { Component } from 'react';
import './App.css';

import Select from 'react-select';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        // CONTRIBUTE HERE:
        { id: 0, name: "Divyansh Batham", skills: ['React.js', 'Node.js', 'Javascript', 'HTML', 'CSS', 'Competitive Coding'], imgSrc: 'https://avatars1.githubusercontent.com/u/12484697?s=460&v=4', isActive: false },
        { id: 1, name: "Nishchal Raj", skills: ['Python', 'Android', 'Javascript'], imgSrc: 'https://avatars2.githubusercontent.com/u/15857220?s=460&v=4', isActive: false },
        { id: 2, name: "Sumit Mishra", skills: ['C++', 'Android', 'Java', 'Python'], imgSrc: 'https://avatars2.githubusercontent.com/u/30742922?s=400&u=ab5d607e634b7e2ebc9b4b75ba609d00d9b10590&v=4', isActive: false },
        { id: 3, name: "Abhishek Anand", skills: ['C++', 'C', 'Python', 'Data Structures', 'Competitive Coding'], imgSrc: 'https://avatars3.githubusercontent.com/u/38378778?s=460&v=4', isActive: false },
        { id: 4, name: "Sourav Patidar", skills: ['C++', 'Java', 'Competitive Coding', 'Android'], imgSrc: 'https://avatars2.githubusercontent.com/u/41509968?s=400&u=a2b2aeac1dde5010863be45c2860da85974ccaf9&v=4', isActive: false },
        { id: 5, name: "Prakhar Sharan", skills: ['C++', 'Java', 'Competitive Coding'], imgSrc: 'https://avatars0.githubusercontent.com/u/35136020?s=400&u=2427c8cc2351d6512e679067aa0268d752a44b88&v=4', isActive: false },
        { id: 6, name: "Ritik Saini" , skills: ['C++','C','Competitive Coding'], imgSrc : 'https://www.imgsrc.com/images/2018/12/09/00100sPORTRAIT_00100_BURST20180923174247517_COVER.jpg', isActive :false},
        { id: 7, name: "Abhishek Kumar", skills: ['C', 'C++','Python','DS','Blockchain','Tensor Flow'], imgSrc: 'https://avatars1.githubusercontent.com/u/35439414?s=400&u=c9a044e78f1bb2d95b4651b9e3770c09815bdb5e&v=4', isActive: false },
        { id: 8, name: "Atul Anand", skills: ['C','C++', 'Java', 'Android','Python','Dart','Arduino'], imgSrc: 'https://avatars0.githubusercontent.com/u/35136020?s=400&u=2427c8cc2351d6512e679067aa0268d752a44b88&v=4', isActive: false },
        { id: 9, name: "Mrudul Sankhere", skills: ['Competitive Coding', 'C', 'C++', 'Python'], imgSrc: 'https://avatars0.githubusercontent.com/u/32437824?s=460&v=4', isActive:false},

        // { id: <Increment id>, name: "<Your Name>", skills: ['<Skill 1>', '<Skill 2>'], imgSrc: '<Path to your Image>', isActive: false },
      ],
      options: [
        // Calculate according to skills
      ],
      selectedOptions: [
        // For filtering
      ],
    };
  }

  handleClick = (event) => {
    let { id } = event.currentTarget.dataset;
    let oldCards = this.state.cards;
    oldCards[id].isActive = !oldCards[id].isActive;
    this.setState({
      cards: oldCards
    })
  }

  createCard = (card) => {
    return (
      <div className={card.isActive ? "card active" : "card"} key={card.id} >
        <div className="cardImageContainer">
          {/* <img src="https://via.placeholder.com/300x220" alt="Product" className="productImage" /> */}
          <img src={card.imgSrc} alt={card.name} />
        </div>
        <div className="cardInfoContainer">
          <div className="cardTitle">
            {card.name}
            <div className="btn" data-id={card.id} onClick={this.handleClick}>
              {card.isActive ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                )}
            </div>
          </div>
          <div className="cardDescription">
            {card.skills.map((skill) => {
              return <div className="skillWrapper" key={skill}>{skill}</div>
            })}
          </div>
        </div>
      </div>)
  }

  cardList = () => {
    return this.state.selectedOptions.length === 0 ? this.state.cards.map(this.createCard) : this.state.cards.filter(card => {
      return card.skills.filter((skill) => this.state.selectedOptions.findIndex(option => option.value === skill) !== -1).length === this.state.selectedOptions.length
    }).map(this.createCard)
  }

  logoGenerator = () => {
    const cls_1 = {
      fill: "#fc8365",
      fontSize: "484px",
      fontFamily: "Roboto-Black, Roboto",
      fontWeight: "800",
    }

    const cls_2 = {
      fill: "#fff",
      fontSize: "366px",
      fontFamily: "Roboto-Black, Roboto",
      fontWeight: "800",
    }

    const cls_3 = {
      fill: "#2e2e2e",
      fontSize: "122px",
      fontFamily: "OCRAStd, OCR A Std",
      textDecoration: "underline",
    }

    const cls_4 = {
      fill: "#2e2e2e",
      fontSize: "53px",
      fontFamily: "SegoePrint-Bold, Segoe Print",
      fontWeight: "700",
    }

    // Reflect Filtered Member Count
    let cardCount = this.state.selectedOptions.length === 0 ? this.state.cards.length : this.state.cards.filter(card => {
      return card.skills.filter((skill) => this.state.selectedOptions.findIndex(option => option.value === skill) !== -1).length === this.state.selectedOptions.length
    }).length

    // Reflect Total Number of members.
    // let cardCount = this.state.cards.length;

    if (cardCount < 10)
      return (
        <svg height="300" viewBox="0 0 1363 648" id="logo-svg">
          {/* <svg height="300" viewBox="0 0 1600 648" style={{marginLeft: "36.495px"}}> */}
          <g id="LogoTextSVG" transform="translate(-315 -92)">
            <text id="_31" data-name="31" style={cls_1} transform="translate(1117 159)"><tspan x="0" y="460">{'0' + cardCount}</tspan></text>
            <text id="coders" style={cls_2} transform="translate(315 92)"><tspan x="0" y="348">coders</tspan></text>
            <text id="club" style={cls_3} transform="translate(726 484)"><tspan x="0" y="95">club</tspan></text>
            <text id="Unofficial_" style={cls_4} transform="translate(340.896 121)"><tspan x="0" y="66">Unofficial_</tspan></text>
          </g>
        </svg>
      )
    else if (cardCount <= 99)
      return (
        <svg height="300" viewBox="0 0 1363 648" id="logo-svg">
          {/* <svg height="300" viewBox="0 0 1600 648" style={{marginLeft: "36.495px"}}> */}
          <g id="LogoTextSVG" transform="translate(-315 -92)">
            <text id="_31" data-name="31" style={cls_1} transform="translate(1117 159)"><tspan x="0" y="460">{cardCount}</tspan></text>
            <text id="coders" style={cls_2} transform="translate(315 92)"><tspan x="0" y="348">coders</tspan></text>
            <text id="club" style={cls_3} transform="translate(726 484)"><tspan x="0" y="95">club</tspan></text>
            <text id="Unofficial_" style={cls_4} transform="translate(340.896 121)"><tspan x="0" y="66">Unofficial_</tspan></text>
          </g>
        </svg>
      )
    else
      return (
        // <svg height="300" viewBox="0 0 1363 648">
        <svg height="300" viewBox="0 0 1600 648" id="logo-svg">
          <g id="LogoTextSVG" transform="translate(-315 -92)">
            <text id="_31" data-name="31" style={cls_1} transform="translate(1117 159)"><tspan x="0" y="460">99+</tspan></text>
            <text id="coders" style={cls_2} transform="translate(315 92)"><tspan x="0" y="348">coders</tspan></text>
            <text id="club" style={cls_3} transform="translate(726 484)"><tspan x="0" y="95">club</tspan></text>
            <text id="Unofficial_" style={cls_4} transform="translate(340.896 121)"><tspan x="0" y="66">Unofficial_</tspan></text>
          </g>
        </svg>
      )
  }

  onChange = (e) => {
    console.log(e);
    this.setState({
      selectedOptions: e
    });
  }

  componentDidMount() {
    let skills = [];
    for (let i = 0; i < this.state.cards.length; i++)
      for (let j = 0; j < this.state.cards[i].skills.length; j++)
        if (skills.indexOf(this.state.cards[i].skills[j]) === -1)
          skills.push(this.state.cards[i].skills[j]);

    skills = skills.sort();

    const options = skills.map(skill => {
      return { 'value': skill, 'label': skill }
    });
    this.setState({
      options: options
    });
  }

  render() {

    return (
      <div>
        <div className="logo-container">
          < this.logoGenerator />
          <p className="logo-action">Join the club by adding your contribution to <a href="https://github.com/DivyanshBatham/Unofficial-CodersClub-SearchTool" target="_blank" rel="noopener noreferrer">Github</a></p>

          <Select
            isMulti
            name="colors"
            options={this.state.options}
            className="selector"
            classNamePrefix="selector"
            placeholder="Need help with something? Find the member with the relevant skill(s)"
            onChange={this.onChange}
          />
        </div>
        <div className="card-container">

          < this.cardList />

        </div>
      </div>
    );
  }
}

export default App;
