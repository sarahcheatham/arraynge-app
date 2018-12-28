import React, {Component} from "react";
// import PropTypes from 'prop-types';
import SubHeader from './SubHeader';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class WelcomePage extends Component{
    constructor(){
        super();
        this.state={
            welcomeMessage: ""
        };
    }
    componentDidMount(){
        fetch("/api/welcome").then((res)=>{
            return res.text();
        }).then((data)=>{
            this.setState({
                welcomeMessage: data
            });
        });
    }
    render(){
        const styles = {
            color: 'white',
            textDecoration: 'none'
        }
        return(
            <Grid className="welcomepage">
                <Col>
                    <Row>
                        <SubHeader text={this.state.welcomeMessage}/>
                    </Row>
                    <Row>
                        <p className='welcometext'>What would you like to do?</p>
                    </Row>
                    <Row>
                        <Button className="newarrbutton">
                            <Link to={'/classdata'} style={styles}>
                                CREATE A NEW ARRAYNGEMENT
                            </Link>
                        </Button>
                    </Row>
                    <Row>
                        <p className='welcometext'>OR</p>
                    </Row>
                    <Row>
                        <Button className="viewarrbutton">
                            <Link to={'/myarrayngements'} style={styles}>
                                VIEW ARRAYNGEMENTS
                            </Link>
                        </Button>
                    </Row>
                </Col>
            </Grid>
        )
    }
}

export default WelcomePage;