import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
