import getData from "../../../../assets/index";
import { Validation } from "./validator";
export function NavBar() {
  const listNav = getData().map((nav, id) => (
    <div
      key={id}
      id={id}
      onClick={Validation}
      className={
        nav.active
          ? `list__items active ${nav.class}`
          : `list__items ${nav.class}`
      }
    >
      {nav.logo}
      <h3 className='list__title'>{nav.name}</h3>
    </div>
  ));

  return <nav className='list'>{listNav}</nav>;
}
