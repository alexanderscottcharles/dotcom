import Link from 'next/link'

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Connect With Me</h1>

      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">

        {/*Update this section with react-social-media-embed with specific posts*/}
        
        {/* Instagram */}
        <Link href="https://www.instagram.com/your_username" target="_blank" className="bg-gradient-to-br from-pink-500 to-yellow-500 text-white rounded-xl p-6 text-center font-semibold text-xl hover:scale-105 transition">
          Instagram
        </Link>
        <div> Photo</div>
    

        {/* TikTok */}
        <div> Photo</div>
        <Link href="https://www.tiktok.com/@your_username" target="_blank" className="bg-black text-white rounded-xl p-6 text-center font-semibold text-xl hover:scale-105 transition">
          TikTok
        </Link>

        {/* YouTube */}
        <Link href="https://www.youtube.com/@your_username" target="_blank" className="bg-red-600 text-white rounded-xl p-6 text-center font-semibold text-xl hover:scale-105 transition">
          YouTube
        </Link>
<div> Photo and link to recs</div>
<div> Photo</div>
        {/* Bluesky */}
        <Link href="https://bsky.app/profile/yourhandle.bsky.social" target="_blank" className="bg-blue-400 text-white rounded-xl p-6 text-center font-semibold text-xl hover:scale-105 transition">
          Bluesky
        </Link>
        

      </div>

      <div> <h1 className="text-center text-6xl p-6 py-40"> ZanderMedia 👑 </h1></div>
      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">

        <p> Resonate</p>
        <p> The Writers List</p>
        <p> TWL Tracking Board </p>
        <p>ASC Tuoring</p>

      </div>


    </div>
  )
}
