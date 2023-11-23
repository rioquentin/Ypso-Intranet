import React from "react";
import "./ProfileContainer.scss";

function ProfileContainer() {
    return (
        <div className="profile">
            <div className="cards">
                <div className="row1">
                    <div className="col1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt velit leo, id dapibus nisl tristique ut.</p>
                    </div>
                    <div className="col2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt velit leo, id dapibus nisl tristique ut.</p>
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

export default ProfileContainer;
