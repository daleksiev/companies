import './companyCard.scss'

const CompanyCard = ({
    price,
    companyName,
    stockName,
    stockSymbol,
    marketCap,
    volume
}) => (
    <div className={`companyCard 
        ${volume === 'UP' ? 'greenBorder' : ''}
        ${volume === 'DOWN' ? 'redBorder' : ''}
    `}>
        <p>Stock price: {price}</p>
        <p>Company name: {companyName}</p>
        <p>Stock name: {stockName}</p>
        <p>Stock symbol: {stockSymbol}</p>
        <p>Market cap: {marketCap}</p>
    </div>
);

export default CompanyCard;
