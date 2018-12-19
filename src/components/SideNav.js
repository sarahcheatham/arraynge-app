import React, {Component} from "react";

export default class SideNav extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li>
                        <a>Log In</a>
                    </li>
                    <li>
                        <a>My Arrayngements</a>
                    </li>
                    <li>
                        <a>View Class Data</a>
                    </li>
                </ul>
            </nav>
        )
    }
}