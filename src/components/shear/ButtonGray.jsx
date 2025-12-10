

export default function ButtonGray({title}) {
  return (
    <div>
      <button
  className="
    px-6 py-3 text-[13px] font-medium uppercase text-white  rounded-lg
    bg-[linear-gradient(90deg,rgba(25,50,77,1),rgba(25,50,77,0.6)_70%,rgba(25,50,77,0)_100%)]
    hover:opacity-90 transition"
>
  {title}
</button>
</div>
  )
}
