import { navigation } from "../data";

const Navigation = () => {
  return (
    <ul id="navigation-list">
      {
        navigation.map((link) => {
          const {id,href,title} = link;
          return (
            <li key={id}>
              <a href={`#${href}`}>{title}</a>
            </li>
          )
        })
      }
    </ul>
  )
}
export default Navigation;