

import { Player } from "@lottiefiles/react-lottie-player";

const LottieAnimated = () => {
  return (
    <div>
      <Player
        src="https://assets2.lottiefiles.com/packages/lf20_j1adxtyb.json"
        className="player"
        loop
        autoplay
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
};

export default LottieAnimated;
