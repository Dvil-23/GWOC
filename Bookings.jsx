const bookings = [
  { id: 1, name: "Amit", service: "Ice Bath", status: "Pending" },
  { id: 2, name: "Neha", service: "Steam", status: "Approved" },
];

export default function Bookings() {
  function exportExcel() {
    alert("Excel export coming soon 📊");
  }

  return (
    <>
      <div className="toolbar">
        <h3>Bookings</h3>
        <button onClick={exportExcel}>Export Excel</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.name}</td>
              <td>{b.service}</td>
              <td>{b.status}</td>
              <td>
                <button>Approve</button>
                <button className="danger">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
