import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBills } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import coming_soon from '../static/coming_soon.jpg'


function Tourney_mobile() {
    return (
        <div className='bg-gradient-to-t from-gray-900 to-gray-600 bg-gradient-to-r relative pb-16'>
            <div className=' flex items-center flex-col w-full space-y-8'>
                <h1 className='uppercase text-gray-300 text-4xl text-center mt-8 mx-4'>Our Tournaments</h1>

                <div className='flex relative h-96 w-64 bg-slate-200 shadow-lg rounded-3xl flex-col items-center justify-center space-y-0 '>
                    <img className='coming-soon rounded-3xl' src={coming_soon}></img>
                    <div className='valorant-card-img w-24 h-24 shadow-3xl space-y-0'></div>
                    <h1 className='text-slate-800 text-3xl uppercase space-y-0 text-center'>glitchpop</h1>
                    <div className='flex flex-col space-y-0 mt-4'>
                        <div className='flex flex-row space-x-4 px-1'><FontAwesomeIcon icon={faCalendar} className='pt-1' /><p className='text-gray-700'> 16th October 2022</p></div>
                        <div className='flex flex-row space-x-4 px-1'><FontAwesomeIcon icon={faClock} className='pt-1' /><p className='text-gray-700'> 20:00 IST</p></div>
                        <div className='flex flex-row space-x-4'><FontAwesomeIcon icon={faMoneyBills} className='pt-1' /><p className='text-gray-700'> Upto 5K</p></div>
                    </div>
                    <button
                        className=" hover:bg-red-50 bg-red-500 hover:text-gray-800 text-gray-50 font-bold rounded-full my-6 py-2 px-4 shadow-lg transition ease-in-out duration-500 shadow-2xl">Register Here</button>
                </div>
                {/* <div className='flex w-full md:w-2/5 justify-center items-start text-center md:text-left'>
            <div className='relative h-96 w-64 bg-slate-200 shadow-lg rounded-3xl flex-col items-center justify-center px-12 space-y-0'>
              <div className='cod-card-img shadow-3xl space-y-0'></div>
              <div><h1 className='text-slate-800 text-3xl uppercase space-y-0'>Loadout</h1></div>
              <div className='flex flex-col space-y-0 mt-4'>
                <div className='flex flex-row space-x-4 px-1'><FontAwesomeIcon icon={faCalendar} className='pt-1' /><p className='text-gray-700'> 2nd August 2022</p></div>
                <div className='flex flex-row space-x-4 px-1'><FontAwesomeIcon icon={faClock} className='pt-1' /><p className='text-gray-700'> 22:00 IST</p></div>
                <div className='flex flex-row space-x-4'><FontAwesomeIcon icon={faMoneyBills} className='pt-1' /><p className='text-gray-700'> Upto 2K</p></div>
              </div>
              <div className='space-y-0'>
                <button
                  className=" bg-red-50 hover:bg-red-500 text-gray-800 hover:text-gray-50 font-bold rounded-full my-6 py-2 px-4 shadow-lg transition ease-in-out duration-500 shadow-2xl">View Results</button>
              </div>

            </div> */}
                <div className='flex relative h-96 w-64 bg-slate-200 shadow-lg rounded-3xl flex-col items-center justify-center space-y-0 '>
                    <div className='fifa-card-img w-24 h-24 shadow-3xl space-y-0 mt-4'></div>
                    <div><h1 className='text-slate-800 text-3xl uppercase space-y-0'>Kick OFF</h1></div>
                    <div className='flex flex-col space-y-0 mt-4'>
                        <div className='flex flex-row space-x-4 px-1'><FontAwesomeIcon icon={faCalendar} className='pt-1' /><p className='text-gray-700'> 20th October 2022</p></div>
                        <div className='flex flex-row space-x-4 px-1'><FontAwesomeIcon icon={faClock} className='pt-1' /><p className='text-gray-700'> 21:00 IST</p></div>
                        <div className='flex flex-row space-x-4'><FontAwesomeIcon icon={faMoneyBills} className='pt-1' /><p className='text-gray-700'> Upto 1.5K</p></div>
                    </div>
                    <div className='space-y-0'>
                        <button
                            className=" bg-red-50 hover:bg-red-500 text-gray-800 hover:text-gray-50 font-bold rounded-full my-6 py-2 px-4 shadow-lg transition ease-in-out duration-500 shadow-2xl">View Results</button>
                    </div>

                </div>
                <div className='flex relative h-96 w-64 bg-slate-200 shadow-lg rounded-3xl flex-col items-center justify-center space-y-0 '>
                <div className='minecraft-card-img w-24 h-24 shadow-3xl space-y-0 mt-4'></div>
                    <div><h1 className='text-slate-800 text-3xl uppercase space-y-0'>Cube Wars</h1></div>
                    <div className='flex flex-col space-y-0 mt-4'>
                        <div className='flex flex-row space-x-4 px-1'><FontAwesomeIcon icon={faCalendar} className='pt-1' /><p className='text-gray-700'> 19th September 2022</p></div>
                        <div className='flex flex-row space-x-4 px-1'><FontAwesomeIcon icon={faClock} className='pt-1' /><p className='text-gray-700'> 22:00 IST</p></div>
                        <div className='flex flex-row space-x-4'><FontAwesomeIcon icon={faMoneyBills} className='pt-1' /><p className='text-gray-700'> Upto 2K</p></div>
                    </div>
                    <div className='space-y-0'>
                        <Link to='/cube_wars'>
                            <button className=" bg-red-50 hover:bg-red-500 text-gray-800 hover:text-gray-50 font-bold rounded-full my-6 py-2 px-4 shadow-lg transition ease-in-out duration-500 shadow-2xl">View Results</button>
                        </Link>
                    </div>

                </div>


                <button
                    className=" bg-red-50 hover:bg-red-500 text-gray-800 hover:text-gray-50 font-bold rounded-full my-6 py-4 px-4 shadow-lg transition ease-in-out duration-500 shadow-2xl">View More</button>
            </div>


        </div>
    )
}

export default Tourney_mobile