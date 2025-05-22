"use client";

import * as React from "react";
import { Covered_By_Your_Grace } from 'next/font/google';

const coveredByYourGrace = Covered_By_Your_Grace({
  weight: '400',
  subsets: ['latin'],
});

export function ContactInfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1: About */}
      <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
        <h2 className={`text-2xl font-bold mb-2 ${coveredByYourGrace.className}`}>About</h2>
        <p>
          Đây là trang web quản lý nông trại phi tập trung đầu tiên trên thế giới, chú trọng vào tính bảo mật, minh bạch và tính công bằng cho các nông dân.
        </p>
      </div>

      {/* Card 2: Contact */}
      <div className="bg-lime-500 text-white p-6 rounded-lg shadow-md">
        <h2 className={`text-2xl font-bold mb-2 ${coveredByYourGrace.className}`}>Contact</h2>
        <p>+(84) 6969 696 69</p>
        <p>support@bzea.com</p>
        <p>Mon - Fri: 7:00 am - 6:00 pm</p>
      </div>

      {/* Card 3: Address */}
      <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
        <h2 className={`text-2xl font-bold mb-2 ${coveredByYourGrace.className}`}>Address</h2>
        <p>Số 1, đường Hàn Thuyên, phường Linh Trung</p>
        <p>Thành Phố Thủ Đức, Hồ Chí Minh</p>
      </div>
    </div>
  );
}
