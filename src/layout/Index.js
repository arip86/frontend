import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Container from "../component/container/Index";
function Layout({children}){
    return (
        <>
        <Navbar />
        <main>
            <Container>
            {children}
            </Container>
            </main>
        <Footer />
        </>
    );
}
export default Layout;