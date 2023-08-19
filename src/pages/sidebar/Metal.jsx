import React from 'react'

const Metal = () => {


    return (
        <>
            <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
                METAL
            </h2>
            <table className='prose border-collapse border-news-red bg-news-red/10'>
                <thead>
                    <tr>
                        <th className='border border-news-red p-2 text-left'>METAL</th>
                        <th className='border border-news-red p-2 text-left'>Value</th>
                        <th className='border border-news-red p-2 text-left'> % Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-news-red p-2 text-left'>Gold</td>
                        <td className='border border-news-red p-2 text-left'>60,000</td>
                        <td className='border border-news-red p-2 text-left'>2%</td>
                    </tr>
                    <tr>
                        <td className='border border-news-red p-2 text-left'>SIlver</td>
                        <td className='border border-news-red p-2 text-left'>730</td>
                        <td className='border border-news-red p-2 text-left'>2%</td>
                    </tr>
                    <tr>
                        <td className='border border-news-red p-2 text-left'>Platinum</td>
                        <td className='border border-news-red p-2 text-left'>33000</td>
                        <td className='border border-news-red p-2 text-left'>2%</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Metal