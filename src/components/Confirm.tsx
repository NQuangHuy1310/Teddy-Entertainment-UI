import { Button } from './Button'
import { Modal } from 'antd'

interface confirmProps {
  title: string
  subTitle: string
  open: boolean
  onOk: () => void
  onCancel: () => void
  type: 'success' | 'errro'
  okText?: string
}

const Confirm = (props: confirmProps) => {
  const { title, subTitle, open, onOk, onCancel, type, okText } = props

  return (
    <Modal
      open={open}
      footer={null}
      closable={false}
      onCancel={onCancel}
      className="flex w-fit items-center justify-center"
    >
      <div className="flex min-w-[20rem] flex-col items-center justify-center gap-4 rounded-lg bg-Dark px-12 py-14 text-center text-white">
        <h5 className="text-md font-bold">{title}</h5>
        <p className="mb-8 w-[14rem] text-base">{subTitle}</p>
        <div className="flex items-center gap-4">
          <Button variant="default" size="default" onClick={() => onCancel()}>
            Thoát
          </Button>
          <Button variant={type === 'success' ? 'success' : 'error'} size="default" onClick={onOk}>
            {okText ? okText : 'Xóa'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default Confirm
