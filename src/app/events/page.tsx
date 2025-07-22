'use client'

import React, { useState } from 'react'

const events = [
  { title: 'Summer Gala', location: 'Los Angeles, CA', date: 'August 10, 2025', time: '7:00 PM' },
  { title: 'Writers Conference', location: 'New York, NY', date: 'September 5, 2025', time: '9:00 AM' },
  { title: 'Film Screening', location: 'Austin, TX', date: 'October 15, 2025', time: '6:30 PM' },
  { title: 'Art Expo', location: 'Chicago, IL', date: 'November 20, 2025', time: '11:00 AM' },
]

export default function EventsPage() {
  const [search, setSearch] = useState('')

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase()) ||
    event.location.toLowerCase().includes(search.toLowerCase()) ||
    event.date.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-xl mx-auto px-2 py-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Upcoming Events</h1>

        <input
          type="text"
          placeholder="Search by title, location, or date..."
          className="mb-6 p-3 border rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border text-left">Title</th>
                <th className="p-3 border text-left">Location</th>
                <th className="p-3 border text-left">Date</th>
                <th className="p-3 border text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-3 border">{event.title}</td>
                  <td className="p-3 border">{event.location}</td>
                  <td className="p-3 border">{event.date}</td>
                  <td className="p-3 border">{event.time}</td>
                </tr>
              ))}

              {filteredEvents.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-6 text-center text-gray-500">
                    No events found.
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
