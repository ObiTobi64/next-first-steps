import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Esta es la pagina de precios de mi servicio',
    keywords: ['Pricing page', 'Precios','...']
};

export default function pricingPage(){
    return (
        <>
            <span className="text-5xl">pricingPage</span>
        </>
    )
}