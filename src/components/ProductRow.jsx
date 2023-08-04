export default function ProductRow({ product }) {
  const productsNotInStock = (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  const productsInStock = product.stocked ? product.name : productsNotInStock;

  return (
    <tr>
      <td>{productsInStock}</td>
      <td>{product.price}</td>
    </tr>
  );
}
