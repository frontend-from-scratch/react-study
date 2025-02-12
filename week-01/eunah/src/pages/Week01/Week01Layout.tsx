// src/pages/Week01/Week01Layout.tsx
import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Week01Layout: React.FC = () => {
    return (
        <div className="p-4">
            <h1>Week01</h1>
            <nav className="mb-4">
                <ul className="flex gap-4">
                    <li>
                        <Link to="button" className="text-blue-500 underline">
                            Button
                        </Link>
                    </li>
                    <li>
                        <Link to="textfield" className="text-blue-500 underline">
                            TextField
                        </Link>
                    </li>
                    <li>
                        <Link to="form" className="text-blue-500 underline">
                            Form
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* 자식 라우트 컴포넌트가 이 위치에 렌더링됩니다 */}
            <Outlet />
        </div>
    )
}

export default Week01Layout
