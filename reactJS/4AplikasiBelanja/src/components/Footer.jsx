export default function Footer({ items }) {
  if (!items.length) return <footer className="stats">Tidak ada item</footer>;

  const totalItem = items.length;
  const completedItem = items.filter((item) => item.checked).length;
  const percentageItem = Math.round((completedItem / totalItem) * 100);

  return (
    <footer className="stats">
      Ada {totalItem} barang di daftar belanjaan, {completedItem} barang sudah
      dibeli ({percentageItem}%)
    </footer>
  );
}
