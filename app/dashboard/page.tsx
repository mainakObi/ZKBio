// "use client"
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import dynamic from 'next/dynamic';

// Dynamically import AttendanceCalender with no SSR
const AttendanceCalender = dynamic(() => import('@/components/AttendanceCalender'), { ssr: false });

const Dashboard = async () => {
  // const session = await getServerSession();
  // if (!session) {
  //   redirect("/");
  // }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl max-[500px]:text-2xl">Dashboard</h1>
      <AttendanceCalender />
    </div>
  );
};

export default Dashboard;
