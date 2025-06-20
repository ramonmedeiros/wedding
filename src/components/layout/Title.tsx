interface TitleProps {
  title: string
  description?: string
}

const Title = ({ title, description }: TitleProps) => {
  return (
    <div className="container mx-auto pt-20 pb-10 text-center">
      <h2 className="text-wedding-darkgray fade-in font-serif">{title}</h2>
      {description && <p className="text-wedding-gray text-base max-w-4xl mx-auto fade-in-delay-1 pt-7">
        {description}
      </p>}
    </div>
  )
}

export default Title