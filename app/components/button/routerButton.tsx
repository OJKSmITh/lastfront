"use client"

const RouterButton = ({
  width,
  height,
  color,
  padding,
  children,
  background,
  border,
  borderRadius,
  fontSize,
  fontFamily,
  fontWeight,
  cursor,
  letterSpacing,
  onClick,
}: {
  width: string
  height: string
  color: string
  padding: string
  children: string
  background: string
  border: string
  borderRadius: string
  fontSize: string
  fontFamily: string
  fontWeight: string
  cursor: string
  letterSpacing: string
  onClick: () => void
}) => {
  return (
    <div>
      <button
        style={{
          width,
          height,
          color,
          padding,
          background,
          border,
          borderRadius,
          fontSize,
          fontFamily,
          fontWeight,
          cursor,
          letterSpacing,
        }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}

export default RouterButton
