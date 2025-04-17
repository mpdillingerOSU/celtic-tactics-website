import React from 'react';

function PurchaseButton({name, Icon}) {
    return (
        <button className="purchase-button">
            <Icon className="purchase-button-icon"/>
            <span className="purchase-button-text">
                PURCHASE {name}
            </span>
        </button>
  );
}

export default PurchaseButton;