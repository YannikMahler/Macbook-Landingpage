import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";

import { Navbar, Hero, ProductViewer } from "./components";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
    <main>
        <Navbar/>
        <Hero/>
        <ProductViewer/>
    </main>
);
}
export default App