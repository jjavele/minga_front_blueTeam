export default function Arrow({ icon, onClick }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );
}
