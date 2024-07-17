export default async  function handler(req, res) {    
    const resp = await fetch(`https://api.mtw-testnet.com/assets/${req.query.symbol}`)
    const data = await resp.json()
    res.status(200).json(data)    
}