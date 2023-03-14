import ManageAllConnectionStates from "../features/ManageAllConnectionStates";
import Footer from "../layout/Footer";

const PortView = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
        <div className="h-[94vh] w-full bg-slate-900 flex items-center  flex-col relative">
          <div className="mt-28"></div>

          <div className="mt-8"></div>
          <ManageAllConnectionStates />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default PortView;
