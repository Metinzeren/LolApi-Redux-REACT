import { useDispatch } from "react-redux";
import { deletePlayerStatus } from "../redux/actions/searchAction";

const PlayerCart = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = (_player) => {
    dispatch(deletePlayerStatus(_player));
  };

  return (
    <div key={item.id}>
      <div className="playerCart">
        <div
          style={{ cursor: "pointer" }}
          onClick={handleDelete.bind(this, item.name)}
        >
          Avada Kedavra!
        </div>
        <h1>{item.name}</h1>
        <span>Level: {item.summonerLevel}</span>
        <img
          src={
            "http://ddragon.leagueoflegends.com/cdn/10.15.1/img/profileicon/" +
            item.profileIconId +
            ".png"
          }
          alt="img"
        ></img>
      </div>
    </div>
  );
};

export default PlayerCart;
