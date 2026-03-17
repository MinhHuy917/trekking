"use client";

import { useState } from "react";
import Image from "next/image";

export default function QRSection({ QR }: { QR: any }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* QR nhỏ */}
      <div className="flex justify-center py-6">
        <Image
          src={QR.src}
          alt="QR Thanh toán"
          width={200}
          height={200}
          onClick={() => setOpen(true)}
          className="cursor-pointer rounded-xl border shadow-md bg-white p-2"
        />
      </div>

      {/* Modal full screen */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div className="bg-white p-4 rounded-2xl">
            <Image
              src={QR.src}
              alt="QR Full"
              width={400}
              height={400}
              className="w-[80vw] max-w-[400px] h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}