export default function ProductList() {
    let products = [
        { Name: 'iphone', Price: 120000, Qty: 1, Discount: 20 },
        { Name: 'iQOO', Price: 25000, Qty: 2, Discount: 30 },
        { Name: 'Samsung', Price: 20000, Qty: 1, Discount: 25 }
    ]

    return (
        <>
            <h1>Products</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price (INR)</th>
                        <th>Qty</th>
                        <th>Discount</th>
                        <th>Net Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(p =>
                            <tr>
                                <td>{p.Name}</td>
                                <td>{p.Price}</td>
                                <td>{p.Qty}</td>
                                <td>{p.Price * p.Discount / 100}</td>
                                <td>{p.Price - (p.Price * p.Discount / 100)}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}