import React from "react";
import NavBar from "../Components/navBar";
import HeroFeaturedPage from "../Components/HeroFeaturedPage";
import FeaturedOverview from "../Components/FeaturedOverview";
import Problem from "../Components/Problem";
import Solution from "../Components/Solution";
import MyProcess from "../Components/MyProcess";
import ActionMap from "../Components/ActionMap";
import VisualMockUp from "../Components/VisualMockUp";
import Footer from "../Components/Footer";
import InteractiveProtoType from "../Components/InteractiveProtoType";
import StoryBoard from "../Components/StoryBoard";
import FullDevelopments from "../Components/FullDevelopments";
import ResultTakeaways from "../Components/ResultTakeaways";
const FeatureProjectDetail =()=>{
  return(
    <>
    <NavBar></NavBar>
    <HeroFeaturedPage></HeroFeaturedPage>
    <FeaturedOverview></FeaturedOverview>
    <Problem></Problem>
    <Solution></Solution>
    <MyProcess></MyProcess>
    <ActionMap></ActionMap>
    <StoryBoard></StoryBoard>
    <VisualMockUp></VisualMockUp>
    <InteractiveProtoType></InteractiveProtoType>
    <FullDevelopments></FullDevelopments>
    <ResultTakeaways></ResultTakeaways>

    <Footer></Footer>
    </>
  )
}
export default FeatureProjectDetail ; 