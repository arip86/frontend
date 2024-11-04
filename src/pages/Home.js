import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Hero from "../component/Hero/Hero";
import Movies from "../component/Movies/Movies";
function Home (){
    return(
        <div>
            <Navbar />
           <main>
            <Hero />
            <Movies />
            </main>
            <Footer/>
        </div>
    )
}
export default Home;