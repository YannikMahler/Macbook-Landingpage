import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";

import { Navbar, Hero, ProductViewer, Showcase, Performance, Features, Highlights, Footer } from "./components";

// register only the GSAP plugins (useGSAP is a React hook, not a plugin)
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
    <main>
        <Navbar/>
        <Hero/>
        <ProductViewer/>
        <Showcase/> 
        <Performance/>
        <Features/>
        <Highlights/>
        <Footer/>
    </main>
);
}
export default App