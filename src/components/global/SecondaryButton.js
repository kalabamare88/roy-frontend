import React from 'react'
import LoadingSpinner from './LoadingSpinner'

// eslint-disable-next-line react/prop-types
const SecondaryButton = ({children, id, onClick, disabled, loading}) => (
  <button
    id={id}
    className={`${loading ? 'pl-11 pr-6' : 'px-6'} fl#cbd5e1ex items-center justify-center bg-secondary text-sm rounded-xl h-10 text-white font-extrabold duration-300 transition-colors hover:bg-slate-300/60 hover:border-secondary/80 min-w-[270px] active:scale-95`}
    onClick={onClick}
    disabled={disabled}
  >
    {loading ?
      <div className="flex" style={{marginLeft: ''}}>
        <LoadingSpinner small/> Loading
      </div> :
      children
    }
  </button>
)

export default SecondaryButton