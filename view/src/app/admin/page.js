import AddKamarModal from "@/components/AddKamarModal";
import TableKamar from "@/components/TableKamar";
import React from "react";

const getKamars = async () => {
  const response = await fetch("http://localhost:3000/api/kamar", {
    next: {
      revalidate: 0,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export default async function page() {
  const kamars = await getKamars();
  return (
    <div className="flex justify-center items-center">
      <div className="container">
        <AddKamarModal />
        <TableKamar />
      </div>
    </div>
  );
}
