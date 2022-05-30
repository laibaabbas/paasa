import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./commonComponents/Footer";
import Home from "./components/Home/Home";
import CommunityVehicle from "./components/BookingVehicale/CommunityVehicle";
import AboutPaasa from "./components/About/AboutPaasa";

import LogIn from "./components/JoinIn/Login";
import SignUp from "./components/JoinIn/SignUp";
import MembershipPlan from "./components/JoinIn/MembershipPlan";
import MemberDetail from "./components/JoinIn/MemberDetail";
import Payment from "./components/JoinIn/Payment";
import ManagementCommittee from "./components/ManagementCommittee/ManagementCommittee";
const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/BookVehicle" element={<CommunityVehicle />} />
        <Route path="/AboutPaasa" element={<AboutPaasa />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MembershipPlan" element={<MembershipPlan />} />
        <Route path="/MemberDetail" element={<MemberDetail />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/ManagementCommittee" element={<ManagementCommittee />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
