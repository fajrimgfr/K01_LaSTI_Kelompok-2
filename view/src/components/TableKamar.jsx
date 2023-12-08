import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import EditKamarModal from "./EditKamar.Modal";
import DeleteKamarModal from "./DeleteKamarModal";

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
      <Table className="bg-gray-50">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">No. Kamar</TableHead>
            <TableHead className="font-semibold">Lantai</TableHead>
            <TableHead className="font-semibold">Luas</TableHead>
            <TableHead className="font-semibold">Posisi</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Harga</TableHead>
            <TableHead className="font-semibold">Manage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {kamars.length > 0 &&
            kamars.map((kamar) => (
              <TableRow key={kamar._id}>
                <TableCell className="font-medium">{kamar.noKamar}</TableCell>
                <TableCell>{kamar.lantai}</TableCell>
                <TableCell>{kamar.luas}</TableCell>
                <TableCell>{kamar.posisi}</TableCell>
                <TableCell>{kamar.status}</TableCell>
                <TableCell>{kamar.harga}</TableCell>
                <TableCell className="flex w-fit">
                  <div className="flex w-fit gap-2">
                    <div className="">
                      <EditKamarModal kamarId={kamar._id} />
                    </div>
                    <div className="">
                      <DeleteKamarModal kamarId={kamar._id} />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
