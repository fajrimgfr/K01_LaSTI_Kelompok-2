import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

export default async function TableKamar() {
  const kamars = await getKamars();
  return (
    <div>
      <Table>
        <TableCaption>Caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">No. Kamar</TableHead>
            <TableHead>Lantai</TableHead>
            <TableHead>Posisi</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead className="text-right">Manage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {kamars.length > 0 &&
            kamars.map((kamar) => (
              <TableRow key={kamar._id}>
                <TableCell className="font-medium">{kamar.noKamar}</TableCell>
                <TableCell>{kamar.lantai}</TableCell>
                <TableCell>{kamar.posisi}</TableCell>
                <TableCell>{kamar.status}</TableCell>
                <TableCell>{kamar.harga}</TableCell>
                <TableCell className="text-right bg-red-500 flex justify-right w-fit">
                  <div className="flex w-fit">
                    <div className="bg-black">Edit</div>
                    <div className="bg-gray-500">Delete</div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
