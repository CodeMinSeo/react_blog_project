import React, { useState } from "react";

const mockData = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  title: `게시글 제목 ${i + 1}`,
  author: `작성자 ${i + 1}`,
  date: `2025-04-${(i % 30) + 1}`,
}));

const ITEMS_PER_PAGE = 10;

export default function TestPage3() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockData.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = mockData.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-8 h-8 text-sm rounded-full mx-1 ${
            currentPage === i
              ? "bg-blue-500 text-white font-semibold"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📋 게시판</h2>
      <div className="overflow-x-auto shadow rounded-2xl border border-gray-200">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">제목</th>
            <th className="px-4 py-3 text-left">작성자</th>
            <th className="px-4 py-3 text-left">날짜</th>
          </tr>
          </thead>
          <tbody>
          {currentItems.map((item) => (
            <tr
              key={item.id}
              className="border-t border-gray-100 hover:bg-gray-50 transition"
            >
              <td className="px-4 py-3">{item.id}</td>
              <td className="px-4 py-3">{item.title}</td>
              <td className="px-4 py-3">{item.author}</td>
              <td className="px-4 py-3">{item.date}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          ←
        </button>

        {renderPageNumbers()}

        <button
          className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          →
        </button>
      </div>
    </div>
  );
}
