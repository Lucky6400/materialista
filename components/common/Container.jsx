import React from 'react'

const Container = ({ children, className }) => {
    return (
        <div className={"flex flex-wrap justify-between w-full max-w-7xl mx-auto " + className}>
            {children}
        </div>
    )
}

export default Container