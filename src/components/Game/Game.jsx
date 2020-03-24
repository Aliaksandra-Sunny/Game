import React from "react";
import Field from "./Field/Field";
import style from "./Game.module.css"
import Counter from "./Counter/Counter";
import audio from "./bird.mp3"

class Game extends React.Component {
    state = {
        counter:0,
        random: 0,
    };


    componentDidMount() {
        setInterval(()=> {
            this.setState({ random: this.randomNum()})
        }, 1000)
    };

    sound = new Audio(audio);

    decCounter=()=>{
        this.setState({counter: this.state.counter-1});
    };
    incCounter=()=>{
        this.setState({counter: this.state.counter+1});
        this.sound.play();
    };

    randomNum=()=>{
        return Math.floor(Math.random() * 9);
    };

    render() {
        let fields = new Array(9);
        let active;
        for (let i = 0; i<fields.length; i++) {
            (this.state.random===i)? active="photo":active="";
            fields[i]=<Field active={active} decCounter={this.decCounter} incCounter={this.incCounter} key={i}/>;
        }
        return (
            <div>
                <div className={style.game}>{fields}</div>
                <Counter counter={this.state.counter}/>
            </div>
        )
    }
}

export default Game;