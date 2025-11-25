import { useEffect, useRef } from "react"

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2.0;
    }, []);

  return (
    <section id="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="./title.png" alt="MacBook Title" />
        </div>

        <video ref={videoRef} src="/videos/hero.mp4" autoPlay playsInline muted/>

        <button>Buy</button>

        <p>From $1999 or $83.24/mo. for 24 mo. before trade-in</p>
    </section>
  )
}
export default Hero