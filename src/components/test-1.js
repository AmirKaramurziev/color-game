import React from "react";
class ColorGame extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Colors:[
                "red",
                "blue",
                "black",
                "green",
                "yellow"
            ],
            timeForRandom:"",
            temp: "",
            ClassNames:[
                "redding",
                "bluening",
                "blacking",
                "greening",
                "yellowning"
            ],
            amountAttemps: 0,
            amountRigthAttemp: 0,
            HistoryLog: []
            
        }
    }
    componentDidMount(){
        var GettingEll = document.getElementById('1');

        var RandomForText = Math.floor( Math.random() * 5 );
        var RandomColorForText = Math.floor( Math.random() * 5 );
    

        
        var tempText = this.state.Colors[RandomForText];
        var tempColorText = this.state.ClassNames[RandomColorForText];

        this.setState({temp:tempText});
        GettingEll.className = tempColorText;
    }
    pickTheColor(e){
        var action = "";
        var proverka = false;
        console.log(e);
        this.state.amountAttemps = this.state.amountAttemps + 1 * 1;
        if(e === this.state.temp){
            this.state.amountRigthAttemp = this.state.amountRigthAttemp + 1 * 1;
            console.log("hi");
            proverka = true;
        }
            
        
        var GettingEll = document.getElementById('1');
        var RandomForText = Math.floor( Math.random() * 5 );
        var RandomColorForText = Math.floor( Math.random() * 5 );

        
        var tempText = this.state.Colors[RandomForText];
        var tempColorText = this.state.ClassNames[RandomColorForText];

        this.setState({temp:tempText});
        GettingEll.className = tempColorText;

        if(proverka === true){
            action = "rigth answer " + " " + this.state.temp + " " + new Date;
            this.state.HistoryLog.unshift(action);
        } 
        if(proverka === false){
            action = "bad answer " + " " + this.state.temp + " " + new Date;
            this.state.HistoryLog.unshift(action);
        }
    }
    render(){
        return(
            <div>
                <div className = "TextWithColor">
                    press color <div className="MOREEE"><div id="1" className = "">{this.state.temp}</div></div>
                </div>
                <div className="Color-Container">
                    <button className="block red" onClick={(e)=>this.pickTheColor("red")}></button>
                    <button className="block blue" onClick={(e)=>this.pickTheColor("blue")}></button>
                    <button className="block black" onClick={(e)=>this.pickTheColor("black")}></button>
                    <button className="block green" onClick={(e)=>this.pickTheColor("green")}></button>
                    <button className="block yellow" onClick={(e)=>this.pickTheColor("yellow")}></button>
                </div>
                <div className="Attemps">
                    Attemps:{this.state.amountAttemps}
                    <div className="attemps-item">R:{this.state.amountRigthAttemp}</div>
                </div>

                <div className="logs">
                    
                    {this.state.HistoryLog.map(el=><div>{el}</div>)}
                </div>
            </div>
        )
    }
}
export default ColorGame;