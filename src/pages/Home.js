import * as React from 'react';
import '../css/home.css';

function Home() {

    const [offsetY, setOffsetY] = React.useState(0);

    //new Y axis offset
    const handleScroll = () => setOffsetY(window.pageYOffset);

    //useEffect is a hook that allows you to perform side effects in function components every time it renders
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderContent = () => (<>
        <p>
            <b>
                Hello, my name is <span className="highlight">Dylan</span> and I am a <span className="highlight">Computer Science</span> student at <span className="highlight">University of California, Santa Cruz</span>.
            </b>
        </p>
    </>);

    return (
        <section className="container">
            <div className="scrollable-background" style={{ transform: `translateY(-${offsetY * 0.5}px)` }}></div>
            <div className="background-triangles" style={{ transform: `translateY(${offsetY * 0.5}px)` }}></div>
            <div className="content"> {renderContent()} </div>
        </section>
    );
}


export default Home;