import getData from "../../../../assets/index";
export default function NavBar() {
  const listNav = getData().map((nav, id) => (
    <div
      key={id}
      id={nav.name}
      onClick={(e) => {
        if (e.currentTarget.classList !== "active") {
          e.currentTarget.classList.toggle("active");
        }
      }}
      className={nav.active ? "list__items active" : "list__items"}
    >
      {nav.logo}
      <h3 className='list__title'>{nav.name}</h3>
    </div>
  ));

  return <nav className='list'>{listNav}</nav>;
}
