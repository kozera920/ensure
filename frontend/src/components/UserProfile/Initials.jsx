import React from 'react'

const Initials = ({user}) => {
  return (
    <div className="w-24 h-24 max-w-[658.60px] relative bg-zinc-500 rounded-[44.50px] overflow-hidden">
        <div className="left-[20.77px] top-[27.41px] absolute justify-center text-white text-3xl font-bold font-['Open_Sans'] leading-9">{getInitials(user?.name)}</div>
    </div> 
  )
}
function getInitials(name) {
  if (!name) return "";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
export default Initials