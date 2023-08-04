import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.map((product) => {
    if (filterText) {
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return null;
      }
    }

    if (inStockOnly && !product.stocked) {
      return null;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }

    rows.push(<ProductRow key={product.name} product={product} />);

    return (lastCategory = product.category);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
