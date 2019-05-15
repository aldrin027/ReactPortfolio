import React, { Component } from 'react';
import { Progress } from 'reactstrap';

class ProgressBar extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    addNewProgress() {  
        return <Progress animated bar value="10" color="danger"/>
    }

    render() {

        var stackProgress = [];

        for (let index = 0; index <= this.props.skillLevel; index += 10) {

            let colorProgress = "";

            if(index <= 30) {
                colorProgress = "danger"
            }else if(index > 30 && index < 60) {
                colorProgress = "warning"
            }else if(index > 60){
                colorProgress = "success";
            }

            stackProgress.push(<Progress animated bar value={index} color={colorProgress}/>);
        }

        return <Progress multi>
            {stackProgress}
        </Progress>
    }
}

export default ProgressBar;
