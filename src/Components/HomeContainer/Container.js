import React from "react";
import "./Container.css";

function Container() {
    return (
        <div className="home">
            <div className="cards">
                <div className="row1">
                    <div className="col1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt velit leo, id dapibus nisl tristique ut.</p>
                    </div>
                    <div className="col2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt velit leo, id dapibus nisl tristique ut.</p>
                    </div>
                </div>
                <div className="row2">
                    <div className="col1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt velit leo, id dapibus nisl tristique ut.</p>
                    </div>
                </div>
                <div className="row3">
                    <div className="col1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt velit leo, id dapibus nisl tristique ut. </p>
                    </div>
                </div>
            </div>
            <div className="timeline">
                <div className="roadmap">
                    <div className="line"></div>
                    <div className="tasks">
                        <ul>
                            <li>Task 1</li>
                            <li>Task 2</li>
                            <li>Task 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;