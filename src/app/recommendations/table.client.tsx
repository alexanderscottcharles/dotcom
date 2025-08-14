'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import type { Rec } from '../../../types/recommendations'


export default function ClientRecommendationsTable({ initialData, }: { initialData: Rec[] }) {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return initialData
    return initialData.filter(b =>
      (b.title ?? '').toLowerCase().includes(q) ||
      (b.writer ?? '').toLowerCase().includes(q) ||
      (b.category ?? '').toLowerCase().includes(q)
    )
  }, [initialData, search])



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
                <th className="p-3 border text-left">Rating</th>
                <th className="p-3 border text-left">Bookshop</th>
                  <th className="p-3 border text-left">Amazon</th>
                <th className="p-3 border text-left">Watch</th>
                <th className="p-3 border text-left">Category</th>
                
              </tr>
            </thead>
            <tbody>
              {filtered.map((book) => (
                <tr key={book.id} className="hover:bg-gray-100">
                  <td className="p-3 border">{book.title}</td>
                  <td className="p-3 border">{book.writer}</td>
                  <td className="p-3 border">{book.rating}</td>
                  <td className="p-3 border">
                    {book.bookshop ? (
                      <Link href={book.bookshop} target="_blank" className="text-blue-500 underline">
                        Bookshop
                      </Link>
                    ) : (
                        <span className="text-blue-500 underline cursor-pointer opacity-50">
      Bookshop
    </span>
                    )}
                  </td>
                    <td className="p-3 border">
                    {book.amazon ? (
                      <Link href={book.amazon} target="_blank" className="text-blue-500 underline">
                        Amazon
                      </Link>
                    ) : (
                        <span className="text-blue-500 underline cursor-pointer opacity-50">
      Amazon
    </span>
                    )}
                  </td>
                  <td className="p-3 border">
                    {book.watch ? (
                      <Link href={book.watch} target="_blank" className="text-blue-500 underline">
                        Watch
                      </Link>
                    ) : (
                        <span className="text-blue-500 underline cursor-pointer opacity-50">
      Watch
    </span>
                    )}
                  </td>
                
                  <td className="p-3 border">{book.category ?? ''}</td>
                </tr>
              ))}

              {filtered.length === 0 && (
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
