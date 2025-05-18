import About from "../componants/about"
import Navbars from "../componants/navbar"
import Skills from "../componants/skils"
import Exprience from "../componants/exprience";
import Project from "../componants/project";
export default function Home() {
    return (
        <>
            <Navbars />
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '3rem' }}>
                <About />
                <Skills />
            </div>
            <Exprience/>
            <Project/>
        </>
    );
}