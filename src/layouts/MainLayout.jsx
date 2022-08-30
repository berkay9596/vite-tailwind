import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="mx-auto flex min-h-screen flex-1 flex-col pr-4 pl-4">
      <main className="container mx-auto mt-5">{children}</main>
    </div>
  );
};

export default MainLayout;
