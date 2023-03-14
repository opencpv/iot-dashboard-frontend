import Container from "../layout/Container";
import Footer from "../layout/Footer";
import Intro from "../pageSections/landing/Intro";
import CustomLottie from "../ui/customDisplays/CustomLottie";
import Column2 from "../ui/grids/Column2";

const Landing = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
        <Container>
          <Column2 style={{ height: "94vh" }}>
            <Intro />
            <CustomLottie file={"Satelite"} />
          </Column2>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Landing;
