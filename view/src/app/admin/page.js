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
        <ul className="flex justify-between">
          <li>No. Kamar</li>
          <li>Harga</li>
          <li>posisi</li>
        </ul>
        {kamars.length > 0 &&
          kamars.map((kamar) => (
            <ul className="flex justify-between">
              <li>{kamar.noKamar}</li>
              <li>{kamar.harga}</li>
              <li>{kamar.noKamar}</li>
            </ul>
          ))}
      </div>
    </div>
  );
}
