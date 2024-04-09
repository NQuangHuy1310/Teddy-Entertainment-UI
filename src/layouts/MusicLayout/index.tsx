import { ReactNode } from 'react'
import MusicSidebar from '../components/MusicSidebar'
import MusicHeader from '../components/MusicHeader'

const MusicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen gap-3 bg-DarkBase p-3 text-White">
      <MusicSidebar />
      <div className="no-scrollbar flex-1 overflow-y-auto rounded-lg bg-Dark">
        <MusicHeader />
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export default MusicLayout
