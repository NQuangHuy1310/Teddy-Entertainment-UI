interface HeadingProps {
  discover: string
  heading: string
  subHeading: string
}

const Heading = ({ discover, heading, subHeading }: HeadingProps) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <p>{discover}</p>
      <h2>{heading}</h2>
      <p>{subHeading}</p>
    </div>
  )
}

export default Heading
