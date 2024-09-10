// pages/dashboard/index.js

import Layout from "../components/Layout";

import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/accounts/send-money");
  };
  return (
    <Layout>
      <div className="mt-2">
        <div className="">
          Home
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
