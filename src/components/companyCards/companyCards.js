import CompanyCard from "../companyCard";
import { getCompanyData, sortCompaniesBy } from '../../utils';
import './companyCards.scss';

const CompanyCards = () => {
    const companyData = getCompanyData();
    return (
        <div className="industriesWrapper">
            {Object.keys(companyData).map(industry => (
                <div className="industriesColumn" key={industry}>
                    <h1>{industry}</h1>

                    {companyData[industry]
                        .sort(sortCompaniesBy('popularityIndex'))
                        .map(data => <CompanyCard
                            key={data.company_name}
                            price={data.price}
                            companyName={data.company_name}
                            stockName={data.stock_name}
                            stockSymbol={data.stock_symbol}
                            marketCap={data.market_cap}
                            volume={data.volume}
                        />
                        )
                    }
                </div>
            ))}
        </div>
    )
};

export default CompanyCards;
