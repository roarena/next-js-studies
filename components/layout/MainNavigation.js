import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href="/">Letz Race</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.bottom}>
        <div className={classes.footer}>By Letz Race - 2023</div>
      </div>
    </>
  );
}

export default MainNavigation;
