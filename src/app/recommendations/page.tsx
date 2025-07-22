'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const recommendations = [
  {
    title: 'The Overstory',
    writer: 'Richard Powers',
    bookshop: 'https://bookshop.org/p/books/the-overstory-richard-powers/1000000001',
    watch: 'https://youtube.com/watch?v=example1',
    date: 'July 10, 2025',
    category: 'Fiction',
  },
  {
    title: 'Braiding Sweetgrass',
    writer: 'Robin Wall Kimmerer',
    bookshop: 'https://bookshop.org/p/books/braiding-sweetgrass/1000000002',
    watch: 'https://youtube.com/watch?v=example2',
    date: 'July 15, 2025',
    category: 'Non-Fiction',
  },
  {
    title: 'Piranesi',
    writer: 'Susanna Clarke',
    bookshop: 'https://bookshop.org/p/books/piranesi/1000000003',
    watch: 'https://youtube.com/watch?v=example3',
    date: 'July 20, 2025',
    category: 'Fantasy',
  },
]

export default function BookRecommendationsPage() {
  const [search, setSearch] = useState('')

  const filteredRecommendations = recommendations.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.writer.toLowerCase().includes(search.toLowerCase()) ||
    book.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-xl mx-auto px-2 py-6">
        <h1 className="text-3xl md:text-5xl mb-4 text-center py-20">
          YouTube Book Recommendations
        </h1>

        <input
          type="text"
          placeholder="Search by title, writer, or category..."
          className="mb-6 p-3 border rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border text-left">Title</th>
                <th className="p-3 border text-left">Writer</th>
                <th className="p-3 border text-left">Buy</th>
                <th className="p-3 border text-left">Watch</th>
                <th className="p-3 border text-left">Date</th>
                <th className="p-3 border text-left">Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecommendations.map((book, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-3 border">{book.title}</td>
                  <td className="p-3 border">{book.writer}</td>
                  <td className="p-3 border">
                    <Link href={book.bookshop} target="_blank" className="text-blue-500 underline">
                      Bookshop
                    </Link>
                  </td>
                  <td className="p-3 border">
                    <Link href={book.watch} target="_blank" className="text-blue-500 underline">
                      Watch
                    </Link>
                  </td>
                  <td className="p-3 border">{book.date}</td>
                  <td className="p-3 border">{book.category}</td>
                </tr>
              ))}

              {filteredRecommendations.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-gray-500">
                    No book recommendations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
