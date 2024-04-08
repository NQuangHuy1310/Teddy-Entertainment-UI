import { Button } from './Button'
import { Modal } from 'antd'

interface confirmProps {
  title: string
  subTitle: string
  open: boolean
  onOk: () => void
  onCancel: () => void
}

const Confirm = (props: confirmProps) => {
  const { title, subTitle, open, onOk, onCancel } = props

  return (
    <Modal
      open={open}
      footer={null}
      closable={false}
      onCancel={onCancel}
      className="flex w-fit items-center justify-center"
    >
      <div className="flex w-[20rem] flex-col items-center justify-center gap-8 rounded-lg bg-Dark px-8 py-14 text-center text-white">
        <h5 className="text-lg font-bold">{title}</h5>
        <p className="mb-8 w-[14rem] text-sm">{subTitle}</p>
        <div className="flex items-center gap-4">
          <Button variant="default" size="default" onClick={() => onCancel()}>
            Cancel
          </Button>
          <Button variant="error" size="default" onClick={() => onOk()}>
            Remove
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default Confirm
