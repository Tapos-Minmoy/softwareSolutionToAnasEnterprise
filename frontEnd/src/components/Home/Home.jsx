import React, { useState , useEffect } from 'react';
import Vendors from '../Vendors/Vendors';
import Expenses from '../Expenses/Expenses';
import PurchaseOrder from '../PurchaseOrder/PurchaseOrder';
import PurchaseReceives from '../PurchaseReceives/PurchaseReceives';
import Bills from '../Bills/Bills';
import AddNewVendor from '../AddNewVendor/AddNewVendor';
import PaymentsMade from '../PaymentsMade/PaymentsMade';
import AddNewPayment from '../AddNewPayment/AddNewPayment';

const Home = () => {
  const [isPurchaseDrawerOpen, setIsPurchaseDrawerOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the leading #
    if (hash) {
      setSelectedComponent(hash);
    }
  }, []); // Empty dependency array to run only once on component mount

  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
    window.location.hash = componentName;
  };

  return (
    <div className='flex flex-row'>
      <div className="basis-1/5">
        <ul className="text-white font-semibold text-xl bg-black menu menu-sm h-screen z-[1] p-2 shadow w-52 hidden md:block">
          <li><a className="hover:text-orange-500">Dashboard</a></li>
          <li><a className="hover:text-orange-500">Contact</a></li>
          <li></li>
          <li><a className="hover:text-orange-500">Items</a></li>
          <li></li>
          <li className="relative">
            <a
              className="hover:text-orange-500 flex items-center"
              onClick={() => setIsPurchaseDrawerOpen(!isPurchaseDrawerOpen)}
            >
              Purchase
              <span className={`ml-2 transition-transform duration-300 ${isPurchaseDrawerOpen ? 'rotate-180' : ''}`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </span>
            </a>
          </li>
          {isPurchaseDrawerOpen && (
            <ul className={`drawer-content ${isPurchaseDrawerOpen ? 'drawer-open' : ''}`} style={{ marginLeft: '12px' }}>
              <li onClick={() => handleComponentClick('Vendors')}><a className="hover:text-orange-500">Vendors</a></li>
              <li onClick={() => handleComponentClick('Expenses')}><a className="hover:text-orange-500">Expenses</a></li>
              <li onClick={() => handleComponentClick('PurchaseOrder')}><a className="hover:text-orange-500">Purchase Order</a></li>
              <li onClick={() => handleComponentClick('PurchaseReceives')}><a className="hover:text-orange-500">Purchase Receives</a></li>
              <li onClick={() => handleComponentClick('Bills')}><a className="hover:text-orange-500">Bills</a></li>
              <li onClick={() => handleComponentClick('PaymentsMade')}><a className="hover:text-orange-500">Payments Made</a></li>
            </ul>
          )}
          <li><a className="hover:text-orange-500">Sales</a></li>
          <li><a className="hover:text-orange-500">Invoice</a></li>
          <li></li>
          <li><a className="hover:text-orange-500">Payable</a></li>
          <li><a className="hover:text-orange-500">Receivable</a></li>
          <li><a className="hover:text-orange-500">Reports</a></li>
        </ul>
      </div>
      {selectedComponent && (
        <div className="basis-3/4">
          {selectedComponent === 'Vendors' && <Vendors selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />}
          {selectedComponent === 'Expenses' && <Expenses />}
          {selectedComponent === 'PurchaseOrder' && <PurchaseOrder />}
          {selectedComponent === 'PurchaseReceives' && <PurchaseReceives />}
          {selectedComponent === 'Bills' && <Bills />}
          {selectedComponent === 'AddNewVendor' && <AddNewVendor />}
          {selectedComponent === 'PaymentsMade' && <PaymentsMade selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />}
          {selectedComponent === 'AddNewPayment' && <AddNewPayment />}
         
        </div>
      )}

    </div>
  );
};

export default Home;
