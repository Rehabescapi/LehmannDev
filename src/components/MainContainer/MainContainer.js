import React , {Component } from 'react'
import Proptypes from 'prop-types'
import InterestComponent from "../InterestComponent/InterestComponent"
import ContentComponet from "../contentComponent/ContentComponent"
import SkillsComponent from "../SkillsComponent/SkillsComponent"
import EducationComponent from "../EducationComponent/EducationComponent"
import ExperienceComponent from  "../ExperienceComponent/ExperienceComponent"

class MainContainer extends Component {

    render(){

        return (


            <div id="Main Content">
            

            <ContentComponet/>
            <ExperienceComponent/>
           <EducationComponent/>
            <SkillsComponent/>
            <InterestComponent/>
            
            
            
            
            
            </div>






            )
        }
    }
    export default MainContainer