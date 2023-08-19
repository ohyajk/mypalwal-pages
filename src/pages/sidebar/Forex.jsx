import React from 'react'

const Forex = () => {


    return (
        <>
            <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
                CURRENCY
            </h2>
            <table className='prose border-collapse border-news-red bg-news-red/10'>
                <thead>
                    <tr>
                        <th className='border border-news-red p-2 text-left'>Currency</th>
                        <th className='border border-news-red p-2 text-left'>Value</th>
                        <th className='border border-news-red p-2 text-left'> % Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-news-red p-2 text-left'>USD</td>
                        <td className='border border-news-red p-2 text-left'>83</td>
                        <td className='border border-news-red p-2 text-left'>2%</td>
                    </tr>
                    <tr>
                        <td className='border border-news-red p-2 text-left'>EUR</td>
                        <td className='border border-news-red p-2 text-left'>90</td>
                        <td className='border border-news-red p-2 text-left'>2%</td>
                    </tr>
                    <tr>
                        <td className='border border-news-red p-2 text-left'>GBP</td>
                        <td className='border border-news-red p-2 text-left'>100</td>
                        <td className='border border-news-red p-2 text-left'>2%</td>
                    </tr>
                    <tr>
                        <td className='border border-news-red p-2 text-left'>AUD</td>
                        <td className='border border-news-red p-2 text-left'>64</td>
                        <td className='border border-news-red p-2 text-left'>1%</td>
                    </tr>
                    <tr>
                        <td className='border border-news-red p-2 text-left'>AED</td>
                        <td className='border border-news-red p-2 text-left'>24</td>
                        <td className='border border-news-red p-2 text-left'>3%</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Forex