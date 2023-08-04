export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  function eventFilterTextChange(e) {
    onFilterTextChange(e.target.value);
  }

  function eventInStockOnlyChange(e) {
    onInStockOnlyChange(e.target.checked);
  }

  return (
    <form>
      <section>
        <input
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={eventFilterTextChange}
        />
      </section>
      <section>
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={eventInStockOnlyChange}
          />
          Only show products in stock
        </label>
      </section>
    </form>
  );
}
