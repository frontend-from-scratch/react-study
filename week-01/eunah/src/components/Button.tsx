// src/components/Button.tsx

import React from 'react'

export interface ButtonProps {
    variant?: 'text' | 'outlined' | 'contained'
    size?: 'small' | 'medium' | 'large'
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning'
    disabled?: boolean
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    loading?: boolean
    loadingPosition?: 'start' | 'end' | 'center'
    fullWidth?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
    variant = 'contained',
    size = 'medium',
    color = 'default',
    disabled = false,
    startIcon,
    endIcon,
    loading = false,
    loadingPosition = 'start',
    fullWidth = false,
    onClick,
    children,
}) => {
    // 기본 버튼 클래스
    let baseClasses =
        'inline-flex items-center justify-center border font-medium focus:outline-none transition-colors duration-200 rounded'
    if (fullWidth) {
        baseClasses += ' w-full'
    }

    // 사이즈에 따른 클래스
    let sizeClasses = ''
    if (size === 'small') {
        sizeClasses = 'px-2 py-1 text-sm'
    } else if (size === 'large') {
        sizeClasses = 'px-6 py-3 text-lg'
    } else {
        sizeClasses = 'px-4 py-2 text-base'
    }

    // 색상 및 variant 처리
    let variantClasses = ''
    if (color === 'default') {
        if (variant === 'contained') {
            variantClasses = 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        } else if (variant === 'outlined') {
            variantClasses = 'bg-transparent border-gray-400 text-gray-700 hover:bg-gray-100'
        } else if (variant === 'text') {
            variantClasses = 'bg-transparent border-transparent text-gray-700 hover:bg-gray-100'
        }
    } else {
        const colorMap: { [key: string]: string } = {
            primary: 'blue',
            secondary: 'gray',
            error: 'red',
            success: 'green',
            info: 'sky',
            warning: 'amber',
        }
        const colorName = colorMap[color] || 'gray'
        if (variant === 'contained') {
            variantClasses = `bg-${colorName}-500 text-white hover:bg-${colorName}-600`
        } else if (variant === 'outlined') {
            variantClasses = `bg-transparent border border-${colorName}-500 text-${colorName}-500 hover:bg-${colorName}-50`
        } else if (variant === 'text') {
            variantClasses = `bg-transparent border-transparent text-${colorName}-500 hover:bg-${colorName}-50`
        }
    }

    // disabled 또는 loading 상태일 때 적용되는 클래스
    const disabledClasses =
        disabled || loading ? ' opacity-50 cursor-not-allowed' : ' cursor-pointer'

    const buttonClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${disabledClasses}`

    // 로딩 상태 스피너 (Tailwind의 animate-spin 사용)
    const spinner = (
        <svg
            className="animate-spin h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
    )

    // 버튼 내부 내용 구성
    let content
    if (loading && loadingPosition === 'center') {
        content = spinner
    } else {
        content = (
            <>
                {loading && loadingPosition === 'start' && <span className="mr-2">{spinner}</span>}
                {startIcon && !loading && <span className="mr-2">{startIcon}</span>}
                <span>{children}</span>
                {endIcon && !loading && <span className="ml-2">{endIcon}</span>}
                {loading && loadingPosition === 'end' && <span className="ml-2">{spinner}</span>}
            </>
        )
    }

    return (
        <button className={buttonClasses} disabled={disabled || loading} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button
