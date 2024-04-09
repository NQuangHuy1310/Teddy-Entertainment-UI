import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoMdAdd } from 'react-icons/io'
import { LuLibrary } from 'react-icons/lu'
import { RiBearSmileLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '~/components/Button'
import Confirm from '~/components/Confirm'
import { navBar } from '~/constants/music'

const MusicSidebar = () => {
  const { t } = useTranslation('music')
  const navigate = useNavigate()
  const [openConfirm, setOpenConfirm] = useState<boolean>(false)

  const handleConfirm = () => {
    setOpenConfirm(true)
  }

  return (
    <div className="w-sideBarWidth sticky bottom-0 left-0 top-0 z-50 rounded-md">
      <aside className="flex h-full flex-col gap-3">
        <div className="flex flex-col gap-3 rounded-md bg-Dark p-4">
          <Link
            to="/music"
            className="flex w-fit cursor-pointer items-center gap-1 rounded-lg bg-primary px-4 py-2 text-white"
          >
            <RiBearSmileLine className="h-6 w-6 text-secondary2" />
            <span className="text-lg font-semibold">Teddy</span>
          </Link>

          {navBar.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="flex items-center gap-2 rounded-lg px-1 py-3 hover:opacity-80 hover:transition-all"
            >
              <item.icon className="h-6 w-6" />
              <span className="text-base font-semibold">{t(item.text)}</span>
            </Link>
          ))}
        </div>

        <div className="flex h-full flex-col gap-4 overflow-y-auto rounded-md bg-Dark p-4">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-3 font-bold">
              <LuLibrary className="h-6 w-6" />
              {t('home.library')}
            </h3>

            <span onClick={handleConfirm}>
              <IoMdAdd className="h-6 w-6 cursor-pointer" />
            </span>
          </div>

          <div className="flex flex-col gap-5 rounded-md bg-[#242424] px-4 py-5">
            <div className="flex flex-col gap-2">
              <h6 className="font-bold">Tạo danh sách phát đầu tiên của bạn</h6>
              <p className="text-sm">Rất dễ! Chúng tôi sẽ giúp bạn</p>
            </div>
            <Button className="w-fit rounded-full text-sm" onClick={handleConfirm}>
              Tạo danh sách phát
            </Button>
          </div>
        </div>
      </aside>

      <Confirm
        title="Tạo danh sách phát"
        subTitle="Bạn cần đăng nhập để tạo danh sách phát cho riêng mình"
        open={openConfirm}
        onCancel={() => setOpenConfirm(false)}
        onOk={() => {
          setOpenConfirm(false)
          navigate('/login')
        }}
        type="success"
        okText="Đăng nhập"
      />
    </div>
  )
}

export default MusicSidebar
