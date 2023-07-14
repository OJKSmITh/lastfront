import Link from "next/link"
import styles from "./navModal.module.css"

const NavModal = ({
  list,
  link,
  close,
}: {
  list: string[]
  link: string[]
  close: () => void
}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {list.map((item, index) => (
          <Link href={link[index]} key={index} className={styles.etc}>
            <li key={item} onClick={close}>
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default NavModal
