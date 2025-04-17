import React from 'react';
import PurchaseButton from '../components/PurchaseButton';
import { FaGamepad, FaSteam, FaPlaystation, FaXbox } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";

function PurchaseRow({optionalClass}) {
    return (
        <div id="purchase-row" className={"purchase-row" + (optionalClass !== undefined ? (" " + optionalClass) : "")}>
            <PurchaseButton name="DIRECT" Icon={FaGamepad} />
            <PurchaseButton name="ON STEAM" Icon={FaSteam} />
            <PurchaseButton name="ON NINTENDO" Icon={BsNintendoSwitch} />
            <PurchaseButton name="ON PLAYSTATION" Icon={FaPlaystation} />
            <PurchaseButton name="ON XBOX" Icon={FaXbox} />
        </div>
  );
}

export default PurchaseRow;