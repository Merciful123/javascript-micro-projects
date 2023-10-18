import React from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { setFilter, clearFilter } from "../store/actions/catalogActions";

const Catalog = ({ catalog, departments, onSetFilter, onClearFilter }) => {
  return (
    <div className="catalog">
      <h1>Catalog</h1>
      {departments &&
        departments.map(({ id, title }) => (
          <button
            key={id}
            className="department-filters"
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
        {catalog && catalog.map(item => <Product key={item.id} {...item} />)}
      </div>
    </div>
  );
};

const filterProducts = (products, filter) =>
  filter ? products.filter(item => item.department === filter) : products;

const mapStateToProps = state => {
  return {
    catalog: filterProducts(state.catalog.products, state.catalog.filter),
    departments: state.catalog.departments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetFilter: department => dispatch(setFilter(department)),
    onClearFilter: () => dispatch(clearFilter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
