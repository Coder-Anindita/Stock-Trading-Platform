import { useState } from "react";
import {Tooltip,Grow} from "@mui/material";
import { watchlist } from "../data/data";
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from "@mui/icons-material"
const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} /50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
            return (
                <WatchListItem stock={stock} key={index}></WatchListItem>
            )
        }

        )}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem=( {stock})=>{
    const[showWatchListActions,setShowWatchListActions]=useState(false)
    const handleMouseEnter=(e)=>{
        setShowWatchListActions(true)
    }
    const handleMouseExit=(e)=>{
        setShowWatchListActions(false);
    }

    return(
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
            <div className="item">
                <p className={stock.isDown?"down":"up"}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown?(<KeyboardArrowDown className="down"/>):<KeyboardArrowUp className="up"/>}
                    <span className="price">{stock.price}</span>

                </div>
            </div>
            {showWatchListActions && <WatchListAction uid={stock.name}/>}
        </li>
    )
}

const WatchListAction=({uid})=>{
    return(
        <span className="actions">
            <span>
                <Tooltip
                    title="Buy (B)"
                    placement ="top"
                    arrow
                    TransitionComponent={Grow}
                >
                    <button className="buy">buy</button>
                </Tooltip>
                <Tooltip
                    title="Sell (S)"
                    placement ="top"
                    arrow
                    TransitionComponent={Grow}
                >
                    <button className="sell">sell</button>
                </Tooltip>
                <Tooltip
                    title="Analytic (A)"
                    placement ="top"
                    arrow
                    TransitionComponent={Grow}
                >
                    <button className="action"><BarChartOutlined className="chart"/></button>
                </Tooltip>
                <Tooltip
                    title="More (M)"
                    placement ="top"
                    arrow
                    TransitionComponent={Grow}
                >
                    <button className="action"><MoreHoriz className=""/></button>
                </Tooltip>
            </span>
        </span>
    )
}