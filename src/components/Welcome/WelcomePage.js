import React, {Component} from "react";
// import PropTypes from 'prop-types';
import SubHeader from '../SubHeader';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class WelcomePage extends Component{
    constructor(){
        super();
        this.state={
            welcomeMessage: ""
        };
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log("props:", props)
    //     console.log("state:", state)
    //     console.log('*** eived  s   getDrfetchStudentData ***', props.currentUserId)
    //     props.fetchStudentData(props.currentUserId)
    //     return state;
    // }

    componentDidMount(){
        fetch("/api/welcome").then((res)=>{
            return res.text();
        }).then((welcomeMessage)=>{
            this.setState({
                welcomeMessage: welcomeMessage
            });
        });
        // console.log('*** didMount fetchStudentData ***', this.props.currentUserId)
        // if(this.props.currentUserId){
        //     this.props.fetchStudentData(this.props.currentUserId)
        // }
        // this.props.fetchStudentData()
    }

    render(){
        const styles = {
            color: '#F7F7FB',
            textDecoration: 'none'
        }
        return(
            <Grid className="welcomepage">
                <Col>
                    <Row>
                        <SubHeader className="subwel" text={this.state.welcomeMessage}/>
                    </Row>
                    <Row>
                        <p className='welcometext'>What would you like to do?</p>
                    </Row>
                    <Row>
                        <Button className="newarrbutton">
                            <Link to={'/classdata'} style={styles}>
                                CREATE A NEW CLASS
                            </Link>
                        </Button>
                    </Row>
                    <Row>
                        <p className='welcometext'>OR</p>
                    </Row>
                    <Row>
                        <Button className="viewarrbutton">
                            <Link to={'/arrayngement'} style={styles}>
                                ARRAYNGE YOUR CLASS
                            </Link>
                        </Button>
                    </Row>
                </Col>
            </Grid>
        )
    }
}

export default WelcomePage;