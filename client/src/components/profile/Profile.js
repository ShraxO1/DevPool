import React, {Component} from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import ProfileHeader from "./ProfileHeader";
import PropTypes from "prop-types";
import { getProfileByHandle } from "../../actions/profileActions";

class Profile extends Component {
    componentDidMount() {
        if(this.props.match.params.handle){
            this.props.getProfileByHandle(this.props.match.params.handle);
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

Profile.proptype = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);