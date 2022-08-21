import './companyCard.scss'

const CompanyCard = ({
    stockPrice,
    companyName,
    stockName,
    stockSymbol,
    marketCap
}) => (
    <div className={`companyCard`}>
        <p>Stock price: {stockPrice}</p>
        <p>Company name: {companyName}</p>
        <p>Stock name: {stockName}</p>
        <p>Stock symbol: {stockSymbol}</p>
        <p>Market cap: {marketCap}</p>
    </div>
);

export default CompanyCard;
