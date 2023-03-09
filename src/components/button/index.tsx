import Link from "next/link";

interface ILink {
  link: string
}
export const Button = ({link}: ILink) => {
  return <Link legacyBehavior href={link}>
    <a className="link">Go <span>-&gt;</span></a>
  </Link>
}