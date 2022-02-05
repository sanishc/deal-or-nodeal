import PopUp from "./PopUp";
import Input from "../Input/Input";

const LevelComplete = (props) => {
  if (props.banker) {
    if (props.status === "sent") {
      return (
        <PopUp>
          <h5>Waiting For Response From Contestent</h5>
        </PopUp>
      );
    } else {
      return (
        <PopUp button1={{ name: "Send", onClick: props.onSend }}>
          <h1 className="text-xl font-bold">Level Complete</h1>
          <h5 className="my-3">How Much Do You Wish To Offer</h5>
          <Input
            type="number"
            value={props.amount}
            onChange={props.OnAmountChange}
            placeholder="Enter Amount"
          />
        </PopUp>
      );
    }
  } else {
    if (props.offer > 0) {
      return (
        <PopUp
          button1={{ name: "Deal", onClick: props.onDeal }}
          button2={{ name: "NoDeal", onClick: props.onNoDeal }}
        >
          <h5>Banker Offering You</h5>
          <h1 className="text-xl font-bold">{props.offer}</h1>
        </PopUp>
      );
    } else {
      return (
        <PopUp>
          <h5>Waiting For Banker to Respond</h5>
        </PopUp>
      );
    }
  }
};

export default LevelComplete;
