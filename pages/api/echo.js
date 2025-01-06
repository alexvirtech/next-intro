export default function echo(req, res) {
    res.status(200).json({ message: `Hello, ${req.query.name ?? "Braude!"}` })
}
