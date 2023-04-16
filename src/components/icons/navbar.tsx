import { component$ } from '@builder.io/qwik'

export default component$(()=> {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="hover:text-gray-200"
    fill="none"
    viewBox="0 0 24 24"
    width="30px"
    height="30px"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
  )
})
