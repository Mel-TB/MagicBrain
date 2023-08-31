import Tilt from "react-parallax-tilt";
import brain from "../../assets/brainLogo.png";
import { StyledImg, StyledLogo } from "./Logo.styles";
const Logo = () => {
  return (
    <StyledLogo>
      <Tilt
        className='Tilt'
        option={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className='Tilt-inner'>
          <StyledImg
            alt='logo'
            src={brain}
          />
        </div>
      </Tilt>
    </StyledLogo>
  );
};

export default Logo;
