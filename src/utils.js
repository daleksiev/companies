import { companies_information, /* company_stock_prices */ } from './data';

export const industries = {};

export const sortCompaniesBy = (key) => (a, b) => a[key] - b[key];

export const getNameOfIndustry = (oldIndustryName) => {
    if (Object.hasOwn(industries, oldIndustryName)) {
        return industries[oldIndustryName];
    }

    let industryName = oldIndustryName;
    industryName = industryName.split('');
    const findReplacementIndex = () => industryName.findIndex(x => x === '-');
    let replaceIndex = findReplacementIndex();

    while (replaceIndex !== -1) {
        industryName[replaceIndex] = ' ';
        replaceIndex = findReplacementIndex();
    }

    industryName = industryName.join('');
    industries[oldIndustryName] = industryName;

    return industryName;
}

export const getCompanyData = () => {
    const newData = {};

    companies_information.forEach(company => {
        let { industry } = company;
        industry = getNameOfIndustry(industry)

        if (Object.hasOwn(newData, industry)) {
            newData[industry].push(company);
        } else {
            newData[industry] = [company];
        }
    });

    return newData;
}
