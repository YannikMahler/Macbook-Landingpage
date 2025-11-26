import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";

import { Navbar, Hero, ProductViewer, Showcase } from "./components";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
    <main>
        <Navbar/>
        <Hero/>
        <ProductViewer/>
        <Showcase/> 
    </main>
);
}
export default App