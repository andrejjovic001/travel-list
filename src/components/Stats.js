export default function Stats({ itemObj }) {
  if (!itemObj.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  // Derived State - varijable izracunate iz vec postojeceg stanja (ne treba koristiti useState)
  const numItems = itemObj.length;
  const numOfPacked = itemObj.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPacked / numItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        {percentage !== 100
          ? `👜 You have ${numItems} items on your list, and
        you already packed ${numOfPacked} (${percentage}%)`
          : `You got everything!
        Ready to go ✈`}
      </em>
    </footer>
  );
}
