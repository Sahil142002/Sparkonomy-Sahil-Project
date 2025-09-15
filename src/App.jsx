import Footer from "./components/Footer";
import Invoice from "./components/Invoice";
import Invoices from "./components/Invoices";

import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="roboto w-full flex flex-col  justify-center md:max-w-[360px]   ">
          <Navbar />
          <div className="w-full md:max-w-[360px]  px-4 justify-center flex flex-col items-center ">
            <Invoice />
            <Invoices />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
