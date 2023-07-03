
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={1.5}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="125" r="125" /> 
    <rect x="45" y="269" rx="6" ry="6" width="190" height="26" /> 
    <rect x="3" y="311" rx="15" ry="15" width="274" height="86" /> 
    <rect x="6" y="420" rx="8" ry="8" width="91" height="33" /> 
    <rect x="172" y="413" rx="21" ry="21" width="97" height="45" />
  </ContentLoader>
)

export default Skeleton;