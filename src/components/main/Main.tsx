import Dev from "./development/Dev";
import Feedback from "./feedback/Feedback";
import Intro from "./intro/Intro";
import Loveblock from "./loveblock/Loveblock";
import Product from "./product/Product";

const Main = () => {
  return (
    <>
        <Intro/>
        <Loveblock/>
        <Product/>
        <Dev/>
        <Feedback/>
    </>
  )
}

export default Main