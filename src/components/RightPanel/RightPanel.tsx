import LeftIndicator from "../LeftIndicator/LeftIndicator";
import "./RightPanel.scss";
const RightPanel = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="home_right_panel">
      <LeftIndicator />
      <div className="right_panel">{children}</div>
    </div>
  );
};

export default RightPanel;
