interface AvatarProps {
  initials: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
  name?: string
}

const sizes = { sm: 'w-7 h-7 text-xs', md: 'w-9 h-9 text-sm', lg: 'w-12 h-12 text-base' }

export default function Avatar({ initials, color = '#003087', size = 'md', name }: AvatarProps) {
  return (
    <div
      title={name}
      className={`${sizes[size]} rounded-full flex items-center justify-center font-semibold text-white flex-shrink-0`}
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  )
}
