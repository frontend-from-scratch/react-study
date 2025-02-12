// src/pages/HomePage.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
    return (
        <div className="p-4">
            <h1>홈페이지</h1>
            <div className="mt-2">
                <ul className="space-y-2">
                    <li>
                        <Link to="/week01" className="text-blue-500 underline">
                            Week 1로 이동
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/week02" className="text-blue-500 underline">
                            Week 2로 이동
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default HomePage
