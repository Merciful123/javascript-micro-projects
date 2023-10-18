import React from "react";
import { connect } from "react-redux";
import { setFilter, clearFilter } from "../store/actions/catalogActions";
import { addToCart } from "../store/actions/cartActions";
import Product from "./Product";

const Catalog = ({
  catalog,
  onSetFilter,
  onClearFilter,
  onAddToCart,
  departments
}) => {
  return (
    <div className="catalog">
      <h1>Catalog</h1>
      {departments.map(({ id, title }) => (
        <button
          className="department-filters"
          key={id}
          onClick={() => onSetFilter(title)}
        >
          {title}
        </button>
      ))}
      <button
        className="department-filters clear-btn"
        onClick={() => onClearFilter()}
      >
        Clear Filter
      </button>

      <div className="product-units">
        {catalog &&
          catalog.map(item => (
            <Product
              key={item.id}
              {...item}
              onClickAddButton={() => onAddToCart(item)}
            />
          ))}
      </div>
    </div>
  );
};

const filterProducts = (products, filter) => {
  return filter
    ? products.filter(item => item.department === filter)
    : products;
};

const mapStateToProps = state => {
  return {
    catalog: filterProducts(state.catalog.products, state.catalog.filter),
    departments: state.catalog.departments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetFilter: department => {
      dispatch(setFilter(department));
    },
    onClearFilter: () => dispatch(clearFilter()),
    onAddToCart: product => dispatch(addToCart(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
