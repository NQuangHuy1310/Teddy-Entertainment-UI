import { Link } from 'react-router-dom'
import { sidebars } from '~/constants'

const Sidebar = () => {
  return (
    <aside className="h-max w-1/4 ">
      <h4>Cài đặt</h4>
      <div className="mt-4 flex flex-col gap-6">
        {sidebars.map((item, index) => {
          return (
            <Link
              to={item.link}
              key={index}
              className="flex items-center gap-4 rounded-md bg-white px-6 py-5 text-base font-semibold shadow-sm hover:opacity-80 hover:transition-all"
            >
              <item.icon className="h-5 w-5" />
              {item.text}
            </Link>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
