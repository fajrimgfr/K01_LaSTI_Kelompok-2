"use client";

import { useState, useEffect } from "react";
import React from "react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

// ... (import statements)

export default function DeleteKamarModal({ kamarId }) {
  const handleDelete = async () => {
    try {
      console.log("Deleted");
      const response = await fetch(`http://localhost:3000/api/kamar/${kamarId}`, {
        method: "DELETE",
      });
      window.location.reload();

      // Handle successful deletion, e.g., redirect or update UI
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="text-md text-center bg-red-500 hover:bg-red-800 font-medium text-white rounded-md p-2 cursor-pointer">delete kamar</div>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white border rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="font-bold">Delete Kamar</div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <AlertDialogCancel className="w-full hover:bg-gray-200">Cancel</AlertDialogCancel>
              <button onClick={handleDelete} className="w-full bg-red-500 hover:bg-red-800 text-white rounded-md p-2 cursor-pointer">
                Delete
              </button>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
