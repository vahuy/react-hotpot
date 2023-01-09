import { useState } from "react";
import BasicDropDown from "../common/DropDown";
import ProductItem from "../product/ProductItem";
import "./page_container.scss";
import MONTHS from "../../js/Constants";

const PageContainer = () => {
  const [pageContainerState, setPageContainerState] = useState({
    totalMoney: -1,
    selectedIndex: -1,
  });
  const items = MONTHS;
  const data = [
    { month: 3, price: 12, name: "Car" },
    { month: 1, price: 1213, name: "Boat" },
    { month: 2, price: 124, name: "Bicycle" },
    { month: 3, price: 1223, name: "Car" },
    { month: 1, price: 1243, name: "Boat" },
    { month: 2, price: 126, name: "Bicycle" },
    { month: 3, price: 1263, name: "Car" },
    { month: 1, price: 1283, name: "Boat" },
    { month: 2, price: 129, name: "Bicycle" },
  ];
  const handleSelect = (item) => {
    const filter = data.filter((dataItem) => dataItem.month === item.key);
    let money = 0;
    filter.forEach((item) => {
      money += item.price;
    });

    setPageContainerState((prevState) => {
      return {
        ...prevState,
        selectedIndex: item.key,
        totalMoney: money,
      };
    });
  };
  const getTotalMoney = () => {
    let money = 0;
    data.forEach((item) => (money += item.price));
    return `Total Money: ${money}`;
  };
  const getDataByMonth = () => {
    const filter = data.filter(
      (item) => item.month === pageContainerState.selectedIndex
    );
    if (filter.length > 0) {
      return filter.map((item, index) => (
        <ProductItem key={index} index={index} info={item} />
      ));
    }
    return null;
  };
  return (
    <div>
      <div className="page-container">
        <div>
          <BasicDropDown
            title={"Select Month"}
            items={items}
            onSelect={handleSelect}
          />
        </div>
        <div className="item-list">
          {pageContainerState.selectedIndex < 0
            ? data.map((item, index) => (
                <ProductItem key={index} index={index} info={item} />
              ))
            : getDataByMonth()}
        </div>
      </div>
      <div>
        {pageContainerState.totalMoney >= 0
          ? `Total Money: ${pageContainerState.totalMoney}`
          : getTotalMoney()}
      </div>
    </div>
  );
};
export default PageContainer;
