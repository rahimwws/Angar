interface PriceProps {
    price: number;
}

export const formatPrice = (price: number): string => {
    const priceString = price.toString();
    const thousands = priceString.slice(-3);
    const millions = priceString.slice(-6, -3);
    const billions = priceString.slice(0, -6);

    const formattedPrice = `${billions && `${billions} `}${millions && `${millions} `}${thousands}`;
    return formattedPrice.trim();
};
