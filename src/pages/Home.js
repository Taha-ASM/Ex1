import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Comments from "../components/Comments";
import Company from "../components/Company";
import Footer from "../components/Footer";
import New from "../components/New";
import Section from "../components/Section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <New />
      <Comments />
      <Company />
      <Footer />
    </div>
  );
}
